let input = prompt("Nhập vào một mảng số nguyên (cách nhau bởi dấu cách):");

let arr = input.split(" ").map(Number); 

let result = arr.filter(num => num >= 10); 

if (result.length > 0) {

    document.write(result.join(" "));
} else {
    document.write("Không có số nào lớn hơn 10.");
}


