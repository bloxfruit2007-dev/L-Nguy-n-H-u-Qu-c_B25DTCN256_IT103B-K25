let books = [];
let n = parseInt(prompt("Bạn muốn trả bao nhiêu cuốn sách?"));
for (let i = 0; i < n; i++) {
    let bookName = prompt("Nhập tên cuốn sách thứ " + (i + 1) + ":");
    books.push(bookName);
}
console.log("Tổng số sách đã được trả: " + books.length);
console.log("Danh sách sách đã trả:");
for (let i = 0; i < books.length; i++) {
    console.log((i + 1) + ". " + books[i]);
}
