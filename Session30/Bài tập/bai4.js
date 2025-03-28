let courses = [];
let users = [];

function addCourse() {
    let id = prompt("Nhập ID khóa học:");
    let name = prompt("Nhập tên khóa học:");
    let instructor = prompt("Nhập tên giảng viên:");
    
    if (courses.find(course => course.id === id)) {
        console.log("ID khóa học đã tồn tại!");
        return;
    }
    
    courses.push({ id, name, instructor, students: [] });
    console.log(` Đã thêm khóa học: ${name}`);
}

function findCourse() {
    let keyword = prompt("Nhập tên khóa học cần tìm:");
    let foundCourses = courses.filter(course => course.name.toLowerCase().includes(keyword.toLowerCase()));

    if (foundCourses.length > 0) {
        console.table(foundCourses);
    } else {
        console.log(" Không tìm thấy khóa học!");
    }
}

function deleteCourse() {
    let courseId = prompt("Nhập ID khóa học cần xóa:");
    let index = courses.findIndex(course => course.id === courseId);

    if (index === -1) {
        console.log(" Không tìm thấy khóa học!");
        return;
    }
    users.forEach(user => {
        user.registeredCourses = user.registeredCourses.filter(course => course.id !== courseId);
    });

    courses.splice(index, 1);
    console.log(` Đã xóa khóa học có ID: ${courseId}`);
}

function addUser() {
    let id = prompt("Nhập ID người dùng:");
    let name = prompt("Nhập tên người dùng:");

    if (users.find(user => user.id === id)) {
        console.log("ID người dùng đã tồn tại!");
        return;
    }

    users.push({ id, name, registeredCourses: [] });
    console.log(` Đã thêm người dùng: ${name}`);
}

function registerCourse() {
    let userId = prompt("Nhập ID người dùng:");
    let user = users.find(user => user.id === userId);

    if (!user) {
        console.log(" Không tìm thấy người dùng!");
        return;
    }

    let courseId = prompt("Nhập ID khóa học muốn đăng ký:");
    let course = courses.find(course => course.id === courseId);

    if (!course) {
        console.log(" Không tìm thấy khóa học!");
        return;
    }

    if (user.registeredCourses.some(c => c.id === courseId)) {
        console.log("Người dùng đã đăng ký khóa học này!");
        return;
    }

    user.registeredCourses.push(course);
    course.students.push(user);
    console.log(` ${user.name} đã đăng ký khóa học: ${course.name}`);
}

function unregisterCourse() {
    let userId = prompt("Nhập ID người dùng:");
    let user = users.find(user => user.id === userId);

    if (!user) {
        console.log(" Không tìm thấy người dùng!");
        return;
    }

    let courseId = prompt("Nhập ID khóa học muốn hủy:");
    let courseIndex = user.registeredCourses.findIndex(course => course.id === courseId);

    if (courseIndex === -1) {
        console.log("Người dùng chưa đăng ký khóa học này!");
        return;
    }

    
    user.registeredCourses.splice(courseIndex, 1);

    
    let course = courses.find(course => course.id === courseId);
    course.students = course.students.filter(student => student.id !== userId);

    console.log(`${user.name} đã hủy đăng ký khóa học: ${course.name}`);
}

function showUserCourses() { 
    let userId = prompt("Nhập ID người dùng:");
    let user = users.find(user => user.id === userId);

    if (!user) {
        console.log("Không tìm thấy người dùng!");
        return;
    }

    if (user.registeredCourses.length === 0) {
        console.log(`${user.name} chưa đăng ký khóa học nào.`);
    } else {
        console.log(`Danh sách khóa học của ${user.name}:`);
        console.table(user.registeredCourses);
    }
}

let choice;
do {
    choice = prompt(`
           Quản lý khóa học và đăng ký:
        1. Thêm khóa học
        2. Tìm kiếm khóa học
        3. Xóa khóa học
        4. Thêm người dùng
        5. Đăng ký khóa học
        6. Hủy đăng ký khóa học
        7. Hiển thị danh sách khóa học của người dùng
        8. Thoát
    `);

    switch (parseInt(choice)) {
        case 1:
            addCourse();
            break;
        case 2:
            findCourse();
            break;
        case 3:
            deleteCourse();
            break;
        case 4:
            addUser();
            break;
        case 5:
            registerCourse();
            break;
        case 6:
            unregisterCourse();
            break;
        case 7:
            showUserCourses();
            break;
        case 8:
            console.log(" Thoát chương trình.");
            break;
        default:
            console.log(" Lựa chọn không hợp lệ!");
    }
} while (choice != 8);

