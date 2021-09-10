'use strict';

const { readFileSync } = require('fs');
const Path = require('path');
const _ = require('lodash');

const data = readFileSync(Path.join(__dirname, 'verbs.txt'), 'utf8');
const verbs = data.split('\n').filter(d => d !== '');

module.exports = {
  infinitive: () => {
    return _.sample(verbs);
  }
  //past
  //present
};
