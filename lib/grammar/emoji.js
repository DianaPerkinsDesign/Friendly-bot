'use strict';

const { readFileSync } = require('fs');
const Path = require('path');
const _ = require('lodash');

const data = readFileSync(Path.join(__dirname, 'emoji.txt'), 'utf8');
const emoji = data.split('\n').filter(d => d !== '');

module.exports = {
  positive: () => {
    return _.sample(emoji);
  }
};
