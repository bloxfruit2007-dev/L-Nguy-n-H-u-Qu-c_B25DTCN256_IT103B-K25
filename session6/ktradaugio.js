let names = "Quý, Nam, Lan, Hùng, Nam";
let students = names.split(", ");
students.reverse();
    if (students.includes("Lan")) {
        console.log("Tên Lan tồn tại trong mảng");
    } else {
        console.log("Tên Lan không tồn tại trong mảng");
        }
        let indexNam = students.indexOf("Nam");
        console.log("Vị trí đầu tiên của Nam là:", indexNam);
        let prices = [100, 200, 300, 400];
    for (let price of prices) {
        console.log(price);
    }
    for (let index in prices) {
        console.log(index);
    }
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        if (i % 2 === 0) {
        sum += prices[i];
    }
    }
console.log("Tổng các phần tử ở index chẵn là:", sum);
