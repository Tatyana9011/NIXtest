// eslint-disable-next-line strict
'use strict';

const solve = str => {
  const match = str.match(/[+*/-]/g);
  const obj = {};
  let start = 0;
  let and = 0;
  const arr = [];

  for (let i = 0; i < match.length; i++) {
    obj[match[i]] = str.indexOf(match[i]);
  }
  //заполняем массив
  for (const key in obj) {

    if (and !== 0) {
      start = and + 1;
    }
    and = obj[key];
    arr.push(str.substring(start, and));

  }

  start = and + 1;
  arr.push(str.substring(start, str.length));

  match.reverse();//переворачиваем масивы

  arr.reverse();

  arr.forEach((item, i) => {  //заполняем заново в павильном поядке

    if (match[i]) {
      arr[i] = item + match[i];
    }

  });

  return arr.join('');
};


console.log("y/b*100", solve("100*b/y"));

console.log("30*d/c-b+a", solve("a+b-c/d*30"));

console.log("50+c/b*a", solve("a*b/c+50"));

