// Danh sách sản phẩm
const products = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "" },
    { id: 2, name: "Giò Lụa", price: 180000, img: "" },
    { id: 3, name: "Cành Đào", price: 500000, img: "" },
    { id: 4, name: "Mứt Tết", price: 120000, img: "" },
    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "" },
    { id: 6, name: "Dưa Hấu", price: 60000, img: "" }
];

// Lấy các phần tử cần thao tác
const productContainer = document.getElementById("product-container");
const cartList = document.getElementById("cart-list");
const totalPriceElement = document.getElementById("total-price");

let total = 0;

/* =========================
   CHỨC NĂNG 1: HIỂN THỊ SẢN PHẨM
========================= */

products.forEach(product => {

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Giá: ${product.price.toLocaleString()} VNĐ</p>
        <button data-id="${product.id}">Mua ngay</button>
    `;

    productContainer.appendChild(productDiv);
});


/* =========================
   CHỨC NĂNG 2: THÊM VÀO GIỎ HÀNG
========================= */

// Dùng Event Delegation
productContainer.addEventListener("click", function(e) {

    if (e.target.tagName === "BUTTON") {

        const productId = parseInt(e.target.getAttribute("data-id"));

        const selectedProduct = products.find(p => p.id === productId);

        // Xóa dòng "Giỏ hàng đang trống" nếu có
        const emptyCart = document.getElementById("empty-cart");
        if (emptyCart) {
            emptyCart.remove();
        }

        // Tạo thẻ li mới
        const li = document.createElement("li");
        li.innerText = `${selectedProduct.name} - ${selectedProduct.price.toLocaleString()} VNĐ`;

        cartList.appendChild(li);

        /* =========================
           CHỨC NĂNG 3: CẬP NHẬT TỔNG TIỀN
        ========================= */

        total += selectedProduct.price;
        totalPriceElement.innerText = total.toLocaleString();
    }

});