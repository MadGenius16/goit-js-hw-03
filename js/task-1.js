
function slugify(title) {
 let titleArr = title.split(' ');
 let slig = titleArr.join('-').toLowerCase();
  return slig;
}






console.log(slugify("Arrays for begginers"))
console.log(slugify("English for developer"))
