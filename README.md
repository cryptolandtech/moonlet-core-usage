# Moonlet Core - Usage Example

## Setup

`npm install`

## Build lib

`npm run build`

## Typescript usage examples

***see src/***

```typescript
import { Wallet, Blockchains } from 'moonlet-core';

// Use the wallet
const myWallet = new Wallet();
console.log( "Generated mnemonics:", myWallet.mnemonics );

// create an ethereum account
const bc = myWallet.getBlockchain( Blockchains.ETHEREUM );
bc.createAccount();
const accs = bc.getAccounts();
console.log( accs[0].address );

```

## TestRPC Helpers

Start All test rpcs

```doc
npm run start-all-rpcs
```

Stop all running test rpcs ( that have pids stored )

```doc
npm run stop-all-rpcs
```

## License

MIT