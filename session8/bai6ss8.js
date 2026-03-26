const players = [
    "Messi - Forward - 25 - 15 - 34",
    "Ronaldo - Forward - 30 - 10 - 38",
    "Neymar - Forward - 18 - 20 - 32",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Kante - Midfielder - 2 - 5 - 36",
    "Van Dijk - Defender - 5 - 3 - 33",
    "Alisson - Goalkeeper - 0 - 1 - 37"
];

function reportByPosition(playersList) {
    console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ");
    
    let totalTeamGoals = 0;

    Object.entries(
        playersList.reduce((acc, player) => {
            const parts = player.split(" - ");
            const position = parts[1];
            const goals = parseInt(parts[2]);
            const assists = parseInt(parts[3]);
            const matches = parseInt(parts[4]);

            if (!acc[position]) {
                acc[position] = { count: 0, goals: 0, assists: 0, matches: 0 };
            }

            acc[position].count += 1;
            acc[position].goals += goals;
            acc[position].assists += assists;
            acc[position].matches += matches;

            return acc;
        }, {})
    ).forEach(([position, stats]) => {
        const avgPerformance = ((stats.goals + stats.assists) / stats.matches).toFixed(2);
        
        console.log(`${position}:`);
        console.log(`- Số cầu thủ: ${stats.count}`);
        console.log(`- Tổng bàn thắng: ${stats.goals}`);
        console.log(`- Tổng kiến tạo: ${stats.assists}`);
        console.log(`- Tổng số trận: ${stats.matches}`);
        console.log(`- Trung bình hiệu suất/trận: ${avgPerformance}`);
        console.log("");
        
        totalTeamGoals += stats.goals;
    });

    console.log("-------------------------");
    console.log(`Tổng bàn thắng toàn đội : ${totalTeamGoals}`);
}

reportByPosition(players);