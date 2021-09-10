'use strict';

const { readFileSync } = require('fs');
const Path = require('path');
const _ = require('lodash');

const data = readFileSync(Path.join(__dirname, 'nouns.txt'), 'utf8');
const nouns = data.split('\n').filter(d => d !== '');

module.exports = {
  singular: () => {
    return _.sample(nouns);
  }
};
