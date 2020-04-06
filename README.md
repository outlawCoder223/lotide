# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rancewcampbell/lotide`

**Require it:**

`const _ = require('@rancewcampbell/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: counts the number of letters in a sentence and returns an object with the count.

* `countOnly(array, itemsToCount)`: Takes an array of items and an object of items to count in the form of `{item1: true, item3: true}`.

* `eqArrays(array1, array2)`: Tests two arrays and returns true if they are equal and false if they are not.

* `eqObjects(object1, object2)`: Tests two objects and returns true if htey are equal and false if they are not.

* `findKey(object, callback)`: Uses a callback to search an object and returns the first key that matches the callback.

* `findKeyByValue(object, searchValue)`: Returns the first key to match a value passed in.

* `flatten(array)`: Recursively flattens arrays: [ 1, 2, [ 3, 4, [ 5 ] ] ] => [ 1, 2, 3, 4, 5 ]

* `head(array)`: Returns the head (first element) in an array.

* `letterPositions(string)`: Returns an object with an array of every index where a letter appears in a sentence.

* `map(array, callback)`: Returns a new array with the elements of the original array transformed by a callback.

* `middle(array)`: Returns the middle element of an odd length array or the middle two elements of an even length array.

* `tail(array)`: Returns the tail (everything after the first index) of an array.

* `takeUntil(array)`: Returns a slice of an array with elements taken from the beginning and stops when the callback returns a truthy value.

* `without(array, itemsToRemove)`: Takes a source array and an array with items to remove. Returns a new array with the items removed from the source.