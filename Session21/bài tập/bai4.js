let a = +prompt("nhập vào số a");
let b = +prompt("nhập vào số b");
let c = +prompt("nhập vào số c");
let delta = (b * b - 4 * (a * c));
if (delta < 0) {
    alert("Phương trình vô nghiệm");
} else if (delta == 0) {
    let x = -b / (2 * a);
    alert(`phương trình có nghiệm kép x1=x2=${x}`);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert(`phương trình có 2 nghiệm phân biệt: x1=${x1} ; x2=${x2}`);

}