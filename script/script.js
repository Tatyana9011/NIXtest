// eslint-disable-next-line strict
'use strict';

const solve = (str, num) => {
  const arr = str.split('');
  let count = 0;

  for (let i = 0; i < str.length; i++) {

    const regExp = new RegExp(str[i], 'g');

    if (count < num) {

      str.replace(regExp, (match, val) => {

        if (count < num) {

          arr[val] = '';
          count++;

        }

      })
    }
  }

  return arr.join('');
};

console.log('=> bracadabra =====', solve('abracadabra', 1));
console.log(' => brcadabra =====', solve('abracadabra', 2));
console.log(
  '=> rcdbr ===', solve('abracadabra', 6));
console.log('=> сdr (в задании ошибка написано rdr))))===', solve('abracadabra', 8));
console.log(' => ===', solve('abracadabra', 50));



