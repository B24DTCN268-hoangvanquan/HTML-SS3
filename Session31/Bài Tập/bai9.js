let jobs = [
    {
        id: 1,
        name: "học dom",
    },
    {
        id: 2,
        name: "lam bt",
    }
];
let flag = -1;
function renderJobs()
{
    let str = "";
    for (let i = 0; i < jobs.length; i++)
    {
        str += `<li> ${jobs[i].name} 
        <button onclick=updateJob (${jobs[i].id})>Sửa</button> <buton onclick=deleteJob(${jobs[i].id}) >Xóa</buton> </li>`
    }
    document.getElementsByClassName("jobs")[0].innerHTML = str;
    console.log(str);

}
renderJobs();
// Khai báo hàm thêm công việc 
function addJobs(){
    let name = document.getElementById("job").value;
    if (flag != -1)
    {
        let newUpdate = {
            id: jobs[flag].id,
            name: name
        }
        jobs.splice(flag, 1, newUpdate);
        document.getElementsByClassName("btn")[0].innerHTML = "thêm"
        document.getElementById("job").value = "";
        renderJobs();

        return;
    }
    console.log("name", name);
    // tạo đôi tượng 
    let id;
    if (jobs.length == 0)
    {
        id = 1;
    } else
    {
        // id = jobs.[jobs]
    }
}
// khai báo hàm xóa
function deleteJob(id)
{
    console.log("gọi hàm xoa", id);
    let index = jobs.findIndex(item => item.id == id);
    jobs.splice(index, 1);
    renderJobs();
}
function updateJob(id)
{
    console.log("gọi hàm sửa ", id);
    let item = jobs.find(item => item.id == id);
    console.log("item", item);
    let index = jobs.findIndex(item => item.id == id);
    document.getElementById("job").value = item.name;
    document.getElementsByClassName("btn")[0].innerHTML = "sửa";
    flag = 1;
}
