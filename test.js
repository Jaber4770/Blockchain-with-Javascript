const { Block, Transaction, Blockchain } = require("./index.js");

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Generate keys
const key = ec.genKeyPair();
const privateKey = key.getPrivate('hex');
const walletNumber = key.getPublic('hex');

// console.log(privateKey, "and", walletNumber);


const josscoin = new Blockchain();

const tx1 = new Transaction(walletNumber, "randomAddress", 100);
tx1.signTransaction(key);
josscoin.addTransaction(tx1);

josscoin.minePendingTransactions(walletNumber);
console.log(josscoin.getBalanceOfAddress(walletNumber))

josscoin.minePendingTransactions(walletNumber);
console.log(josscoin.getBalanceOfAddress(walletNumber))