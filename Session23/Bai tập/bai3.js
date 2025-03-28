
let n = +prompt("Nhập số phần tử trong mảng: ");
let count = 0;

if (n < 0) {
    document.write("Số lượng phần tử không hợp lệ.");
} else if (n === 0) {
    document.write("Mảng không có phần tử");
} else {
    let arr = new Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}: `);
    }
    for (let num of arr) {
        if (num < 0) count++;
    }
    document.write("Tổng số nguyên âm có trong mảng :"+count);
}
