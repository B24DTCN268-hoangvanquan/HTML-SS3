
let input = +prompt("nhap so tien gui : ");
let phanTramLai = +prompt("nhap so % lai : ");
phanTramLai = parseFloat(phanTramLai / 100);
let time = +prompt("nhap so thang gui : ");

let tienNhanDuoc = input * Math.pow((1 + phanTramLai), time);
let tienLai = tienNhanDuoc - input;

tienNhanDuoc = tienNhanDuoc.toFixed(3);
tienLai = tienLai.toFixed(3);

console.log("tien nhan duoc : ", tienNhanDuoc);
console.log("tien lai : ", tienLai);