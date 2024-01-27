
function filterArray(numbers, value) {
  let newArr=[]
  let b;
  for(const number of numbers){
    
    if(number>value) {
   
      newArr=[number]
      console.log(newArr)
    }
  }

 


}
// console.log(number)
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([12, 24, 8, 41, 76], 38)) // [41, 76]


