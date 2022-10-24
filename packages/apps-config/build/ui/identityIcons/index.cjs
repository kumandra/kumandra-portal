"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identitySpec = exports.identityNodes = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
// overrides based on the actual software node type, valid values are one of -
// polkadot, substrate, beachball, robohash
const identityNodes = [['centrifuge chain', 'polkadot'], ['joystream-node', 'beachball'], ['parity-polkadot', 'polkadot']].reduce((icons, [node, icon]) => _objectSpread(_objectSpread({}, icons), {}, {
  [node.toLowerCase().replace(/-/g, ' ')]: icon
}), {});
exports.identityNodes = identityNodes;
const identitySpec = [['kusama', 'polkadot'], ['polkadot', 'polkadot'], ['rococo', 'polkadot'], ['statemine', 'polkadot'], ['statemint', 'polkadot'], ['westend', 'polkadot'], ['westmint', 'polkadot']].reduce((icons, [spec, icon]) => _objectSpread(_objectSpread({}, icons), {}, {
  [spec.toLowerCase().replace(/-/g, ' ')]: icon
}), {});
exports.identitySpec = identitySpec;