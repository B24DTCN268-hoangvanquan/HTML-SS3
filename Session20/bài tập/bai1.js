let N = Number(prompt("Nhập số nguyên N "));
let sum = 0;
if (N > 0 && Number.isInteger(N)) {
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    alert(`${sum}`)
} else {
    alert("Dữ liệu không hợp lệ");
}
