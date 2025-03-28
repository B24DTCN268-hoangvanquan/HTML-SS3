let input = prompt("Nhập vào mảng số nguyên (cách nhau bởi dấu cách):").trim();
let arr = input ? input.split(" ").map(Number) : []; 

if (arr.length === 0 || arr.every(isNaN)) {
    document.write("Không có phần tử trong mảng");
} else {
    let max = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }

    document.write(`Số lớn nhất: ${max} <br> Vị trí: ${maxIndex}`);
}
