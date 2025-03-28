let N = +prompt("Nhập số nguyên N ");
let list = "";
if (N > 0 && Number.isInteger(N)) {
    for (let i = 1; i <= N; i++) {
        if (i % 5 == 0) {
            list += i + ",";
        }
    }
    alert("Các số chia hết cho 5 từ 1 đến " + N + "là : " + list);
} else {
    alert("Dữ liệu nhập vào không hợp lệ");
}
