let add = function (a, b) {
    return a + b;
}
let subtract = function (a, b) {
    return a - b;
}
let multiply = function (a, b) {
    return a * b;
}
let divide = function (a, b) {
    return a / b;
}
let choice;
do {
    console.log("------MENU-------");
    console.log("1.Cộng");
    console.log("2.Trừ");
    console.log("3.NhânNhân");
    console.log("4.Chia");
    console.log("5.Thoát");
    choice = +prompt("Mời bạn nhập lựa chọn ");
    
    switch (choice) {
        case 1:
            console.log(add(a,b));
            
            break;
        case 2:
            console.log(subtract(a,b));
            

            break;
        case 3:
            console.log(multiply(a, b));

            break;
        case 4:
            console.log(divide(a, b));
            break;
        case 5:
            console.log("Thoát");
            
            break;
        
        default:
            console.log("Nhập lại");
            
            break;
    }
} while (choice !==5);