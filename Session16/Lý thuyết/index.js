// let text = prompt("Mời bạn nhập giá trị ");
// console.log("Giá tri người dùng vừa nhập",text);

// console.log("1");
// console.log("2");

/* viết chương trình cho người dùng nhập vào hai số bất kì 
tinh tổng 2 số đo .
1. khi cho người dùng nhập phải dùng prompt
2. tạo biến để lấy giá trị người dùng nhập 
*/
/*
  var : có từ khi js ra đời (1995)
  let , const (ra đời phiên bản ES6_2015)
  */

// let numberA = +prompt("Mời bạn nhập vào số thứ nhất ");
// let numberB = +prompt("Mời bạn nhập vào số thứ hai ");
// let sum = numberA + numberB;
// console.log("giá trị 2 số vừa nhập là :", sum);

/*
Viết chương trình cho người dùng nhập điểm ba môn toán, lý, hóa.
 Sau đó tính tổng trung bình ba môn.
   */
let numberA = +prompt("điểm toán");
let numberB = +prompt("điểm lý ");
let numberC = +prompt("điểm hóa ");

let sum = (numberA + numberB + numberC) / 3;
console.log("điểm trung bình :", sum);