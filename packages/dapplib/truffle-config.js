require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remember pupil grid nasty flock swift'; 
let testAccounts = [
"0xa852ac8c956590e4abc6ba234ff1630fb1cfcecc0b9750a826c6758db2a12ef8",
"0xe357e2fdb9e57a22594fb649df00df32ad51498b72d6d6c5072e188f5318fe3f",
"0xa2efe955c02d0ffded1c397d52c92e9ed56db9cafbcd3a5b061434fb67a35739",
"0x6105dfd90cab3304ca4685417fdf56c0d6b3838996d0a504eda4cfd6e5ed8991",
"0x8254e1247847e67a95cbec8ab272ad6b047d5fb7b5b3b2704c12d6c038521a6b",
"0x0afa467d0ddb0b59c934df99f40c6e9b2aa3eb14163701c3cf2c585dcd1aa7f4",
"0xd320b98632519723fb0c7a34a2b3632b7e374267e5544e6f62fd8df83621ebd5",
"0x1b1ab9d7681f76d771ac8c737e14835a6c5255df0af313badf066660e520b7b5",
"0x080e5c8a80c33adc8912b1079061725c8f6a9deb2a8ce3405d47c272c7ae2ce2",
"0xb2681063fcdb218c7c388c74fea66476c5ac6c5f0799c43dec3ceaa34287313e"
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
            version: '^0.8.0'
        }
    }
};

