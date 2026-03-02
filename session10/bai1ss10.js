const player ={
    name: "messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
};
function showPlayerInfo(player){
        console.log("Tên:"+ player.name);
        console.log("Vị trí:"+ player.position);
        console.log("Tuổi:"+ player.age);
        console.log("Bàn thắng mùa này:"+ player.goals);
        console.log("Kiến tạo mùa này:"+ player.assists);
    const tongdonggop = player.goals + player.assists;
    console.log("tổng đóng góp"+ tongdonggop);
}
showPlayerInfo(player);