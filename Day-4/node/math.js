const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
let pi = 3.14;

// module.exports=123

let obj = {
    sum: sum,
    mul: mul,
    pi: pi,
};

// module.exports = obj;

// another way
module.exports.sum = (a, b) => a + b;
module.exports.mul = (a, b) => a * b;
module.exports.pi = 3.14;

// another way
exports.sum = (a, b) => a + b;
exports.mul = (a, b) => a * b;
exports.pi = 3.14;

module.exports = 5; // valid
exports = 5; // invalid
