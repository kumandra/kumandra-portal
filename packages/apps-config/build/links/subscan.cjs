"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../ui/logos/index.cjs");

// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = {
  chains: {
    'Acala Mandala TC5': 'acala-testnet',
    'Ares Gladios': 'ares-testnet',
    Bifrost: 'bifrost',
    Calamari: 'calamari',
    'Centrifuge Mainnet': 'centrifuge',
    ChainX: 'chainx',
    'Crust Maxwell': 'crust',
    Darwinia: 'darwinia',
    'Darwinia Crab': 'crab',
    Edgeware: 'edgeware',
    Equilibrium: 'equilibrium',
    'KILT Peregrine': 'kilt-testnet',
    'KILT Spiritnet': 'spiritnet',
    Karura: 'karura',
    Khala: 'khala',
    Kulupu: 'kulupu',
    Kusama: 'kusama',
    'Laminar Turbulence TC2': 'laminar-testnet',
    Moonbase: 'moonbase',
    Moonriver: 'moonriver',
    'Phala PoC-4': 'phala',
    Plasm: 'plasm',
    Polkadot: 'polkadot',
    Rococo: 'rococo',
    SORA: 'sora',
    'Shibuya Testnet': 'shibuya',
    Shiden: 'shiden',
    Stafi: 'stafi',
    Statemine: 'statemine',
    Subgame: 'subgame',
    Uniarts: 'uniarts',
    Westend: 'westend'
  },
  create: (chain, path, data) => `https://${chain}.subscan.io/${path}/${data.toString()}`,
  isActive: true,
  logo: _index.externalLogos.subscan,
  paths: {
    address: 'account',
    block: 'block',
    council: 'council',
    extrinsic: 'extrinsic',
    proposal: 'democracy_proposal',
    referendum: 'referenda',
    techcomm: 'tech',
    treasury: 'treasury',
    validator: 'validator'
  },
  url: 'https://subscan.io/'
};
exports.default = _default;