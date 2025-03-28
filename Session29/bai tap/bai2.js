
let array = [];
let products = [];
let count = 1;

function addProduct() {
    let name = prompt("Nhập tên sản phẩm:");
    let price = parseFloat(prompt("Nhập giá sản phẩm:"));
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = parseInt(prompt("Nhập số lượng sản phẩm:"));

    if (addProduct == -1) {
        alert("Thông tin không hợp lệ!");
        return;
    }

    let newProduct = new Product(count++, name, price, category, quantity);
    products.push(newProduct);
    alert("Thêm sản phẩm thành công!");
}

function displayProducts() {
    if (products.length === 0) {
        console.log("Danh sách sản phẩm trống.");
        return;
    }

    console.log("Danh sách sản phẩm:");
    products.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
    });
}

function displayProductById() {
    let id = prompt("Nhập ID cần hiển thị");
    let product = arr.find((item) => item.id === id);
    if (product==-1) {
        console.log("id ko hợp lệ");
        
    }else{
       console.log();
       
    }
}

function updateProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
    let product = products.find(product => product.id === id);

    if (!product) {
        console.log("Không tìm thấy sản phẩm.");
        return;
    }
    if (find) {
         arr[product].name = prompt("nhập tên");
         arr[product].price = +prompt("nhập tên");
         arr[product].category = prompt("nhập tên");
         arr[product].quantity = prompt("nhập tên");


    }
    console.log("Cập nhật sản phẩm thành công!");
}

function deleteProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
    let index = products.findIndex(product => product.id === id);

    if (index === -1) {
        console.log("Không tìm thấy sản phẩm.");
        return;
    }

    products.splice(index, 1);
    console.log("Xóa sản phẩm thành công!");
}

function filterProductsByPrice() {
    let minPrice = parseFloat(prompt("Nhập giá thấp nhất:"));
    let maxPrice = parseFloat(prompt("Nhập giá cao nhất:"));

    if (isNaN(minPrice) || isNaN(maxPrice) || minPrice > maxPrice) {
        console.log("Khoảng giá không hợp lệ!");
        return;
    }

    let filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);

    if (filteredProducts.length === 0) {
        console.log("Không có sản phẩm nào trong khoảng giá này.");
    } else {
        console.log("Sản phẩm trong khoảng giá:");
        filteredProducts.forEach(product => {
            console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
        });
    }
}

function menu() {
    let choice;
    do {
        choice = prompt(`
        1. Thêm sản phẩm.
        2. Hiển thị tất cả sản phẩm.
        3. Hiển thị chi tiết sản phẩm theo ID.
        4. Cập nhật thông tin sản phẩm theo ID.
        5. Xóa sản phẩm theo ID.
        6. Lọc sản phẩm theo khoảng giá.
        7. Thoát.
        Nhập lựa chọn của bạn:
        `);

        switch (choice) {
            case "1":
                addProduct();
                break;
            case "2":
                displayProducts();
                break;
            case "3":
                displayProductById();
                break;
            case "4":
                updateProduct();
                break;
            case "5":
                deleteProduct();
                break;
            case "6":
                filterProductsByPrice();
                break;
            case "7":
                alert("Thoát chương trình!");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while (choice !== "7");
}

menu();
