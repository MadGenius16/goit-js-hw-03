function makeArray(firstArray, secondArray, maxLength) {
  let totalArray = [];
  totalArray = firstArray.concat(secondArray);
  if(totalArray.length >= maxLength) {
   return totalArray.slice(0, maxLength);
  }
  else {  
   return totalArray;
  } 
}





console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]



