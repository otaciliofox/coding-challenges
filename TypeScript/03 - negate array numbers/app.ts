const numbers = [-3, 1, 0, -5, 6, 1, 2, 3, -2];

const negate = (arrayNumbers: number[]): number[] => {
  const negateNumbers = numbers.map((num) => num * -1);
  return negateNumbers;
};

console.log(negate(numbers));
