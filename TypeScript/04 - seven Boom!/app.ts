const boom = [1, 2, 3, 4, 5, 6, 7];
const noboom = [1, 2, 3, 4, 5, 6];
const outherBoom = [2, 55, 60, 97, 86];

const sevenBoom = (arrayNumber: number[]) => {
  const isBoom = arrayNumber.some((num) => {
    const stringNumber = num.toString();
    const separateNumbers = stringNumber.split("");
    const containSeven = separateNumbers.find(
      (separateNumber) => separateNumber === "7"
    );
    return !!containSeven;
  });
  return isBoom ? "boom!" : "there is no 7 in array.";
};

console.log(sevenBoom(boom));
console.log(sevenBoom(noboom));
console.log(sevenBoom(outherBoom));
