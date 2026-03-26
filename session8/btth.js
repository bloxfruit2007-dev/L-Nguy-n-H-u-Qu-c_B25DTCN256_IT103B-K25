const squad = [

    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"]

];

function showMenu() {
}

showMenu();

let choice = Number(prompt("--- QUẢN LÝ ĐỘI BÓNG ---\n1. Xem danh sách cầu thủ\n2. Tìm kiếm cầu thủ (Find)\n3. Lọc vị trí(Filter)\n4. Tổng bàn thắng(Reduce)\n5. Kiểm tra hiệu suất(Some/Every)\n0. Thoát\nNhập lựa chọn: "));

switch (choice) {

    case 1:
        console.log("Danh sách cầu thủ:");
        squad.forEach(player => {
            console.log(`Tên: ${player[0]}, Bàn thắng: ${player[1]}, Vị trí: ${player[2]}`);
        });
        break;

    case 2:
        let findName = prompt("Nhập tên cầu thủ cần tìm: ");
        let foundPlayer = squad.find(player => player[0].toLowerCase() === findName.toLowerCase());
        if (foundPlayer) {
            console.log(`Thông tin cầu thủ: Tên: ${foundPlayer[0]}, Bàn thắng: ${foundPlayer[1]}, Vị trí: ${foundPlayer[2]}`);
        } else {
            console.log("Không tìm thấy cầu thủ.");
        }
        break;
    case 3:
        let filterPosition = prompt("Nhập vị trí cầu thủ cần lọc: ");
        let filteredPlayers = squad.filter(player => player[2].toLowerCase() === filterPosition.toLowerCase());
        if (filteredPlayers.length > 0) {
            console.log("Danh sách cầu thủ:");
            filteredPlayers.forEach(player => {
                console.log(`Tên: ${player[0]}, Bàn thắng: ${player[1]}, Vị trí: ${player[2]}`);
            });
        } else {
            console.log("Không tìm thấy cầu thủ.");
        }
        break;
    case 4:
        let totalGoals = squad.reduce((total, player) => total + player[1], 0);
        console.log(`Tổng số bàn thắng: ${totalGoals}`);
        break;
    case 5:
        let hasZeroGoals = squad.some(player => player[1] === 0);
        if (hasZeroGoals) {
            console.log("Có cầu thủ chưa ghi bàn.");
        } else {
            console.log("Tất cả cầu thủ đều đã ghi bàn.");
        }
        break;
    case 0:
        console.log("Thoát chương trình.");
        break;
    default:
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
}