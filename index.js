var assert = require('assert');

var _  = require('underscore');

var A = require('moduleA');
var B = require('moduleB');

assert(!(B() instanceof A), "! B() instanceof A");
assert.notEqual(A._, _, "A._ == _");
assert.notDeepEqual(A._, _, "A._ === _");
