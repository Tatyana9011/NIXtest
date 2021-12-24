// eslint-disable-next-line strict
'use strict';

const checkPassword = password => {
  let validate = '';
  const regexp = new RegExp(/([a-z]{1,})\w{1,}[!|@|#|$|%|^|&|*]{1,}[a-z]?/gi);
  const result = password.match(regexp);

  if (password.length >= 8 && password.length <= 20 && result) {
    validate = 'valid';
  } else {
    validate = 'not valid';
  }
  return validate;
};

console.log('=> not valid==', checkPassword(""));
console.log(' =>not valid ==', checkPassword("password"));
console.log('=> not valid==', checkPassword("P1@p"));
console.log('=> valid==', checkPassword("P1@pP1@p"));
console.log(' =>not valid==', checkPassword("P1@pP1@pP1@pP1@pP1@pP1@p"));
console.log('  => valid ==', checkPassword("Paaaaaa222!!!"));
