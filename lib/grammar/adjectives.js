'use strict';

const { readFileSync } = require('fs');
const Path = require('path');
const _ = require('lodash');

const data = readFileSync(Path.join(__dirname, 'adjectives.txt'), 'utf8');
const adjectives = data.split('\n').filter(d => d !== '');

module.exports = {
  singular: () => {
    return _.sample(adjectives);
  }
};
