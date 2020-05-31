var numbers = [-3, 1, 0, -5, 6, 1, 2, 3, -2];
var negate = function (arrayNumbers) {
    var negateNumbers = numbers.map(function (num) { return num * -1; });
    return negateNumbers;
};
console.log(negate(numbers));
