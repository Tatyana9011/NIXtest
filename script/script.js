// eslint-disable-next-line strict
'use strict';

const addZero = n => n < 10 ? "0" + n : n;

const recursion = arrTime => {
  if (+arrTime[2] >= 60) {
    arrTime[2] = addZero(Math.floor(+arrTime[2] - 60));
    arrTime[1] = addZero(Math.floor(+arrTime[1] + 1));
  }
  if (arrTime[1] >= 60) {
    arrTime[1] = addZero(Math.floor(+arrTime[1] - 60));
    arrTime[0] = addZero(Math.floor(+arrTime[0] + 1));
  }
  if (arrTime[0] >= 24) {
    arrTime[0] = addZero(Math.floor(+arrTime[0] - 24));
  }

  if (+arrTime[0] >= 24 || +arrTime[2] >= 60 || +arrTime[1] >= 60) {
    recursion(arrTime);
    return arrTime.join(':');
  }
  return arrTime.join(':');
};

const timeCorrect = time => {
  const arrTime = time.split(':');

  return recursion(arrTime);
};

console.log('=> 09:10:01==', timeCorrect('09:10:01'));
console.log(' => 12:10:10==', timeCorrect('11:70:10'));
console.log('=> 20:39:09==', timeCorrect('19:99:09'));
console.log('=> 20:40:39==', timeCorrect('19:99:99'));
console.log(' =>00:01:01==', timeCorrect('24:01:01'));
console.log(' =>04:01:01==', timeCorrect('52:01:01'));
