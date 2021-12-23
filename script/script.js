// eslint-disable-next-line strict
'use strict';

const solve = str => {
  const newStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= newStr[i]) {
      count++;
    }
  }

  if (count >= (str.length / 2)) {
    str = str.toLowerCase();
  } else {
    str = str.toUpperCase();
  }

  return str;
};

console.log('=>code', solve('code'));
console.log('=>CODE', solve('CODe'));
console.log('=>code', solve('COde'));
console.log('=>code', solve('Code'));



