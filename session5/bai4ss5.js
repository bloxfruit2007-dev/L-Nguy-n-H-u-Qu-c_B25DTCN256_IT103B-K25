let booksId = [];
let booksName = [];
let bookStatus = [];
function getStatusByChoice(choice) {
    if (choice === 1) return "Hỏng nhẹ";
    if (choice === 2) return "Hỏng nặng";
    if (choice === 3) return "Cần sửa gấp";
    if (choice === 4) return "Đã sửa xong";
    if (choice === 5) return "Loại bỏ";
    return "";
}
function printList() {
    console.log("\nDanh sách hiện tại (" + booksId.length + " cuốn):");
    for (let i = 0; i < booksId.length; i++) {
        console.log(
            (i + 1) + ". " + booksId[i] +
            " - " + booksName[i] +
            " - " + bookStatus[i]
        );
    }
}
let n = parseInt(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));

for (let i = 0; i < n; i++) {
    let id;
    do {
        id = prompt("Nhập mã sách thứ " + (i + 1) + ":");
    } while (id === "");

    let name;
    do {
        name = prompt("Nhập tên sách thứ " + (i + 1) + ":");
    } while (name === "");

    let choice;
    do {
        choice = parseInt(
            prompt(
                "Chọn tình trạng ban đầu:\n" +
                "1. Hỏng nhẹ\n" +
                "2. Hỏng nặng\n" +
                "3. Cần sửa gấp"
            )
        );
    } while (choice < 1 || choice > 3);

    booksId.push(id);
    booksName.push(name);
    bookStatus.push(getStatusByChoice(choice));
}
printList();
while (true) {
    let action = parseInt(
        prompt(
            "\nChọn chức năng:\n" +
            "1. Sửa tình trạng sách\n" +
            "2. Loại bỏ (xóa) sách\n" +
            "0. Kết thúc và in báo cáo"
        )
    );

    if (action === 0) break;
    if (action === 1) {
        let editId = prompt("Nhập mã sách cần sửa:");
        let found = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === editId) {
                found = i;
                break;
            }
        }

        if (found !== -1) {
            let newChoice;
            do {
                newChoice = parseInt(
                    prompt(
                        "Chọn tình trạng mới:\n" +
                        "1. Hỏng nhẹ\n" +
                        "2. Hỏng nặng\n" +
                        "3. Cần sửa gấp\n" +
                        "4. Đã sửa xong\n" +
                        "5. Loại bỏ"
                    )
                );
            } while (newChoice < 1 || newChoice > 5);

            bookStatus[found] = getStatusByChoice(newChoice);
        } else {
            console.log("❌ Không tìm thấy mã sách");
        }

        printList();
    }
    if (action === 2) {
        let deleteId = prompt("Nhập mã sách cần xóa:");
        let index = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === deleteId) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            booksId.splice(index, 1);
            booksName.splice(index, 1);
            bookStatus.splice(index, 1);
        } else {
            console.log("❌ Không tìm thấy mã sách");
        }

        printList();
    }
}
let fixedCount = 0;
let removedCount = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") fixedCount++;
    if (bookStatus[i] === "Loại bỏ") removedCount++;
}

console.log("\n===== BÁO CÁO CUỐI =====");
console.log("Tổng số sách còn lại: " + booksId.length);
console.log("Số sách đã sửa xong: " + fixedCount);
console.log("Số sách loại bỏ: " + removedCount);

if (booksId.length > 0) {
    console.log("\nDanh sách sách còn lại:");
    for (let i = 0; i < booksId.length; i++) {
        console.log(
            (i + 1) + ". " + booksId[i] +
            " - " + booksName[i] +
            " - " + bookStatus[i]
        );
    }
} else {
    console.log("Không còn sách nào trong danh sách.");
}
