

function findMin(arr) {
    if (Array.isArray(arr) == false) {
        console.log("dữ liệu không hợp lệ");
        return;
    }
    if (arr.length == 0) {
        console.log("mảng không chứa phần tử");
        return;
    }
    let minElement = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (minElement > arr[i]) {
            minElement = arr[i];
        }
    }
    console.log(111111, minElement);
    return minElement;



}

findMin([5,7,6,3,1,8,9,3]);

