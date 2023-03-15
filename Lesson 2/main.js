let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// Câu 6: Thêm sản phẩm
products.push({ name: "Realme GT Neo 2", price: 12000000, brand: "Realme", count: 5 });
console.log(products);

// Câu 7: Xoá sản phẩm của brand Samsung
products = products.filter(product => product.brand !== "Samsung");
console.log(products);

// Câu 8: Sắp xếp giá tăng dần
products.sort((a, b) => a.price - b.price);
console.log(products);

// Câu 9: Sắp xếp count giảm dần
products.sort((a, b) => b.count - a.count);
console.log(products);

// Câu 10: Lấy ra 2 sản phẩm bất kỳ
let randomProducts = []; 
while (randomProducts.length < 2) { 
    const randomIndex = Math.floor(Math.random() * products.length); 
    randomProducts.push(products[randomIndex]);}
console.log(products); console.log(randomProducts);

