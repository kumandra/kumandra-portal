"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkEndpoints = checkEndpoints;

var _fs = _interopRequireDefault(require("fs"));

var _api = require("@polkadot/api");

var _util = require("@polkadot/util");

var _xFetch = require("@polkadot/x-fetch");

var _index = require("../api/index.cjs");

var _index2 = require("../endpoints/index.cjs");

// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
const TICK = '`';

function checkEndpoints(issueFile, failures) {
  (0, _index2.createWsEndpoints)((k, v) => v || k).filter(({
    isDisabled,
    isUnreachable,
    value
  }) => !isDisabled && !isUnreachable && value && (0, _util.isString)(value) && !value.includes('127.0.0.1') && !value.startsWith('light://')).map(({
    text,
    value
  }) => ({
    name: text,
    ws: value
  })).filter(v => !!v.ws).forEach(({
    name,
    ws
  }) => it(`${name} @ ${ws}`, async () => {
    const [,, hostWithPort] = ws.split('/');
    const [host] = hostWithPort.split(':');
    const response = await (0, _xFetch.fetch)(`https://dns.google/resolve?name=${host}`);
    const json = await response.json();
    let provider = null;
    let api = null;
    let timerId = null;

    try {
      (0, _util.assert)(json.Answer, `No DNS entry for ${host}`);
      provider = new _api.WsProvider(ws, false);
      api = new _api.ApiPromise({
        provider,
        throwOnConnect: true,
        throwOnUnknown: true,
        typesBundle: _index.typesBundle,
        typesChain: _index.typesChain
      });
      setTimeout(() => {
        provider && provider.connect().catch(() => undefined);
      }, 1000);
      await Promise.race([// eslint-disable-next-line promise/param-names
      new Promise((_, reject) => {
        timerId = setTimeout(() => {
          timerId = null;
          reject(new Error(`Timeout connecting to ${ws}`));
        }, 60000);
      }), api.isReadyOrError]);
    } catch (error) {
      if ((0, _util.isError)(error) && failures.some(f => error.message.includes(f))) {
        process.env.CI_LOG && _fs.default.appendFileSync(issueFile, `\n${TICK}${name} @ ${ws} ${error.message}${TICK}\n`);
        throw error;
      }
    } finally {
      if (timerId) {
        clearTimeout(timerId);
      }

      if (provider) {
        try {
          if (api) {
            await api.disconnect();
          } else {
            await provider.disconnect();
          }
        } catch {// ignore
        }
      }
    }
  }));
}