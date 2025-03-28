console.log("--------Menu--------");
console.log("1. Nhập Mảng ");
console.log("2. Hiển thị mảng ");
console.log("3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng ");
console.log("4. Tính tổng các phần tử có trong mảng ");
console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng ");
console.log("6. Sắp xếp mảng tăng dần ");
console.log("7. Thoát chương trình ");

let arr = [];

while (true) {
    let choice = Number(prompt("Nhập lựa chọn của bạn (1-7):"));

    switch (choice) {
        case 1:
            arr = [];
            let length = Number(prompt("Nhập số lượng phần tử trong mảng: "));
            if (length > 0 && Number.isInteger(length)) {
                for (let i = 0; i < length; i++) {
                    let number = Number(prompt(`Nhập giá trị phần tử thứ ${i}:`));
                    if (!isNaN(number) && Number.isInteger(number)) {
                        arr.push(number);
                    } else {
                        console.log("Vui lòng nhập một số nguyên hợp lệ!");
                         
                    }
                }
            } else {
                console.log("Vui lòng nhập số nguyên dương hợp lệ!");
            }
            break;
        case 2:
            console.log("Mảng hiện tại:", arr);
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng rỗng! Vui lòng nhập mảng trước.");
            } else {
                let max = arr[0]; 
                let min = arr[0]; 

                for (let i = 1; i < arr.length; i++) { 
                    if (arr[i] > max) {
                        max = arr[i]; 
                    }
                    if (arr[i] < min) {
                        min = arr[i]; 
                    }
                }

                console.log("Phần tử lớn nhất là:", max);
                console.log("Phần tử nhỏ nhất là:", min);
            }
            break;
        case 4:
            if (arr.length === 0) {
                console.log("Mảng rỗng! Vui lòng nhập mảng trước.");
            } else {
                let sum = arr.reduce((total, num) => total + num, 0);
                console.log("Tổng các phần tử trong mảng là:", sum);
            }
            break;

        case 5:
            let numToFind = Number(prompt("Nhập số cần tìm:"));
            if (!isNaN(numToFind)) {
                let count = arr.filter(num => num === numToFind).length;
                console.log(`Số ${numToFind} xuất hiện ${count} lần trong mảng.`);
            } else {
                console.log("Giá trị nhập không hợp lệ!");
            }
            break;

        case 6:
            if (arr.length === 0) {
                console.log("Mảng rỗng! Vui lòng nhập mảng trước.");
            } else {
                for (let i = 0; i < arr.length - 1; i++) {
                    for (let j = 0; j < arr.length - 1 - i; j++) {
                        if (arr[j] > arr[j + 1]) {
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    }
                }
                console.log("Mảng sau khi sắp xếp tăng dần:", arr);
            }
            break;

        case 7:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice === 7) {
        break;
    }
}
