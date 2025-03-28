let max = prompt("Số đầu ");
let min = prompt("Số cuối ");
let random = Math.floor(Math.random() * (max - min)) + min;
alert(`${random}`);