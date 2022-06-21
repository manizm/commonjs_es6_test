function megaTest(name) {
  this.name = name;
  this.test = require('./utils.js').test;

  return {
    name, test
  }
}

module.exports = {
  megaTest
}