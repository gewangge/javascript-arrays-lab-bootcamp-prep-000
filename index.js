const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

// function appendKitten(name) {
//   var newKittens = kittens.push(name)
//   return newKittens
// }

// function prependKitten(name) {
//   var newKittens = kittens.slice(1)
//   return newKittens
// }

function removeLastKitten() {
  return kittens.pop()
}

function removeFirstKitten() {
  return kittens.shift()
}
