let a = +prompt("nhập môt số nguyên");
let list = "";
for (let i = 0; i <= a; i++) {
    if (a % i == 0) {
        list += i + ",";
    }
}
console.log(list.slice(0, list.length - 1))
