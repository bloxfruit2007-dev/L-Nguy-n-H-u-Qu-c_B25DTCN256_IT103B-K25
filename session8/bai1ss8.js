const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper"
];
function displayPlayers(playerList) {
    playerList.forEach(player => {
        console.log(player);
    });
}

displayPlayers(players);