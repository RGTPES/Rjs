const insert = (arr, item, index) => {
 
  const newArr = [...arr];
  newArr.splice(index, 0, ...item);
  return newArr;
};
const originalArray = [1, 2, 3];
const newItem = [4, 5];
const indexToInsert = 2;

const newArray = insert(originalArray, newItem, indexToInsert);
console.log(newArray);