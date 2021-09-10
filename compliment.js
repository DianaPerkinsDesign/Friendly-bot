const _ = require("lodash");
const Grammar = require("keyfob").load({
  root: "./lib/grammar",
  patterns: ["*.js"],
  fn: require,
});
const getUserFromMention = require("./get-user-from-mention");

module.exports = (name) => {
  const compiled = _.template(Grammar.phrases.compliment());

  const compliment = compiled({ ...Grammar, name });
  return compliment;
};
