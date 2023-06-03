const repeatString = function(string, num) {
    let newString = "";
    if (times < 0) return "ERROR";
    for (let i = 0; i < times; i++) {
        newString += string;
    }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
