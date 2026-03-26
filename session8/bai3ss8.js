const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper"
];

function filterPlayersByPosition(position, players) {
    return players.filter(player => player.includes(position));
}
const filteredPlayers = filterPlayersByPosition("Forward", players);
console.log(filteredPlayers);
console.log(players);