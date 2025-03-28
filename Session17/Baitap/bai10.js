let input = +prompt("nhập số để kiểm tra:");
let number = Math.sqrt(input);
Number.isInteger(number) ? alert(`${input}là số chính phương`) : alert(`${input} không là số chính phương`);