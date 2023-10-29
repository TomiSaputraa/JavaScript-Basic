var angka = parseInt(prompt("masukan angka anda :")); // parse atau dirubah ke integer

// switch (angka) {
//   case 1:
//     alert("Anda memasukan angka 1");
//     break; // agar keluar dari switch
//   case 2:
//     alert("anda memasukan angka 2");
//     break;

//   default:
//     alert("angka yang anda masukan tidak terdaftar");
//     break;
// }

// contoh pengelompokan value
switch (angka) {
  case 1:
  case 2:
  case 3:
    alert("Anda memasukan angka 1-3");
    break;

  default:
    alert("masukan angka 1-3");
    break;
}
