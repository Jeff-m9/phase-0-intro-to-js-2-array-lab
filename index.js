// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name) {
  cats.push(name);
}
console.log(destructivelyAppendCat("Ralph"));

function destructivelyPrependCat(name) {
  cats.unshift(name);
}
console.log(destructivelyPrependCat("Bob"));

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
    return [...cats, "Broom"]
}

function prependCat(name) {
    return ["Arnold", ...cats]
}

function removeLastCat() {
    return cats.slice(0, -1)
}

function removeFirstCat() {
    return cats.slice(1)
}