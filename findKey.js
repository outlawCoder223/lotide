const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

// Test Cases:
const playlist = {
  song1: { artist: 'Eminem', title: 'Without Me' },
  song2: { artist: 'Skrillex', title: 'Bangarang' },
  song3: { artist: 'Eagles', title: 'Life In The Fast Lane' },
  song4: { artist: 'ACDC', title: 'Back in Black' },
  song5: { artist: 'Eminem', title: 'Just Lose It' }
};

assertEqual(findKey(playlist, (song) => song.artist === 'ACDC'), 'song4');
assertEqual(findKey(playlist, (song) => song.title === 'Without Me'), 'song1');
assertEqual(findKey(playlist, (song) => song.artist === 'Wu Tang Clan'), undefined);
