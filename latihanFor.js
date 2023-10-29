var s = "";
var t = "";
var baris = 10;
for (var i = 1; i <= baris; i++) {
  // control spasi
  // for (var j = 1; j <= baris - i; j++) {
  //   s += " ";
  // }

  // control stars
  for (var j = 0; j < i; j++) {
    s += "*";
  }

  if (i !== baris) {
    s += "\n";
  }
}

for (var k = baris; k > 0; k--) {
  for (var h = baris; h >= baris - k; h--) {
    t += "*";
  }
  t += "\n";
}
console.log(s);
console.log(t);

// =========contoh dan hasil : =================

// 1.
// var baris = 10;
// var a = "";
// for (var i = 1; i <= baris; i++) {
//   // control spasi
//   for (var j = 1; j <= baris - i; j++) {
//     a += " ";
//   }

//   // control bintang
//   for (var k = 1; k <= 2 * i - 1; k++) {
//     a += "*";
//   }

//   // menghapus baris baru
//   if (i !== baris) {
//     a += "\n";
//   }
// }
// console.log(a);

// // segitiga bawah
// var b = "";
// for (var o = baris; o >= 0; o--) {
//   // control spasi
//   for (k = 0; k <= baris - o; k++) {
//     b += " ";
//   }

//   // control bintang
//   for (l = 1; l <= 2 * o - 3; l++) {
//     b += "*";
//   }
//   b += "\n";
// }
// console.log(b);

// hasil :
//          *
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************
//  *****************
//   ***************
//    *************
//     ***********
//      *********
//       *******
//        *****
//         ***
//          *

// 2.
// var a = "";
// var baris = 5;
// for (var i = 1; i <= baris; i++) {
//   // Loop pertama mengontrol jumlah spasi sebelum bintang
//   for (var j = 1; j <= baris - i; j++) {
//     a += " ";
//   }

//   // Loop kedua mengontrol jumlah bintang dalam setiap baris
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     a += "*";
//   }
//   a += "\n";
// }
// console.log(a);

// hasil :
//     *
//    ***
//   *****
//  *******
// *********
