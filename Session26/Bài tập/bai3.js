let text1 = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", " @out.com"];
let text2 = [];
let text3 = ("sdvb");

function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mảng không chứa phần tử nào ");

        }
        let result = arr.filter((item) => {
            return typeof item === "string" && item.includes("@") && !item.includes(" ")
        })
        if (result.length > 0) {
            console.log(result);
        }

    } else {
        console.log("Dữ liệu không hợp lệ");
    }

}


filter(text1);
filter(text2);
filter(text3);


