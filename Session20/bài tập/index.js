let number = +prompt("Nhập vào một chuỗi số nguyên ");
if (Number.isInteger(number)) {
    number.toString();
    for (let i = 0; i <= (number.length) / 2; i++) {
        for (number[i] != number[number.length - 1 - i] ) {
            alert("Không phải số đối xứng ");
            break;
        }
        alert("dãy là số đối xứng");
    }
} else {
    alert("số không hợp lệ ");
}