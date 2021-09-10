"use strict";

const _ = require("lodash");
const Grammar = require("keyfob").load({
  root: "./lib/grammar",
  patterns: ["*.js"],
  fn: require,
});

module.exports = (params) => {
  if (params.args.length !== 1) {
    return {
      text: "Please @ one and only one person.",
    };
  }
  params.complimentee = params.args[0];
  if (!params.complimentee.startsWith("@")) {
    params.complimentee = `@${params.complimentee}`;
  }

  const compiled = _.template(Grammar.phrases.compliment());
  let name;
  /*
   * random number between 0 and 99
   * < 98 === 98% chance
   */
  /* $lab:coverage:off$ */
  if (Math.floor(Math.random() * 100) < 98) {
    name = params.complimentee;
  } else {
    name = `@${params.user_name}`;
  }
  /* $lab:coverage:on$ */
  const compliment = compiled({ ...Grammar, name });
  return compliment;
};
