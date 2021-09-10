'use strict';

const { readFileSync } = require('fs');
const Path = require('path');
const _ = require('lodash');

const data = readFileSync(Path.join(__dirname, 'adverbs.txt'), 'utf8');
const adverbs = data.split('\n').filter(d => d !== '');

module.exports = {
  manner: () => {
    return _.sample(adverbs);
  }
  //degree (almost, quite, nearly, too)
  //place (here, there, nowhere, out, in)
  //time (never, lately, always, just, yet)
  //frequency (never, always, rarely, normally
};
