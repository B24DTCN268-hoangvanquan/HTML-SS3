const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name: "Nguyễn Văn A", position: "Developer" },
        { name: "Nguyễn Văn B", position: "Tester" },
        { name: "Hoàng Nam C", position: "Manager" }
    ]
};
console.log(`Tên công ty: ${company.name}`);
console.log("Danh sách nhân viên:");
for (let i = 0; i < company.employees.length; i++) {
    console.log(company.employees[i].name);
}