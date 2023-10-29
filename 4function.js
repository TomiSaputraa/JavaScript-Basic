// function jumlahVolumeKubus(a, b) {
//   var volumeA;
//   var volumeB;
//   var total;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   total = volumeA + volumeB;

//   return total;
// }
// // function akan di jalankan disini
// console.log(jumlahVolumeKubus(8, 3));

// 1. Parameter & argumen

// function tambah(a, b, c) {
//   // a dan b adalah parameter
//   return a + b + c;
// }

// console.log(tambah(2, 3, 4, 5)); // adalah argumen
// // setiap value dari argumen tetap disimpan kedalam array meskipun tidak di panggil

// 2.  Refactoring
// contoh refactoring code function hitung volume diatas
// function jumlahKubus(a, b) {
//   var total = a * a * a + b * b * b;

//   return total;
// }

// console.log(jumlahKubus(8, 3));

// 3.  Variable scope

// contoh function scope

// global scope / windows scope
// var a = 5;

// function test() {
//   // var b = 2;
//   // console.log(a); // contoh akses variable global tanpa koflik variable
//   // name conflict
//   var a = 4;
//   console.log(window.a); // akan work jika diakses hanya lewat browser
// }
// test();
// // console.log(b); // erorr

// 4. Rekursif

function cetakAngka(n) {
  if (n === 0) {
    // base case : digunakan agar rekursif berhenti
    return;
  }
  console.log(n);
  cetakAngka(n - 1); //function nya di panggil disini
}

cetakAngka(10);
