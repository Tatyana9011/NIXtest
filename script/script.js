// eslint-disable-next-line strict
'use strict';

const findVowels = str => {
  let count = 0;
  const arr = [/а/g, /у/g, /е/g, /ы/g, /о/g, /э/g, /я/g, /и/g, /ю/g];
  const newStr = str.toLowerCase();

  for (let i = 0; i < arr.length; i++) {
    if (newStr.match(arr[i])) {
      count += newStr.match(arr[i]).length;
    }
  }

  return count;
};

console.log('=> 2 ', findVowels('Привет'));
console.log(' => 5', findVowels('Абракадабра'));
console.log('=> 8', findVowels('блаблаблаблоОООО'));
console.log('=> 6', findVowels('ООблаблаблабло'));



