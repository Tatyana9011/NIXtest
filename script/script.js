// eslint-disable-next-line strict
'use strict';

const example = (arr, num) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

      if ((arr[i] + arr[j]) === num) {
        newArr.push(i, j);
      }

    }
  }

  return newArr;
};

console.log('=> [0, 1]', example([2, 7, 11, 15], 9));
console.log(' => [0, 3]', example([12, 24, 34, 2], 14));
console.log('=> [1, 3]', example([2, 7, 11, 15], 22));




