const { test } = require('./utils');

function megaTest(name) {
  this.name = name;
  this.test = test;

  return {
    name, test
  }
}

module.exports = {
  megaTest
}