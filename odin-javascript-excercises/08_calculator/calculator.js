const add = function(x, y) {
	return x +y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  let sum = 0;
	array.map(x => {sum+=x});
  return sum;
};

const multiply = function(array) {
  let answer = 1;
  array.map(x => {answer *= x})
  return answer;
};

const power = function(x, y) {
  return x**y;
};

const factorial = function(x) {
  let recursiveValue = 1;
  for (i = 2; i <= x; i ++) {
    recursiveValue *= i;
  }
  return recursiveValue;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
