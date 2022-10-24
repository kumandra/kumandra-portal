"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitize = sanitize;

// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
function sanitize(value) {
  return (value === null || value === void 0 ? void 0 : value.toLowerCase().replace(/-/g, ' ')) || '';
}