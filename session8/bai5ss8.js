const players = [
    "Messi - Forward - 25 - 15",
    "Ronaldo - Forward - 30 - 10",
    "Neymar - Forward - 18 - 20",
    "De Bruyne - Midfielder - 8 - 25",
    "Kante - Midfielder - 2 - 5",
    "Van Dijk - Defender - 5 - 3",
    "Alisson - Goalkeeper - 0 - 1"
];

function reportTopPerformers(minPerformance, playersList) {
    const topPerformers = playersList
        .map(player => {
            const parts = player.split(" - ");
            const name = parts[0];
            const goals = parseInt(parts[2]);
            const assists = parseInt(parts[3]); 
            const performance = goals + assists;
            return { name, performance };
        })
        .filter(player => player.performance >= minPerformance);

    topPerformers
        .map(player => `${player.name}: ${player.performance}`)
        .forEach(reportString => console.log(reportString));

    const totalPerformance = topPerformers.reduce((total, player) => total + player.performance, 0);

    console.log(`Tổng hiệu suất: ${totalPerformance}`);

    return totalPerformance;
}

const minPerformance = 30;
const total = reportTopPerformers(minPerformance, players);