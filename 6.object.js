// var mhs = {
//   nama: "Tomi saputra",
//   umur: 32,
//   ipk: [3.4, 3.2, 3.4],
//   alamat: {
//     jalan: "jln ahmad yani",
//     kota: "Bangko",
//     provinsi: "Jambi",
//   },
// };

// cara akses
// console.log(mhs.alamat.jalan); // bisa seperti ini
// console.log(mhs["alamat"]["jalan"]); // atau ini

// 1. object literal

var mhs = {
  nama: "Tomi saputra",
  email: "tomi@gmail.com",
  jurusan: "Teknik informatika",
};
var mhs2 = {
  nama: "Andi saputra",
  email: "Andi@gmail.com",
  jurusan: "Teknik informatika",
};

// 2. function declaration

function buatObjectMhs(nama, nim, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMhs("anto", "8281923", "teknik listrik");
var mhs4 = buatObjectMhs("andini", "89d99d281923", "teknik listrik");
// console.log(mhs3);
// console.log(mhs4);

// ini lebih sering digunakan
// 3. constructor
function Mahasiswa(nama, nim, jurusan) {
  this.nama = nama;
  this.nim = nim;
  this.jurusan = jurusan;
}
// new digunakan agar tidak menganggap function declaration
var mhs4 = new Mahasiswa("tomo", "89493", "teknik industri");
console.log(mhs4);
