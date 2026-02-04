let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
function runLibrary() {
    let loop = true;
    while (loop) {
        console.log("\n--- THƯ VIỆN KHOA HỌC ---");
        console.log("1. Xem danh sách");
        console.log("2. Nhập sách mới");
        console.log("3. Mượn sách (Xóa)");
        console.log("4. Sửa tên sách");
        console.log("5. Sắp xếp kệ");
        console.log("0. Thoát");
        let choice = prompt("Bạn chọn:");
        switch (choice) {
            case "1": 
                console.log(`=> Danh sách hiện tại (${books.length} cuốn):`);
                if (books.length === 0) {
                    console.log("Thư viện hiện đang trống!");
                } else {n
                    let display = books.map((name, index) => `${index + 1}. ${name}`).join(" - ");
                    console.log(display);
                }
                break;

            case "2": 
                let newBook = prompt("Nhập tên cuốn sách mới:");
                if (newBook) {
                    books.push(newBook); 
                    console.log("=> Đã thêm thành công!");
                }
                break;

            case "3": 
                let borrowName = prompt("Nhập tên cuốn sách muốn mượn:");
                let borrowIndex = books.indexOf(borrowName);

                if (borrowIndex === -1) {
                    console.log(`=> Lỗi: Không tìm thấy sách ${borrowName}!`);
                } else {
                    books.splice(borrowIndex, 1); 
                    console.log(`=> Đã cho mượn cuốn '${borrowName}'.`);
                }
                break;

            case "4": 
                let oldName = prompt("Nhập tên sách cũ cần sửa:");
                let editIndex = books.indexOf(oldName);

                if (editIndex !== -1) {
                    let updateName = prompt("Nhập tên mới:");
                    books[editIndex] = updateName; 
                    console.log("=> Cập nhật tên sách thành công!");
                } else {
                    console.log("=> Lỗi: Không tìm thấy sách cần sửa!");
                }
                break;
            case "5": 
                books.sort(); 
                console.log("=> Kệ sách đã được sắp xếp!");
                console.log(books.map((name, index) => `${index + 1}. ${name}`).join(" - "));
                break;
            case "0": 
                console.log("Tạm biệt!");
                loop = false;
                break;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
                break;
        }
    }
}
runLibrary();