
const number = prompt("Nhập vào một số bất kỳ:");

if ( Number.isInteger(Number(number))) {
    let newNumber = Number(number.split("").reverse().join("")); 
    console.log("Số sau khi đảo ngược:", newNumber);
} else {
    console.log("Dãy không hợp lệ");
}
