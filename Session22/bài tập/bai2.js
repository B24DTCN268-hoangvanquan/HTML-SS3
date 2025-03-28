let a = +prompt("Nhập vào một số");
let numbers = [1, 3, 5, 7, 9];
let found = 0; 
for (let i = 0; i < numbers.length; i++) {
    if (a === numbers[i]) {
        found = true;
        break; 
    }
}
if (found) {
    console.log("Bingo");
} else {
    console.log("Chúc bạn may mắn lần sau");
}

// let arr = [1, 2, 3, 4, 5];
// let a = +prompt("Nhập vào một số");
// flag = 0;
// if (Number.isInteger(a)) {
//     for (let i = 0; i < arr.length; i++) {
//         a == arr[i]
//             ? flag++ ; break;
//         : flag
//     }
//     flag !=0 ? console.log("Bingo"): console.log("Chúc bạn may mắn lần sau");
    
    
// }
