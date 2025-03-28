let a = Number(prompt("Nhập lựa chọn "))

/*
1. Nhập số phần tử cần nhập và giá trị các phần tử 

2. In ra giá trị các phần tử đang quản lý 

3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần

4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng 

5. In ra các số nguyên tố trong mảng và tính tổng 

6. Nhập một số và đếm số lần xuất hiện trong mảng 

7. Thêm một phần tử vào vị trí chỉ định 

8. Xóa một phần tử theo giá trị 

9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần 

0. Thoát 
*/
let arr = [];
do {
    a = Number(prompt("Nhập lựa chọn "));
    switch (a) {
        case 1:
            let size = Number(prompt("Nhập độ dài cho mảng: "));
            arr = [];
            for (let i = 0; i < size; i++) {
                arr[i] = Number(prompt(`Nhập giá trị cho arr[${i}]:`));
            }
            break;

        case 2:
            for (let i = 0; i < arr.length; i++)
                console.log(`arr[${i}]=${arr[i]}`);
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0) {
                    console.log("phần tử chẵn:" + arr[i]);
                    sum += arr[i];
                }
                for (let j = 0; j < arr.length - 1; j++) {
                    if (arr[j] < arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            console.log("mảng sau khi được sắp xếp" + arr);

            console.log("tổng các phần tử chẵn là :" + sum);

            break;
        case 4:
            let maxIndex;
            let minIndex;
            let max = arr[0];
            let min = arr[0];

            for (let index in arr) {
                if (arr[index] > max) {
                    max = arr[index];
                    maxIndex = index;
                }
                if (arr[index] < min) {
                    min = arr[index];
                    minIndex = index;
                }
            }
            console.log(`Số lớn nhất là ${max}:arr[${maxIndex}]`);
            console.log(`Số nhỏ nhất là ${min}:arr[${minIndex}]`);
            break;
        case 5:
            let sumPrime = 0;
            for (let num of arr) {
                let count = 0;
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i == 0) {
                        count++;
                    }
                }
                if (count == 0 && num != 1) {
                    console.log(num);
                    sumPrime += num;
                }
            }
            console.log(sumPrime);

            break;
        case 6:
            let number = +prompt("Nhập một số bất kì để kiểm tra: ");
            let count = 0;
            for (let num of arr) {
                num == number ? count++ : count;
            }
            console.log(`Số ${number} xuất hiện ${count} lần`);
            break;
        case 7:
            let addIndex = +prompt("Nhập vị trí bạn muốn thêm phần tử: ");
            let addItem = +prompt("Nhập phần tử bạn muốn thêm vào mảng: ");
            arr.splice(addIndex, 0, addItem);
            break;
        case 8:
            let deleteIndex = +prompt("nhập vị trí mà bạn muốn xóa ");
            arr.splice(deleteIndex, 1);
            break;
        case 9:
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n - i; j++) {
                    if (arr[j] < arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            console.log(arr);
            console.log(arr.reverse());
    }
    if (choice == 0) {
        break;

    }
} while (a != 0)