const numbers = [14, 27, 43, 53, 99];
const largestSwap = (num) => {
    const stringNum = String(num).split("");
    const numreverse = Number(stringNum[1] + stringNum[0]);
    const result = num >= numreverse;
    console.log(`${num} > ${numreverse} = ${result}`);
};
numbers.forEach((num) => largestSwap(num));
