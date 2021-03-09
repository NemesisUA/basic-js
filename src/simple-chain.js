const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)
    || (!(position >= 1 && position <= this.getLength()))
  ) {
    this.chain = [];
    throw new Error();
  }
    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();

    return this;
  },
  finishChain() {
    const finalChain = this.chain.join(`~~`);
    this.chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;
