let number1 = +prompt("nhập vào số nguyên 1 ");
let number2 = +prompt("nhập vào số nguyên 2 ");
let number3 = +prompt("nhập vào số nguyên 3 ");
let number4 = +prompt("nhập vào số nguyên 4 ");
let number5 = +prompt("nhập vào số nguyên 5 ");
let num = 0;
if (number1 % 2 == 0) {
    number1=0
} else {
    number1=number1
}
if (number2 % 2 == 0) {
    number2 = 0
} else {
    number2 = number2
}
if (number3 % 2 == 0) {
    number3 = 0
} else {
    number3 = number3
}
if (number4 % 2 == 0) {
    number4 = 0
} else {
    number4 = number4;
}
if (number5 % 2 == 0) {
    number5 = 0
} else {
    number5 =number5
}
let sum = number1 + number2 + number3 + number4 + number5 
console.log("tổng là :"+sum);
