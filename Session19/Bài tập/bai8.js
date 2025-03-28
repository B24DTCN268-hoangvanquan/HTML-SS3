let month = prompt("Nhập vào một tháng bất kì");
if (month <= 3 && month > 0) {
    alert("Mùa Xuân")
} else if (month <= 6) {
    alert("Mùa hè");
} else if (month <= 9) {
    alert("Mùa thu ");
} else if (month <= 12) {
    alert("Mùa đông");     
} else {
    alert("tháng không hợp lệ");
}