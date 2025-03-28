let a = prompt("Nhap so a : ");
let b = prompt("Nhap so b : ");
let c = prompt("Nhap phep tinh : ");
switch (c) {
    case "+":
        alert("Kết quả của phép tính là:" (parseInt(a) + parseInt(b)));
        break;
    case "-":
        alert("Kết quả của phép tính là:"(parseInt(a) - parseInt(b)));
        break;
    case "*":
       
        alert("Kết quả của phép tính là:"(parseInt(a) * parseInt(b)));
        break;
    case "/":
       
        alert("Kết quả của phép tính là:"(parseInt(a) / parseInt(b)));
        break;
    default:
        alert("Phep tinh khong hop le");
        break
}