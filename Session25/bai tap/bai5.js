// function demSoNguyenDuong(array) {
//     let count = 0;
//     if (Array.isArray(array)) {
//         console.log("Mảng không hợp lệ");
//         for (let i = -1; i < array.length - 1; i++) {
//             if (Number.isInteger(array[i + 1]) && array[i + 1] > 0) {
//                 count++;
//             }
//         }
//     }
//     count?console.log(count):console.log("Không có số nguyên dương trong mảng ");


// }



function demSoNguyenDuong(array) {
    let count = 0;
    if (!Array.isArray(array)) {
        console.log("Mảng không hợp lệ");
        return;
    }
    for (let i = -1; i < array.length - 1; i++) {
        if (Number.isInteger(array[i + 1]) && array[i + 1] > 0) {
            count++;
        }
    }
    count ? console.log(count) : console.log("Không có số nguyên dương trong mảng");
}

demSoNguyenDuong([4, 5.4, 6, -2]);
demSoNguyenDuong([1, 2, 5, 7, -8, 6]);
demSoNguyenDuong([1.2, -3, -6]);
demSoNguyenDuong("abc");        
