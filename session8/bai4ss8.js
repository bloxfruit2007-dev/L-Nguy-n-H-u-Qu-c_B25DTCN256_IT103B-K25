const players = [
    "Messi - Forward - 25",
    "Ronaldo - Forward - 30",
    "Neymar - Forward - 18",
    "De Bruyne - Midfielder - 8",
    "Kante - Midfielder - 2",
    "Van Dijk - Defender - 5",
    "Alisson - Goalkeeper - 0"
];

function getReversedNames(playersList) {
    return playersList.map(player => player.split(" - ")[0]).reverse();
}
const reversedNames = getReversedNames(players);
console.log(reversedNames);
console.log(players);