let students = [];
let pageSize = 5;
function generateTimestamp() {
    return Date.now();
}

function findStudentById(id) {
    return students.find(s => s.id === id);
}

function validateStudent(id, name, age, gpa, status, isUpdate = false) {
    if (!isUpdate || id !== "") {
        if (!id) return "ID không được để trống";
        if (!isUpdate && findStudentById(id)) return "ID đã tồn tại";
    }

    if (!isUpdate || name !== "") {
        if (!name) return "Tên không được để trống";
    }

    if (!isUpdate || age !== "") {
        age = Number(age);
        if (isNaN(age) || age < 16 || age > 60) return "Tuổi phải từ 16 đến 60";
    }

    if (!isUpdate || gpa !== "") {
        gpa = Number(gpa);
        if (isNaN(gpa) || gpa < 0 || gpa > 10) return "GPA phải từ 0 đến 10";
    }

    if (!isUpdate || status !== "") {
        if (status !== "active" && status !== "inactive")
            return "Status phải là active hoặc inactive";
    }

    return null;
}
function createStudent() {
    let id = prompt("Nhập ID:");
    let name = prompt("Nhập tên:");
    let age = prompt("Nhập tuổi:");
    let gpa = prompt("Nhập GPA:");
    let status = prompt("Nhập trạng thái (active/inactive):");

    let error = validateStudent(id, name, age, gpa, status);
    if (error) {
        alert(error);
        return;
    }

    students.push({
        id,
        name,
        age: Number(age),
        gpa: Number(gpa),
        status,
        createdAt: generateTimestamp(),
        updatedAt: null,
        deletedAt: null
    });

    alert("Thêm sinh viên thành công!");
}

function updateStudent() {
    let id = prompt("Nhập ID sinh viên cần cập nhật:");
    let student = findStudentById(id);

    if (!student) {
        alert("Không tìm thấy sinh viên!");
        return;
    }

    let name = prompt("Tên mới (Enter để bỏ qua):");
    let age = prompt("Tuổi mới (Enter để bỏ qua):");
    let gpa = prompt("GPA mới (Enter để bỏ qua):");
    let status = prompt("Status mới (active/inactive) (Enter để bỏ qua):");

    let error = validateStudent(id, name, age, gpa, status, true);
    if (error) {
        alert(error);
        return;
    }

    if (name) student.name = name;
    if (age) student.age = Number(age);
    if (gpa) student.gpa = Number(gpa);
    if (status) student.status = status;

    student.updatedAt = generateTimestamp();

    alert("Cập nhật thành công!");
}

function softDeleteStudent() {
    let id = prompt("Nhập ID sinh viên cần xóa:");
    let student = findStudentById(id);

    if (!student) {
        alert("Không tìm thấy sinh viên!");
        return;
    }

    if (confirm("Bạn có chắc muốn xóa?")) {
        student.status = "inactive";
        student.deletedAt = generateTimestamp();
        alert("Đã soft delete!");
    }
}

function restoreStudent() {
    let id = prompt("Nhập ID sinh viên cần khôi phục:");
    let student = findStudentById(id);

    if (!student) {
        alert("Không tìm thấy sinh viên!");
        return;
    }

    if (student.status === "active") {
        alert("Sinh viên đang active!");
        return;
    }

    student.status = "active";
    student.updatedAt = generateTimestamp();
    student.deletedAt = null;

    alert("Khôi phục thành công!");
}
function viewStudents() {
    let data = [...students]; // clone

    let keyword = prompt("Tìm theo tên (Enter để bỏ qua):");
    if (keyword) {
        data = data.filter(s =>
            s.name.toLowerCase().includes(keyword.toLowerCase())
        );
    }

    let statusFilter = prompt("Lọc theo status (active/inactive/Enter):");
    if (statusFilter) {
        data = data.filter(s => s.status === statusFilter);
    }

    let sortOption = prompt("Sort GPA (asc/desc/Enter):");
    if (sortOption === "asc") {
        data.sort((a, b) => a.gpa - b.gpa);
    } else if (sortOption === "desc") {
        data.sort((a, b) => b.gpa - a.gpa);
    }

    let totalPages = Math.ceil(data.length / pageSize);
    let currentPage = 1;

    if (totalPages === 0) {
        alert("Không có dữ liệu!");
        return;
    }

    let action;
    do {
        let start = (currentPage - 1) * pageSize;
        let pageData = data.slice(start, start + pageSize);

        console.clear();
        console.table(pageData);
        console.log(`Trang ${currentPage}/${totalPages} | Tổng: ${data.length}`);

        action = prompt("First / Prev / Next / Last / Exit");

        switch (action) {
            case "First": currentPage = 1; break;
            case "Last": currentPage = totalPages; break;
            case "Next":
                if (currentPage < totalPages) currentPage++;
                break;
            case "Prev":
                if (currentPage > 1) currentPage--;
                break;
        }

    } while (action !== "Exit");
}
function analyticsDashboard() {
    if (students.length === 0) {
        alert("Chưa có dữ liệu!");
        return;
    }

    let total = students.length;

    let stats = students.reduce((acc, s) => {
        acc.total++;
        acc[s.status]++;
        acc.totalGpa += s.gpa;

        if (s.gpa === 0) acc.zeroGpa.push(s);
        if (s.gpa < 3) acc.risk.push(s);

        return acc;
    }, {
        total: 0,
        active: 0,
        inactive: 0,
        totalGpa: 0,
        zeroGpa: [],
        risk: []
    });

    console.clear();
    console.log("===== DASHBOARD =====");
    console.log("Tổng SV:", stats.total);
    console.log("Active:", stats.active);
    console.log("Inactive:", stats.inactive);
    console.log("GPA TB:", (stats.totalGpa / total).toFixed(2));
    console.log("SV GPA = 0:", stats.zeroGpa.length);
    console.log("SV GPA < 3:", stats.risk.length);

    let topGpa = [...students]
        .sort((a, b) => b.gpa - a.gpa)
        .slice(0, 5);

    console.log("Top 5 GPA cao nhất:");
    console.table(topGpa);

    let youngest = [...students]
        .sort((a, b) => a.age - b.age)
        .slice(0, 5);

    console.log("Top 5 nhỏ tuổi nhất:");
    console.table(youngest);
}
let choice;
do {
    choice = prompt(`
==== STUDENT MANAGER ADVANCED ====
1. Create Student
2. Update Student
3. Soft Delete Student
4. Restore Student
5. View Students
6. Analytics Dashboard
7. Exit
Chọn:
`);

    switch (choice) {
        case "1": createStudent(); break;
        case "2": updateStudent(); break;
        case "3": softDeleteStudent(); break;
        case "4": restoreStudent(); break;
        case "5": viewStudents(); break;
        case "6": analyticsDashboard(); break;
        case "7": alert("Thoát chương trình!"); break;
        default: alert("Lựa chọn không hợp lệ!");
    }

} while (choice !== "7");