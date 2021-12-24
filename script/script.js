// eslint-disable-next-line strict
'use strict';

const solution = (str, num) => {

  let newStr = '';

  if (str.length > num) {
    newStr = str.substring(0, num) + '...';
  } else {
    newStr = str;
  }

  return newStr;
};

console.log('=> Tes... ', solution('Testing String', 3));
console.log(' => Testing ...', solution('Testing String', 8));
console.log('=> Test', solution('Test', 8));



