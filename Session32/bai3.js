// let arrayLession = ["toán", "lý", "hóa"];
// function renderLession(){
//     let stringLession = "";
//     for (let i = 0; i < arrayLession.length; i++)
//     {
//         stringLession+=`,<li>${arraylength[i]}</li>`
//     }
//     let listItem = document.getElementById("listItem");
//     listItem.innerHTML = stringLession;
// }
// function addLession(){
//     let textInput = document.getElementById("inputText").value.trim();
//     !textInput ? alert("không tồn tại ") : "";
//     arrayLession.push(textInput);
//     renderLession();
//     document.getElementById("inputText").value = "";
// }

let subjects = [
    { name: "toan" },
    { name: "ly" },
    { name: "hoa" },

];

function addSubject()
{
    let input = document.getElementById("input").value.trim();
    if (input && input[0] !== " ")
    {
        subjects.push({ name: input });
        showSubject()
        document.getElementById("input").value = "";
    } else
    {
        alert("Tên môn học không được để trống!");
    }
}
function showSubject()
{
    let mess = "";
    for (let i = 0; i < subjects.length; i++)
    {
        mess += `<li>${subjects[i].name}</li>`;
    }
    document.getElementById("subjectsGuiList").innerHTML = mess;

}

showSubject()