// let check = false;

// function active() {
//     if (check) {
//         document.getElementById("button").innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
//         document.getElementById("input").type = "password";
//         check = false;
//     } else {
//         document.getElementById("button").innerHTML = `<i class="fa-solid fa-eye"></i>`;
//         document.getElementById("input").type = "text";
//         check = true;
//     }
// }

let check = false;

function active() {
    let button = document.getElementById("button");
    let input = document.getElementById("input");

    if (check) {
        button.innerHTML = `<i class="fa-solid fa-eye"></i>`;
        input.type = "password";
    } else {
        button.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
        input.type = "text";
    }

    check = !check;
}
