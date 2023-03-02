

const cats = ["Milo", "Otis", "Garfield",];

function destructivelyAppendCat(name) {
  cats.push(name)
}
function destructivelyPrependCat(name) {
  cats.unshift(name)
}
function destructivelyRemoveLastCat() {
  cats.pop()
}
function destructivelyRemoveFirstCat() {
  cats.shift()
}
const copyOfCats = [...cats];

function appendCat(name) {
  copyOfCats.push(name)
  return copyOfCats
}


function prependCat(name) {
  const moreCats = [name, ...cats]
  return moreCats
}
const otherCats = [...cats]

function removeLastCat(name) {
  otherCats.pop(name)
  return otherCats

}

const lessCats = [...cats]

function removeFirstCat(name) {
  lessCats.shift(name)
  return lessCats
}
// function prependCat(name){
//   return [name, ...cats]
// }






