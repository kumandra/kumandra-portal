import type BN from 'bn.js';
declare const _default: {
    chains: {
        'Acala Mandala TC5': string;
        'Ares Gladios': string;
        Bifrost: string;
        Calamari: string;
        'Centrifuge Mainnet': string;
        ChainX: string;
        'Crust Maxwell': string;
        Darwinia: string;
        'Darwinia Crab': string;
        Edgeware: string;
        Equilibrium: string;
        'KILT Peregrine': string;
        'KILT Spiritnet': string;
        Karura: string;
        Khala: string;
        Kulupu: string;
        Kusama: string;
        'Laminar Turbulence TC2': string;
        Moonbase: string;
        Moonriver: string;
        'Phala PoC-4': string;
        Plasm: string;
        Polkadot: string;
        Rococo: string;
        SORA: string;
        'Shibuya Testnet': string;
        Shiden: string;
        Stafi: string;
        Statemine: string;
        Subgame: string;
        Uniarts: string;
        Westend: string;
    };
    create: (chain: string, path: string, data: BN | number | string) => string;
    isActive: boolean;
    logo: string;
    paths: {
        address: string;
        block: string;
        council: string;
        extrinsic: string;
        proposal: string;
        referendum: string;
        techcomm: string;
        treasury: string;
        validator: string;
    };
    url: string;
};
export default _default;
