// eslint-disable-next-line strict
'use strict';

const mispelled = (str1, str2) => {
  console.log('str1, str2: ', str1, str2);
  let count = 0;
  let obj = {};

  for (let i = 0; i < str1.length; i++) {




  }





  /* 
    if (str1.length + 1 <= str2.length || str1.length >= str2.length + 1) {
      //str1.match(str2);count++;
      if (!str1.match(str2) || !str2.match(str1)) {
        console.log('----------str1: ', str1);
        count++;
      } else {
        const match = str1.match(str2);
        console.log('-----------------match: ', match.index);
      }
    }
  
    for (let i = 0; i < str1.length; i++) {
  
      if (str1[i] !== str2[i]) {
  
        count++;
        if (str1[i] !== str2[i + 1]) {
          count++;
        } else {
          count--;
        }
      }
    }
  
  
  
  
    if (count === 0 || count === 1) {
      if (str1.length === str2.length || str1.length + 1 === str2.length || str1.length === str2.length + 1) {
        return true;
      } else if (str1.length + 1 <= str2.length || str1.length >= str2.length + 1) {
        return false;
      }
    } else {
      return false;
    } */
};

console.log('mispelled => true', mispelled('versed', 'xersed'));
console.log('mispelled => false: ', mispelled('versed', 'applb'));
console.log('mispelled=> true: ', mispelled('versed', 'v5rsed'));
console.log('mispelled => true: ', mispelled('1versed', 'versed'));
console.log('mispelled => true ', mispelled('versed', 'versed1'));
console.log('mispelled => true ', mispelled('versed', 'aversed'));
console.log('mispelled => false: ', mispelled('aaversed', 'versed'));
console.log('mispelled => false ', mispelled('versed', 'aaversed'));
