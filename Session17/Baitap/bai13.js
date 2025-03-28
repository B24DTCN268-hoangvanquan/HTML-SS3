let tien = parseFloat(prompt("Người dùng nhập vào số tiền gửi:"));
let time = parseInt(prompt("Người dùng nhập vào số tháng gửi:"));
const laiSuat = 4.3 / 100;
let lai = tien * laiSuat * (time / 12);
document.write("Số tiền lãi ngân hàng là: " + lai.toFixed(2) + " VNĐ");  