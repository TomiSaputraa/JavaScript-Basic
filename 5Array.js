// 1. manipulasi array

// - menambah array
// var myArr = [];
// myArr[0] = "tomi";
// myArr[1] = "saputra";

// console.log(myArr);

// - menghapus array manual
// var myArr = ["tomi", "saputra"];
// myArr[1] = undefined;

// console.log(myArr);

// - menampilkan isi array
// var myArr = ["tomi", "saputra"];

// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i] + " Dan " + i);
// }

// - Method pada array
// 1. join
var arr = ["tomi", "saputra"];
// console.log(arr.join(" "));

// 2. push & pop
// arr.push("Tomas", "dasdsa");
// arr.pop();
// console.log(arr.join(" "));

// 3. unshift & shift
// arr.unshift("Dodas");
arr.shift();
console.log(arr.join(" "));
