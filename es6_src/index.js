import {createRequire} from 'module';
const require = createRequire(import.meta.url);


const { megaTest } = require('commonjs_src');
import {firstname} from './utils.js';

const t = megaTest('ali naeemi');

const fn = firstname(t.name);

console.log(await t.test());
console.log(fn);