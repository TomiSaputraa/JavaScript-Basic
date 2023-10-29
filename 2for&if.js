// console.log("for");
var jmlangkot = 10;
var angkotOperasi = 6;
var noangkot = 1;

for (let noangkot = 1; noangkot <= jmlangkot; noangkot++) {
  if (noangkot <= angkotOperasi) {
    console.log("Angkot No. " + noangkot + " sedang beroperasi dengan baik");
  } else if (noangkot === 8) {
    console.log("Angkot No. " + noangkot + " sedang lembur");
  } else if (noangkot > angkotOperasi) {
    console.log("Angkot No. " + noangkot + " sedang tidak beroperasi");
  }
}

// while (noangkot <= angkotOperasi) {
//   console.log("Angkot No. " + noangkot + " beroperasi dengan baik");
//   noangkot++;
// }

// if (noangkot <= jmlangkot) {
//   console.log("sadjsad" + noangkot);
//   noangkot++;
// }

// for (noangkot = angkotOperasi + 1; noangkot <= jmlangkot; noangkot++) {
//   console.log("Angkot No. " + noangkot + " sedang tidak beroperasi");
// }
