// function kiemTraSonguyen(number) {
//     let count = 0;
//     if (Number.isInteger(number)) {
//         for (let i; i < number; i++) {
//             if (number % i == 0) {
//                 count++;
//             }
//             count == 1 ? console.log("số nguyên tố") : console.log("Không phải số nguyên tố ");


//         }
//     }
// }
// kiemTraSoNguyen = (17)


function kiemTraSoNguyen(number) {
    let count = 0;
    if (Number.isInteger(number) && number > 1) {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count++;
            }
        }
        count === 2 ? console.log(number + " là số nguyên tố") : console.log(number + " không phải số nguyên tố");
    } else {
        console.log(number + " không phải số nguyên tố");
    }
}
    

["fhgdfs"].forEach(kiemTraSoNguyen);
