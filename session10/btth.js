// 1. Khởi tạo dữ liệu ban đầu (Mảng các Object)
let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }
];


// --- CÁC HÀM CHỨC NĂNG ---

// Chức năng 1: Xem danh sách
function showSquad() {
    console.log("=> DANH SÁCH ĐỘI BÓNG:");
    squad.forEach(player => {
        console.log(`Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn`);
    });
}

// Chức năng 2: Thêm cầu thủ
function addPlayer() {
    let name = prompt("Nhập tên cầu thủ:");
    let goals = parseInt(prompt("Nhập số bàn thắng:"));
    let position = prompt("Nhập vị trí (GK/DF/MF/FW):");
    
    let newPlayer = {
        id: squad.length > 0 ? squad[squad.length - 1].id + 1 : 1, // ID tự động tăng
        name: name,
        goals: goals,
        position: position
    };
    
    squad.push(newPlayer);
    alert(`Đã thêm cầu thủ ${name} thành công!`);
}

// Chức năng 3: Tìm kiếm theo ID
function findById() {
    let idInput = parseInt(prompt("Nhập ID cầu thủ cần tìm:"));
    let player = squad.find(p => p.id === idInput);
    
    if (player) {
        alert(`Thông tin: Mã ${player.id} - ${player.name} - Vị trí: ${player.position} - Ghi được: ${player.goals} bàn`);
    } else {
        alert("Không tìm thấy cầu thủ này!");
    }
}

// Chức năng 4: Cập nhật bàn thắng
function updateGoals() {
    let idInput = parseInt(prompt("Nhập ID cầu thủ vừa ghi bàn:"));
    let player = squad.find(p => p.id === idInput);
    
    if (player) {
        player.goals += 1;
        alert(`Đã cập nhật: ${player.name} hiện có ${player.goals} bàn thắng.`);
    } else {
        alert("Không tìm thấy ID để cập nhật.");
    }
}

// Chức năng 5: Xóa cầu thủ
function deletePlayer() {
    let idInput = parseInt(prompt("Nhập ID cầu thủ cần xóa:"));
    let index = squad.findIndex(p => p.id === idInput);
    
    if (index !== -1) {
        let confirmDelete = confirm(`Bạn có chắc muốn xóa cầu thủ ${squad[index].name}?`);
        if (confirmDelete) {
            squad.splice(index, 1);
            alert("Đã xóa cầu thủ thành công.");
        }
    } else {
        alert("Không tìm thấy ID để xóa.");
    }
}

// --- VÒNG LẶP MENU CHÍNH ---
function mainMenu() {
    let choice;
    do {
        choice = prompt(
            "--- QUẢN LÝ ĐỘI BÓNG (OBJECT) ---\n" +
            "1. Xem danh sách\n" +
            "2. Thêm cầu thủ\n" +
            "3. Tìm kiếm (theo ID)\n" +
            "4. Cập nhật bàn thắng\n" +
            "5. Xóa cầu thủ\n" +
            "0. Thoát\n\n" +
            "Nhập lựa chọn của bạn:"
        );

        switch (choice) {
            case "1": showSquad(); break;
            case "2": addPlayer(); break;
            case "3": findById(); break;
            case "4": updateGoals(); break;
            case "5": deletePlayer(); break;
            case "0": alert("Tạm biệt!"); break;
            default: alert("Lựa chọn không hợp lệ!");
        }
    } while (choice !== "0");
}

// Chạy chương trình
mainMenu();