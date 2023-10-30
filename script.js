// contoh program sederhana angkot

// tempat penumpang
var penumpang = [];

// function expression
var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length === 0) {
    penumpang.unshift(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i <= penumpang.length; i++) {
      // jika ada kursi kosong tambahkan penumpang pada kursi tersebut
      if (penumpang[i] === undefined) {
        // penumpang[i] = namaPenumpang;
        penumpang.push(namaPenumpang);
        return penumpang;
      }
      //   jika ada nama yang sama tampilkan error
      if (namaPenumpang == penumpang[i]) {
        console.log("nama sudah ada");
        return penumpang;
      }

      //   jika seluruh kursi terisi
      if (penumpang.length == 15) {
        console.log("Semua kursi telah penuh");
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot kosong");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] === namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      }

      if (namaPenumpang !== penumpang[i]) {
        console.log("Tidak ada nama penumpang tersebut");
        return penumpang;
      }
    }
  }
};
