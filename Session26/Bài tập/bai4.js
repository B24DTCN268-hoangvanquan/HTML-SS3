let text1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let text2 = [];
let text3 = "dfd"
function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length ==0) {
            console.log("Mảng không có phần tư nào");
            return;
        }
        let result = arr.filter((item) => {
            return item
        })
        
    } else {
        console.log("Mảng không hợp lệ");
        
    }
    
}
filter(text1);
filter(text2);
filter(text3);

// function searchPrime(num) {
//     if (num > 1) {
//         let count = 0;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i == 0) {
//                 count++;
//             }
//         }
//         if (count == 0) {
//             return num;
//         }
//     }

// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// searchPrime(arr);
// let array = arr.filter((num) => searchPrime(num));
// console.log(array);
