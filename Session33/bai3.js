let store = [
    { name: "Rau sạch", mode: "Đồ ăn" },
    { name: "Thit lon", mode: "Đồ ăn" },
    { name: "Pepsi khong calo", mode: "Nuoc" },
    { name: "Cocacola", mode: "Nước" },
    { name: "Co le", mode: "Đồ ăn" },
    { name: "Rau sạch", mode: "Dụng cụ" },
    { name: "Tuy vit", mode: "Dụng cụ" }

];

function showItems() {
    let message = "";
    for (let i = 0; i < store.length; i++) {
        message += `<li>Tên Đồ ăn: ${store[i].name} - Danh mục: ${store[i].mode}</li>`;
    }
    document.getElementById("items").innerHTML = message;
}

function filter() {
    let modeFilter = document.getElementById("mode").value;
    console.log(modeFilter);
    if (modeFilter === "nothing") {
        showItems();
        return;
    }
    let message = "";
    for (let i = 0; i < store.length; i++) {
        if (modeFilter === store[i].mode) {
            message += `<li>Tên Đồ ăn: ${store[i].name} - Danh muc: ${store[i].mode}</li>`;
        }
    }

    document.getElementById("items").innerHTML = message;
}


showItems()