function render() {
    let container = document.getElementById("app");
    let name = localStorage.getItem("username");

    if (name) {
        container.innerHTML = `
                    <h2> Chào bạn, <strong>${name}</strong>!</h2>
                    <button onclick="changeName()">Đổi tên</button>
                `;
    } else {
        container.innerHTML = `
                    <h2>Nhập tên của bạn</h2>
                    <input type="text" id="nameInput" placeholder="Nhập tên " />
                    <button onclick="saveName()">Lưu</button>
                `;
    }
}
function saveName() {
    let nameInput = document.getElementById("nameInput").value.trim();
    if (nameInput) {
        localStorage.setItem("username", nameInput);
        render();
    }
}

function changeName() {
    localStorage.removeItem("username");
    render();
}

render();