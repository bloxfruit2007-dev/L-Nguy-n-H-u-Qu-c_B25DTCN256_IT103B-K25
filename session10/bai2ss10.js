const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};
function addPerformanceScore(player){
        console.log("name:"+player.name);
        console.log("position:"+player.position);
        console.log("goals:"+player.goals);
        console.log("assists"+player.assists);
        console.log("matchesPlayed:"+player.matchesPlayed);
    const performancePerMatch= (player.goals+player.assists) / player.matchesPlayed
        console.log("performancePerMatch:"+performancePerMatch);
    if(performancePerMatch>=1){
        player.isKeyplayer= true;
    }else{
        player.isKeyplayer= false;

    }
        console.log("isKeyplayer:"+player.isKeyplayer);
    
}
addPerformanceScore(player);
