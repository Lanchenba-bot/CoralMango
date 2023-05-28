const a = [1, 3, 5, 2, 4];
const result1 = a.filter((_,index) => index % 2 === 0);
const result2 = a.map(num => num * num);
const result3 = a.filter((_,index) => index % 2 === 0).map(num => num * num);

console.log(result1, result2, result3);