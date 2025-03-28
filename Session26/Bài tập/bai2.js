let text1 = ["apple", "banana", "cat", "elephant", "dog"];
let text2 = [];
let text3 = ("sdvb");
function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mảng không chứa phần tử ");
            return;
        }
        let result = arr.filter(function length(a, b, c) {
            return a.length > 5
        })
        console.log(result);
    } else {
        console.log("Dữ liệu không hợp lệ");

    }
}
filter(text1);
filter(text2);
filter(text3);
