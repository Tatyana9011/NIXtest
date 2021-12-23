// eslint-disable-next-line strict
'use strict';

const mispelled = (str1, str2) => {

  let count = 0;

  for (let i = 0; i < str1.length; i++) {

    if (str1[i] === str2[i] || str1[i] === str2[i + 1] || str1[i + 1] === str2[i]) {
      count++;
    }

  }

  if (count === str1.length || count === str2.length ||
    count === str1.length - 1 || count === str2.length - 1) {
    return true;
  } else {
    return false;
  }

};

console.log('mispelled => true', mispelled('versed', 'xersed'));
console.log('mispelled => false: ', mispelled('versed', 'applb'));
console.log('mispelled=> true: ', mispelled('versed', 'v5rsed'));
console.log('mispelled => true: ', mispelled('1versed', 'versed'));
console.log('mispelled => true ', mispelled('versed', 'versed1'));
console.log('mispelled => true ', mispelled('versed', 'aversed'));
console.log('mispelled => false: ', mispelled('aaversed', 'versed'));
console.log('mispelled => false ', mispelled('versed', 'aaversed'));
