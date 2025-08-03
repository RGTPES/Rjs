function sumArrays(...arrays) {
    const result = arrays.map(arr => {
        return arr.reduce((sum, val) => sum + val, 0);
    });
    return result;
}
const totals = sumArrays([1, 2, 3], [4, 5], [10]);
console.log(totals);