import { Wallet, Blockchains } from 'moonlet-core';
import { Ethereum } from 'moonlet-core/dist/lib/blockchain/ethereum/class.index';

// find supported blockchains
console.log( "Supported Blockchains:" );
for(const blockchain in Blockchains) {
    console.log( Blockchains[blockchain] );
}
console.log();

// Use the wallet
console.log( "Using the wallet:" );
const myWallet = new Wallet();

// initialise used blockchains
myWallet.loadBlockchain( Ethereum );

console.log( "Generated mnemonics:", myWallet.mnemonics, "\n" );

// create an ethereum account
const ethbc = myWallet.getBlockchain( Blockchains.ETHEREUM );
ethbc.createAccount();
ethbc.createAccount();

console.log( "Generated account addresses:");

myWallet.getAccounts(Blockchains.ETHEREUM).forEach( data => {
    console.log( data.address  );
});
console.log();
