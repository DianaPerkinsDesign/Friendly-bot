'use strict';

const { readFileSync } = require('fs');
const Path = require('path');
const _ = require('lodash');

const data = readFileSync(Path.join(__dirname, 'exclamations.txt'), 'utf8');
const exclamations = data.split('\n').filter(d => d !== '');

module.exports = () => {
  return _.sample(exclamations);
};
