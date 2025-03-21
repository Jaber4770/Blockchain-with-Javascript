const sha256 = require("crypto-js/sha256");

class Block {
    constructor(timeStamp, data, previousHash="") {
        this.timeStamp = timeStamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    calculateHash() {
        return (sha256(this.timeStamp + JSON.stringify(this.data) + this.previousHash)).toString();
    }
}

class Blockchain{
    constructor() {
        this.chain = [this.generateGenesisBlock()];
    }
    generateGenesisBlock() {
        return new Block("2025-01-01", 'Genesis', "0000");
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}


const josscoin = new Blockchain();
const block = new Block("2025-01-01", { amount: 5 });
josscoin.addBlock(block);
console.log(josscoin);