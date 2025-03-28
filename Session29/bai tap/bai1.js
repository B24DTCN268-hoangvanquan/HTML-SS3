

let contacts = [];
let choice;
function addContact() {
    let idContact = +prompt("ID:");
    let nameContact = prompt("Name:");
    let emailContact = prompt("Email:");
    let phoneContact = prompt("Phone:");
    contacts.push({
        id: idContact,
        name: nameContact,
        email: emailContact,
        phone: phoneContact
    });

}
function showContacts() {
    if (contacts.length >= 1) {
        let message = "Danh sach doi tuong\n";
        for (let i = 0; i < contacts.length; i++) {
            message += `ID: ${contacts[i].id} - Name: ${contacts[i].name} - Email: ${contacts[i].email} - Phone: ${contacts[i].phone}\n`;
        }
        alert(message);
    } else {
        alert("Mang rong");
    }
}
function findContactWithIphone() {
    if (contacts.length >= 1) {
        let flag = -1;
        let input = prompt("Nhap so dien thoai contact can xem thong tin:");
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].phone === input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            let message = "Thong tin cua doi tuong qua so dien thoai:\n";
            message += `ID: ${contacts[flag].id} - Name: ${contacts[flag].name} - Email: ${contacts[flag].email} - Phone: ${contacts[flag].phone}`;
            alert(message);
        } else {
            alert("Khong tim thay doi qua so dien thoai nay");
        }

    } else {
        alert("Mang rong");
    }
}
function updateContactWithID() {
    if (contacts.length >= 1) {
        let flag = -1;
        let input = +prompt("Nhap id contact can cap nhap thong tin:");
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].id === input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            contacts[flag].name = prompt("Nhap ten moi:");
            contacts[flag].email = prompt("Nhap email moi:");
            contacts[flag].phone = prompt("Nhap so dien thoai moi:");
            alert("Da update thanh cong");
        } else {
            alert("Khong tim thay contact qua so id nay");
        }

    } else {
        alert("Mang rong");
    }
}
function replaceContact() {
    if (contacts.length >= 1) {
        let flag = -1;
        let input = +prompt("Nhap id contact can xoa:");
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].id === input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            contacts.splice(flag, 1);
            alert("Da xoa thanh cong");
        } else {
            alert("Khong tim thay contact qua so id nay");
        }

    } else {
        alert("Mang rong");
    }
}
do {
    choice = +prompt("MENU\n1. Thêm đối tượng\n2. Hiển thị danh sách\n3. Tìm kiếm thông tin theo số điện thoại\n4. Cập nhật(name, email, phone) theo id\n5. Xóa một đối tượng\n6. Thoát");
    switch (choice) {
        case 1:
            break;
        case 2:
            showContacts();
            break;
        case 3:
            findContactWithIphone();
            break;
        case 4:
            updateContactWithID();
            break;
        case 5:
            replaceContact();
            break;
        case 6:
            alert("Thoat");
            break;
        default:
            alert("Lua chon khong hop le");
    }
} while (choice !== 6);