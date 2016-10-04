'use strict';

var enUS = require('../localizations/en-US');

enUS
  .map(returnKey)
  .map(elify);

function returnKey(o) {
  return o && o.key;
}

function elify(key) {
  console.log('m.l(\'' + key + '\');')
}