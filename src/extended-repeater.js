const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options['separator'] = options['separator'] || '+';
  options['additionSeparator'] = options['additionSeparator'] || '|';
  let addition, res;
  if (options['additionRepeatTimes']) {
    addition = (options['addition'] + options['additionSeparator']).repeat(options['additionRepeatTimes'] - 1) + options['addition'];
  } else {
    addition = options['addition'] || '';
  }
  if (options['repeatTimes']) {
    res = (str + addition + options['separator']).repeat(options['repeatTimes'] - 1) + str + addition;
  } else {
    res = str + addition;
  }
  return res;
};
  