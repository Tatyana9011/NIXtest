// eslint-disable-next-line strict
'use strict';

const daysRepresented = arr => {
  let days = 0;

  arr.forEach(item => {
    days += (item[1] - item[0]);
  });

  return days + arr.length;
};

console.log('=> 17==', daysRepresented([[10, 15], [25, 35]]));
console.log(' =>24 ==', daysRepresented([[2, 8], [220, 229], [10, 16]]));
console.log('=> 16==', daysRepresented([[13, 20], [86, 93]]));
console.log('=> 9==', daysRepresented([[1, 2], [8, 10], [12, 15]]));
console.log(' =>22==', daysRepresented([[2, 8], [10, 16], [19, 26]]));

