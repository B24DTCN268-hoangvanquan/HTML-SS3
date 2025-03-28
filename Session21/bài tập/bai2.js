let number1 = +prompt("nhập vào số nguyên 1 ");
let number2 = +prompt("nhập vào số nguyên 2 ");
let number3 = +prompt("nhập vào số nguyên 3 ");
let number4 = +prompt("nhập vào số nguyên 4 ");
let number5 = +prompt("nhập vào số nguyên 5 ");
let list1 = 0;
let list2 = 0;

if (number1 % 2 == 0) {
    list1 += 1
} else {
    list2 += 1;
}
if (number2 % 2 == 0) {
    list1 += 1
} else {
    list2 += 1;
}
if (number3 % 2 == 0) {
    list1 += 1
} else {
    list2 += 1;
}
if (number4 % 2 == 0) {
    list1 += 1
} else {
    list2 += 1;
}
if (number5 % 2 == 0) {
    list1 += 1
} else {
    list2 += 1;
}
console.log("số lượng số chẵn :" + list1 );
console.log("số lượng số lẻ :" + list2 );

