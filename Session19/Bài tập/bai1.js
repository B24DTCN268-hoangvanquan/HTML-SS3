let month = prompt("Nhập vào một tháng");
if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    alert("tháng " + month + " có 31 ngày");
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    alert("tháng " + month + " có 30 ngày");
} else if (month == 2) {
    alert("tháng 2 có 28 ngày hoặc 29 ngày năm nhuận ");
} else {
    alert("tháng không hợp lệ");
}