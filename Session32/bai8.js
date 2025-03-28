let jobs = [
    
];
let reFlag = -1;

function renderList()
{
    let mess = "";
    for (let i = 0; i < jobs.length; i++)
    {
        mess += `<li>${jobs[i].name} <button onclick="updateJob(${jobs[i].id})">Sửa</button> <button onclick="removeJob(${jobs[i].id})">Xóa</button></li>`;
    }
    document.getElementById("jobs").innerHTML = mess;
}

function addJob()
{
    if (reFlag !== -1)
    {
        jobs[redFlag].name = document.getElementById("input").value;
        renderList();
        document.getElementById("input").value = "";
        document.getElementsByClassName("btn")[0].innerHTML = "Thêm";
        reFlag = -1;
    } else
    {
        let input = document.getElementById("input").value;
        if (input && input[0] !== " ")
        {
            let id;
            if (jobs.length === 0)
            {
                id = 1;
            } else
            {
                id = jobs[jobs.length - 1].id + 1;
            }
            jobs.push({ id, name: input });
            document.getElementById("input").value = "";
            renderList();
        } else
        {
            document.getElementById("input").value = "";
        }
    }
}
function removeJob(id)
{
    let flag = -1;
    for (let i = 0; i < jobs.length; i++)
    {
        if (jobs[i].id === id)
        {
            flag = i;
            break;
        }
    }
    if (flag !== -1)
    {
        jobs.splice(flag, 1);
    } else
    {
        alert("Error!");
    }
    renderList();
}
function updateJob(id)
{
    let flag = -1;
    for (let i = 0; i < jobs.length; i++)
    {
        if (jobs[i].id === id)
        {
            flag = i;
            break;
        }
    }
    if (flag !== -1)
    {
        document.getElementById("input").value = jobs[flag].name;
        document.getElementsByClassName("btn")[0].innerHTML = "Sửa";
        reFlag = flag;
    } else
    {
        alert("Error!");
    }
    renderList();
}
renderList();