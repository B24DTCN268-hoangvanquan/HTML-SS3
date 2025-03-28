let text1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 34, 23, 65];
let text2 = [];
let text3 = ("bnml,")
function filter(arr) {
    // Kiểm tra dữ liệu có phải là mảng ha không 
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("mảng khong chua phần tử");
            return
        }
        let result = arr.filter((item) => {
            return item >= 10;
        }
        )
        console.log(result);

    } else {
        console.log("du liệu không hợp lệ ");

    }
}
filter(text1);
filter(text2);
filter(text3);

