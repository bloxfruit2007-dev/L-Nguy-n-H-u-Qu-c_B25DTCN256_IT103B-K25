let booksId = [];
let booksName = [];
let inventoryQuantity = [];
let n = parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));
for (let i = 0; i < n; i++) {
    let id;
    do {
        id = prompt("Nhập mã sách thứ " + (i + 1) + ":");
    } while (id === "");

    let name;
    do {
        name = prompt("Nhập tên sách thứ " + (i + 1) + ":");
    } while (name === "");

    let quantity;
    do {
        quantity = parseInt(prompt("Nhập số lượng tồn kho hiện tại:"));
    } while (isNaN(quantity) || quantity < 0);

    booksId.push(id);
    booksName.push(name);
    inventoryQuantity.push(quantity);
}
console.log("Danh sách sách cần xem xét bổ sung (" + booksId.length + " loại):");
for (let i = 0; i < booksId.length; i++) {
    console.log(
        (i + 1) + ". Mã: " + booksId[i] +
        " - Tên: " + booksName[i] +
        " - Còn: " + inventoryQuantity[i] + " bản"
    );
}
let lowStockCount = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] <= 5) {
        lowStockCount++;
    }
}
console.log("\nSố sách có tồn kho ≤ 5 bản: " + lowStockCount + " loại");
let outOfStockCodes = "";
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] === 0) {
        outOfStockCodes += booksId[i] + " ";
    }
}

if (outOfStockCodes === "") {
    console.log("Các mã sách đã hết hàng (0 bản): Không có");
} else {
    console.log("Các mã sách đã hết hàng (0 bản): " + outOfStockCodes.trim());
}
