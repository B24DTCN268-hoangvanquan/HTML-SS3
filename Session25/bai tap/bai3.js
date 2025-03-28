function checkNumber(array) {
    let arrayNew = [];
    if (Array.isArray(array)) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] % 2 == 0) {
                arrayNew.push(array[i]);
            } else {
                console.log("Dữ liệu không hợp lệ ");
            }
            arrayNew.length > 0 ? console.log(arrayNew) : console.log("Mảng không có chữa số chẵn ");
            arrayNew.length ? console.log("có") : console.log("không");
        }

    }
}