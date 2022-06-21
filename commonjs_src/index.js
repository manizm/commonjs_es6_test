async function asyncRequire(p) {
  return import(p);
}

const t = asyncRequire('./utils.mjs');
let c = {};

async function megaTest(name) {
  c = await t;
  this.name = name;
  this.test = c.test;

  return {
    name, test
  }
}

(async function() {
  let a = await megaTest('ali naeemi');
  console.log(c.test());
  console.log(a);
})()

module.exports = {
  megaTest
}