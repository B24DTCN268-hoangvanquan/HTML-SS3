let studentList = [];

function addStudents() {
    let number = +prompt("Nhập số lượng sinh viên: ");
    for (let i = 0; i < number; i++) {
        let name = prompt(`Tên của sinh viên thứ ${i + 1}: `);
        studentList.push(name);
    }
}

function displayStudents() {
    if (studentList.length === 0) {
        console.log("Danh sách sinh viên trống.");
        return;
    }
    console.log("Danh sách sinh viên:");
    studentList.forEach((student, index) => {
        console.log(`${index + 1}. ${student}`);
    });
}
// function searchStudents() {
//     let name = prompt("nhập tên sin viên cần tìm kiếm ");
//     for (let i = 0; i < number; i++){
//         if (name == studentList[i]) {
            
//         } else {
//             console.log("Sinh viên không có trong danh sách");
            
//         }
//         return 
//     }
// }
function searchStudents() {
    let name = prompt("Nhập tên sinh viên cần tìm kiếm: ");
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].toLowerCase() === name.toLowerCase()) {
            console.log(`Tìm thấy sinh viên: ${studentList[i]}`);
            return;
           
        }
    }
        console.log("Sinh viên không có trong danh sách.");
    
}
function removeStudent() {
    let name = prompt("Nhập tên sinh viên cần xóa: ");
    let index = studentList.findIndex(student => student.toLowerCase() === name.toLowerCase());
    if (index !== -1) {
        studentList.splice(index, 1);
        console.log(`Đã xóa sinh viên: ${name}`);
    } else {
        console.log("Không tìm thấy sinh viên để xóa.");
    }
}
let choice;
do {
    console.log("\n---- MENU ----");
    console.log("1. Nhập danh sách sinh viên");
    console.log("2. Hiển thị danh sách sinh viên");
    console.log("3. Tìm sinh viên theo tên");
    console.log("4. Xóa sinh viên khỏi danh sách");
    console.log("5. Thoát");

    choice = +prompt("Nhập lựa chọn của bạn: ");

    switch (choice) {
        case 1:
            addStudents();
            break;
        case 2:
            displayStudents();
            break;
        case 3:
            searchStudent();
            break;
        case 4:
            removeStudent();
            break;
        case 5:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }
} while (choice !== 5);
