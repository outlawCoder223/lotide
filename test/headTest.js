// Test Code for head.js
const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([ 5, 6, 7 ]), 5);
assertEqual(head([ 'Hi', 'my', 'name', 'is' ]), 'Hi');
assertEqual(head([ true ]), true);
assertEqual(head([], undefined));
