const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];

// 1. Xem danh sach
const showSquad = () => {
    console.log("\n--- DANH SÁCH ĐỘI BÓNG ---");
    squad.forEach(player => {
        console.log(`${player[0]} (${player[2]}): ${player[1]} bàn thắng`);
    });
};

// 2. Tim kiem
const findPlayer = (name) => {
    const result = squad.find(player => player[0].toLowerCase() === name.toLowerCase());
    if (result) {
        console.log(`=> THÔNG TIN: Tên: ${result[0]}, Bàn thắng: ${result[1]}, Vị trí: ${result[2]}`);
    } else {
        console.log("=> LỖI: Không tìm thấy cầu thủ này.");
    }
};

// 3. loc theo vi tri
const filterByPosition = (pos) => {
    const filtered = squad.filter(player => player[2].toUpperCase() === pos.toUpperCase());
    if (filtered.length > 0) {
        console.log(`=> KẾT QUẢ LỌC (${pos.toUpperCase()}):`);
        filtered.forEach(p => console.log(`- ${p[0]} (${p[1]} bàn)`));
    } else {
        console.log("=> Không có cầu thủ ở vị trí này.");
    }
};

// 4.tong ban thang
const totalGoals = () => {
    const total = squad.reduce((sum, player) => sum + player[1], 0);
    console.log(`=> Tổng số bàn thắng hiện tại là: ${total}`);
};

// 5.kiem tra hieu suat
const checkPerformance = () => {
    const hasNoGoal = squad.some(player => player[1] === 0);
    const allScored = squad.every(player => player[1] > 0);

    if (hasNoGoal) console.log("- Có cầu thủ chưa ghi bàn (0 bàn).");
    if (allScored)
        console.log("- Tất cả cầu thủ đều đã ghi bàn.");
    else
        console.log("- Không phải tất cả cầu thủ đều đã ghi bàn.");
};

// ================= MENU =================
const startApp = () => {
    let choice;

    do {
        choice = parseInt(prompt(
`=== FOOTBALL ANALYTICS MENU ===
1. Xem danh sach
2. Tim kiem
3. Loc theo vi tri
4. Tong ban thang
5. Kiem tra hieu suat
0. Thoat`
        ));

        switch (choice) {
            case 1:
                showSquad();
                break;

            case 2:
                const name = prompt("Nhập tên cầu thủ:");
                findPlayer(name);
                break;

            case 3:
                const pos = prompt("Nhập vị trí (FW/MF/DF/GK):");
                filterByPosition(pos);
                break;

            case 4:
                totalGoals();
                break;

            case 5:
                checkPerformance();
                break;

            case 0:
                console.log("=> Hẹn gặp lại!");
                alert("Thoát chương trình!");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }

    } while (choice !== 0);
};

// chay chuong trinh
startApp();