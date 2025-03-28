let r = parseFloat(prompt("Mời bạn nhập vào bán kính của hình tròn :"));
let pi = 3.14;
let thetich = Math.round(4 / 3 * pi * r ^ 3);
document.write("Thể tích mặt cầu là : " + thetich + "cm^2<br>");
let Smatcau = Math.round(4 * pi * r ^ 2);
document.write("Diện tích mặt cầu là : " + Smatcau + "cm^3<br>");
let chuvi = Math.round(2 * pi * r);
document.write("Chu vi mặt cầu là : " + chuvi + "cm");