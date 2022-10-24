"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classPrivateFieldLooseBase2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldLooseBase"));

var _classPrivateFieldLooseKey2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldLooseKey"));

var _rxjs = require("rxjs");

var _chain = require("@polkadot/api-derive/chain");

var _util = require("@polkadot/api-derive/util");

// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
// structs need to be in order

/* eslint-disable sort-keys */
function extractAuthor(digest, api) {
  const preRuntimes = digest.logs.filter(({
    isPreRuntime,
    type
  }) => isPreRuntime && type.toString() === 'SUB_');
  const {
    solution
  } = api.registry.createType('SubPreDigest', preRuntimes[0]);
  return solution.publicKey;
}

function createHeaderExtended(registry, header, api) {
  const HeaderBase = registry.createClass('Header');

  var _author = /*#__PURE__*/(0, _classPrivateFieldLooseKey2.default)("author");

  class SubHeaderExtended extends HeaderBase {
    constructor(registry, header, api) {
      super(registry, header);
      Object.defineProperty(this, _author, {
        writable: true,
        value: void 0
      });
      (0, _classPrivateFieldLooseBase2.default)(this, _author)[_author] = extractAuthor(this.digest, api);
      this.createdAtHash = header === null || header === void 0 ? void 0 : header.createdAtHash;
    }

    get author() {
      return (0, _classPrivateFieldLooseBase2.default)(this, _author)[_author];
    }

  }

  return new SubHeaderExtended(registry, header, api);
}

function subscribeNewHeads(instanceId, api) {
  return (0, _util.memo)(instanceId, () => (0, _rxjs.combineLatest)([api.rpc.chain.subscribeNewHeads()]).pipe((0, _rxjs.map)(([header]) => {
    return createHeaderExtended(header.registry, header, api);
  })));
}

function getHeader(instanceId, api) {
  return (0, _util.memo)(instanceId, () => (0, _rxjs.combineLatest)([api.rpc.chain.getHeader()]).pipe((0, _rxjs.map)(([header]) => {
    return createHeaderExtended(header.registry, header, api);
  })));
}

const definitions = {
  derives: {
    chain: {
      bestNumber: _chain.bestNumber,
      bestNumberFinalized: _chain.bestNumberFinalized,
      bestNumberLag: _chain.bestNumberLag,
      getBlock: _chain.getBlock,
      getHeader,
      subscribeNewBlocks: _chain.subscribeNewBlocks,
      subscribeNewHeads
    }
  },
  types: [{
    minmax: [0, undefined],
    types: {
      FarmerPublicKey: '[u8; 32]',
      Solution: {
        publicKey: 'FarmerPublicKey',
        nonce: 'u64',
        encoding: 'Vec<u8>',
        signature: 'Vec<u8>',
        tag: '[u8; 8]'
      },
      SubPreDigest: {
        slot: 'u64',
        solution: 'Solution'
      }
    }
  }]
};
var _default = definitions;
exports.default = _default;