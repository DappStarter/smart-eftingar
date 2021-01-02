require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe stone rebel spider column guess argue metal gate'; 
let testAccounts = [
"0x8fa4dee3de06e8dec99991c8eb6d29f60c2fbf0b42076257940927ece3338c96",
"0xfa94973a06e2dcf61b83f356aebfbb81106a948bb7aea4f20dc7d8805155c8b0",
"0x126897823d388fb8f84be6c0f193195154879281478f5d889fbd222dcbc2968f",
"0x598bc4161ab6ce2b6cbc6acbecf55e76a64b0974ec19752ccbd582f566b677d0",
"0xbd7d1e36b4c0b327b9dcd9192ff04ffa98fabcd488981301cfe32f8e8b3f4b3a",
"0xfba4b8da4fb93d51273ce4b8a3c941ec48a9048e03bd549d2f0ae5731a08fe2f",
"0x2770d3d769d0786bccbea026710fda83ff5c00af67e84f54329b62a6305ea6ed",
"0xbf02c57f33f7e71b4075d75fe0a6e2ab00035dcd3780f8a095a7af64ce051763",
"0x9868d4427cb235699b693b10f51f1053986aea2a5e0bce5963617a4659439437",
"0x676683290660a8403f13f33e0b89595c1fb7192e3fd7289b9e6301d824e0b9f7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
