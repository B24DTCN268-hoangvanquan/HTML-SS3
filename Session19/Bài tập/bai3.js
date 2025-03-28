let money = prompt("Chọn loại tiền");
if (money == VND) {
    let VND = prompt("Nhập vào số tiền");
    let USD = VND / 23000;
    alert(+USD+" USD")
} else {
    let USD = prompt("Nhập số tiền");
    let VND = USD * 23000;
    alert(+VND+"VND")
}
