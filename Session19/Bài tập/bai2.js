let index = prompt("Nhập vào kí tự");

if (index.indexOf(0||1||2||3||4||5||6||7||8||9) != -1) {
    alert("không phải chữ cái");
    
} else if (index >= `a` && index <= `z` || index >= `A` && index <= `Z`) {
    alert("kí tự " + index + " là chữ cái");
} else {
    alert("không phải chữ cái");
}
