const { Block, Transaction, Blockchain } = require("./index.js");

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Generate keys 1
const key1 = ec.genKeyPair();
const privateKey1 = key1.getPrivate('hex');
const walletNumber1 = key1.getPublic('hex');

// Generate keys 2
const key2 = ec.genKeyPair();
const privateKey2 = key2.getPrivate('hex');
const walletNumber2 = key2.getPublic('hex');

// console.log(privateKey, "and", walletNumber);


const josscoin = new Blockchain();

const tx1 = new Transaction(walletNumber1, walletNumber2, 100);
tx1.signTransaction(key1);
josscoin.addTransaction(tx1);

josscoin.minePendingTransactions(walletNumber1);
console.log(josscoin.getBalanceOfAddress(walletNumber1))
console.log(josscoin.getBalanceOfAddress(walletNumber2))

const tx2 = new Transaction(walletNumber2, walletNumber1, 50);
tx2.signTransaction(key2);
josscoin.addTransaction(tx2);


josscoin.minePendingTransactions(walletNumber1);
console.log(josscoin.getBalanceOfAddress(walletNumber1))
console.log(josscoin.getBalanceOfAddress(walletNumber2))


console.log(josscoin.isBlockchainValid());