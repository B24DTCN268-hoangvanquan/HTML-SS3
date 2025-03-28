
let d1 = prompt("");
let d2 = prompt("");

const date1 = new Date(d1);
const date2 = new Date(d2);

const timeDiff = Math.abs(date2 - date1);
const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
alert(`độ lệch là ${dayDiff} ngày`);