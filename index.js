const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph) {
    cats.push("Ralph")
}

function destructivelyPrependCat(Whiskers) {
    cats.unshift("Bob")
}

function destructivelyRemoveFirstCat(Milo) {
    cats.shift("Milo")
}

function destructivelyRemoveLastCat(Garfield) {
    cats.pop("Garfield")
}

function appendCat(Broom) {
    return [...cats, Broom]
}

function prependCat(Arnold) {
    return [Arnold, ...cats]
}

function removeLastCat(Garfield) {
    return cats.slice(0, -1)
}

function removeFirstCat(Otis) {
    return cats.slice(1)
}