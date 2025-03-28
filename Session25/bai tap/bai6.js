// function isPalindrome() {
//     let text = prompt("Nhập vào chuỗi ");
//     for (let i = 0; i < text.length / 2; i++) {
//         if (text[i] != text[text.length - 1 - i]) {
//             flag = 0;
//             return;
//         }
//     }
//     flag ? console.log("Đây alaf số đối xứng ") : console.log("Đây không phải chuỗi đối xứng");

// }

function isPalindrome() {
    let text = prompt("Nhập vào chuỗi:");
    if (text === null) {
        console.log("Không có chuỗi nào được nhập.");
        return;
    }
    let flag = 1; 
    for (let i = 0; i < text.length / 2; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            flag = 0; 
            break; 
        }
    }
    flag ? console.log("Đây là chuỗi đối xứng") : console.log("Đây không phải chuỗi đối xứng");
}

isPalindrome();












// function isPalindrome() {
//     let text = prompt("Nhập vào chuỗi:");
//     if (text === null) {
//         console.log("Không có chuỗi nào được nhập.");
//         return;
//     }
//     for (let i = 0; i < text.length / 2; i++) {
//         if (text[i] !== text[text.length - 1 - i]) {
//             console.log("Đây không phải chuỗi đối xứng.");
//             return;
//         }
//     }
//     console.log("Đây là chuỗi đối xứng.");
// }

// isPalindrome();
