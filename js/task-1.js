
function slugify(title) {
  titleArr = title.split(' ')
  slig = titleArr.join('-').toLowerCase()
  return slig
}






console.log(slugify("Arrays for begginers"))
console.log(slugify("English for developer"))
