// Tests for assertEqual.js
const assertEqual = require('../assertEqual');

// Fail
assertEqual('Lighthouse Labs', 'Bootcamp');
// Pass
assertEqual(1, 1);
// Pass
assertEqual('My Name Is Rance', 'My Name Is Rance');
// Fail
assertEqual(5, 20);
