'use strict';

const { readFileSync } = require('fs');
const Path = require('path');
const _ = require('lodash');

const data = readFileSync(Path.join(__dirname, 'compliments.txt'), 'utf8');
const compliments = data.split('\n').filter(d => d !== '');

module.exports = {
  compliment: () => {
    return _.sample(compliments);
  }
};
