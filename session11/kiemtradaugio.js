let products = [
{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
{id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true },
{ id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
{ id: "P04", name: "Màn hình Dell UltraSharp", price: 450, category: "Màn hình", inStock: true },
{ id: "P05", name: "Tai nghe Sony WH-1000XM5 ", price: 350, category: "Phụ kiện", inStock: true }
];
let findId = products("Mời bạn nhập id sản phẩm muốn tìm:");
let displayProduct = products.filter((value) => {
    value[`id`].include(findId) == true;
    return `${value[id]} ${value[`name`]} ${value[`price`]} ${value[`category`]} ${value[`inStock`]}`
});
console.log(displayProduct);