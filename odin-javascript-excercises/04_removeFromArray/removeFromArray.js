const removeFromArray = function(array, ...args) {
    return array.filter(num => !args.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
