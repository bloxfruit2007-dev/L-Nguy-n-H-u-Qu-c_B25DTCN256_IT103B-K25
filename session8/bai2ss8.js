const playerNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson"
];
function getUpperNames(names) {
    return names.map(name => name.toUpperCase());
}
const upperNames = getUpperNames(playerNames);
console.log(upperNames);
console.log(playerNames);