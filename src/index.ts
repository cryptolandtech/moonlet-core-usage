import { Wallet, Blockchains } from 'moonlet-core';

// find supported blockchains
console.log( "Supported Blockchains:" );
for(const blockchain in Blockchains) {
    console.log( Blockchains[blockchain] );
}

// Use the wallet
console.log( "Use the wallet:" );
const myWallet = new Wallet();
console.log( "Generated mnemonics:", myWallet.mnemonics );

// create an ethereum account
const bc = myWallet.getBlockchain( Blockchains.ETHEREUM );
bc.createAccount();
const accs = bc.getAccounts();
console.log( accs[0].address );