
function filterArray(numbers, value) {
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if(value < numbers[i]) {
      newArr.push(numbers[i]);
    }
  }
return newArr;
}







console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([12, 24, 8, 41, 76], 38)) // [41, 76]


