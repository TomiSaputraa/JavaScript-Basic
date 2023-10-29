function jumlahVolumeKubus(a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;

  return total;
}
// function akan di jalankan disini
console.log(jumlahVolumeKubus(8, 3));
