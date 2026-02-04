let lateBooks = [];
let n = parseInt(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));
for (let i = 0; i < n; i++) {
    let bookName = prompt("Nhập tên cuốn sách bị trả muộn thứ " + (i + 1) + ":");
    lateBooks.push(bookName);
}
console.log("Tổng số sách bị trả muộn: " + lateBooks.length);
console.log("Danh sách sách bị trả muộn:");
for (let i = 0; i < lateBooks.length; i++) {
    console.log((i + 1) + ". " + lateBooks[i]);
}
let countLongName = 0;
for (let i = 0; i < lateBooks.length; i++) {
    if (lateBooks[i].length > 20) {
        countLongName++;
    }
}
console.log("Số lượng sách có tên dài hơn 20 ký tự: " + countLongName);
