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

// dengan this
var mhs2 = { a: "a", b: "b" };
mhs2.halo = function () {
  console.log(this);
  console.log("this dalam object literal");
};

// mhs2.halo();

// 2. function declaration

function buatObjectMhs(nama, nim, jurusan) {
  console.log("ini function declaration");
  console.log(this);
  var mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.jurusan = jurusan;
  return mhs;
}

// this.buatObjectMhs(); // this pada fd

// var mhs3 = buatObjectMhs("anto", "8281923", "teknik listrik");
// var mhs4 = buatObjectMhs("andini", "89d99d281923", "teknik listrik");
// console.log(mhs3);
// console.log(mhs4);

// ini lebih sering digunakan
// 3. constructor
function Mahasiswa(nama, nim, jurusan) {
  console.log(this);
  this.nama = nama;
  this.nim = nim;
  this.jurusan = jurusan;
}
// new digunakan agar tidak menganggap function declaration
var mhs4 = new Mahasiswa("tomo", "89493", "teknik industri");
var obj1 = new Mahasiswa("adi", "dadada", 232);
var obj2 = new Mahasiswa();
console.log(obj1);
// console.log(mhs4);x

// 4. This
// this pada function declaration =  mengembalikan object global
// this pada object literal = mengembalikan object yang bersangkutan
// this pada constructor = mengembalikan object yang baru dibuat
function Ibu(nama) {
  this.nama = nama;
}

var ibu = new Ibu("inar");
console.log(ibu);
