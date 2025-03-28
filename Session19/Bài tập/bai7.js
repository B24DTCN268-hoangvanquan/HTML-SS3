let a = +prompt("Nhập a");
let b = +prompt("Nhập b");
let c = +prompt("Nhập c");
let result = a > b ? (a > c ? a : c) : (b > c ? b : c);
alert(`số lớn nhất trong 3 số là ${result}`);