<p align="right">☝</p>

# 1. Nilai dan tipe data

Beberapa Tipe data :
- number
- string
- boolean
- object
- function
- undifined
## Tipe data : 
### String :
digunakan untuk data tekstual menggunakan tanda :
- ""
- ''
- `` / tag template literals
  
Unicode yang bisa digunakan dalam string : https://en.wikipedia.org/wiki/List_of_Unicode_characters

### Boolean : 
truthy : yang menyimpan nilai true
- true
- bukan angka nol
- "String"
- object
- arrays
- functions

falsy : yang menyimpan nilai false
- false
- 0
- ""
- undifined
- null
- NaN

### Angka :
jangan pernah mengawali angka dengan 0(nol)
0 akan di anggap bilangan oktal
NaN(not a number)

angka tanpa desimal :
- 10, 1500, 12343
- akurat sampai 15 digit

angka dengan desimal :
- 3.14, 0.5, 100.0

eksponen :
- 123e5 / 12300000
- 1233-5 / 0.00123

~ Dan bilangan negatif

# 2. Operator

Binary :
- aritmatika (+,-,\*,/,%)
- penugasan (x += y / x = x + y)
- perbandingan :
  - == : sama dengan
  - != : tidak sama dengan
  - === : strict sama dengan(tidak hanya membandingkan nilai tapi juga tipe data)
  - !== : strict tidak sama dengan
  - `>=` : lebih besar dari
  - < : lebih kecil dari
  - `>` = : lebih besar sama dengan
  - <= : lebih kecil sama dengan
- logika (&&, ||, !)
- Pengabungan string (+)
- ternary :
membutuhkan 3 buah operand
    <details>
    <summary>contoh kode</summary>
      
    ```javascript
      function cekAngka(nilai) {
        return nilai % 2 === 0 ? 'Genap' : 'Ganjil';
      }
    ```
    </details>
- kondisional :
  (kondisi) ? true : false
- unary :
membutuhkan satu operand
- typeof : digunakan untuk mengetahui tipe data apa dari nilai nanti yang kita masukan kedalamnya
  typeof(operand)
  <details>
    <summary>Contoh kode</summary>
    
    ```javascript
    // Contoh 1: Menentukan tipe data dari suatu variabel
    let angka = 10;
    let teks = "Hello, World!";
    let booleanValue = true;
    let arrayValue = [1, 2, 3];
    let objekValue = { key: 'value' };
    
    console.log(typeof angka);         // Output: number
    console.log(typeof teks);          // Output: string
    console.log(typeof booleanValue);  // Output: boolean
    console.log(typeof arrayValue);    // Output: object (array dianggap sebagai objek dalam JavaScript)
    console.log(typeof objekValue);    // Output: object
    
    // Contoh 2: Menentukan tipe data dari suatu ekspresi
    console.log(typeof 42);            // Output: number
    console.log(typeof "Hello");       // Output: string
    console.log(typeof true);          // Output: boolean
    console.log(typeof [1, 2, 3]);      // Output: object
    console.log(typeof { key: 'value' });// Output: object
    ```
  </details>

# 3. Variable
var = x; // deklrasi & inisialisasi
x = 20; // assigment(membuat nilai baru)

Deklarasi variable :
- var
- let = bisa di assigment nilai nya
- const = Tidak bisa di assigment 

# 4. Control flow
Control flow adalah konsep dalam pemrograman yang mengacu pada cara eksekusi program berpindah dari satu bagian ke bagian lain berdasarkan keputusan tertentu. 

## pengulangan/looping :

- for
  <details>
    <summary>contoh kode</summary>
    
    ```javascript
    // Contoh: Menampilkan elemen-elemen array menggunakan loop for
    const fruits = ['Apel', 'Jeruk', 'Pisang', 'Mangga', 'Anggur'];
    
    // Menampilkan elemen array satu per satu
    console.log("Contoh 1:");
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
    // Output 1:
    // Contoh 1:
    // Apel
    // Jeruk
    // Pisang
    // Mangga
    // Anggur
    
    // Contoh: Menjumlahkan elemen-elemen array
    const numbers = [1, 2, 3, 4, 5];
    let total = 0;
    
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    
    console.log("\nContoh 2:");
    console.log("Total: " + total);
    // Output :
    // Contoh 2:
    // Total: 15
    
    // Contoh: Mencari nilai maksimum dalam array
    const scores = [85, 90, 92, 88, 95];
    let maxScore = scores[0]; // Menggunakan nilai awal sebagai pembanding
    
    for (let i = 1; i < scores.length; i++) {
      if (scores[i] > maxScore) {
        maxScore = scores[i];
      }
    }
    
    console.log("\nContoh 3:");
    console.log("Nilai Maksimum: " + maxScore);
    // Output :
    // Contoh 3:
    // Nilai Maksimum: 95
    ```
  </details>
- while:
  <details>
    <summary>contoh kode</summary>
    
    ```javascript
    // Contoh 1: Menampilkan angka 1 hingga 5 menggunakan while
    let counter = 1;
    
    while (counter <= 5) {
      console.log(counter);
      counter++;
    }
    // output :
    // 1
    // 2
    // 3
    // 4
    // 5
    
    // Contoh 2: Menjumlahkan angka dari 1 hingga 5 menggunakan while
    let total = 0;
    let index = 1;
    
    while (index <= 5) {
      total += index;
      index++;
    }
    
    console.log("Total: " + total);
    // output :
    // Total: 15
    ```
  </details>
- do while
  <details>
  <summary>Contoh kode</summary>
    
    ```javascript
    // Contoh 1: Menampilkan angka 1 hingga 5 menggunakan do...while
    let counterDo = 1;
    
    do {
      console.log(counterDo);
      counterDo++;
    } while (counterDo <= 5);
    
    // Contoh 2: Menjumlahkan angka dari 1 hingga 5 menggunakan do...while
    let totalDo = 0;
    let indexDo = 1;
    
    do {
      totalDo += indexDo;
      indexDo++;
    } while (indexDo <= 5);
    
    console.log("Total: " + totalDo);
    ```
  </details>

## pengkondisian/percabangan :

- if,else if, else
  <details>
  <summary>Klik untuk melihat contoh kode</summary>
    
  ```javascript
  let nilai = 80;
  if (nilai >= 70) {
    console.log('Lulus');
  } else {
    console.log('Tidak Lulus');
  }
  
</details>

- switch
  <details>
  <summary>Klik untuk melihat contoh kode</summary>
    
  ```javascript
  let hari = "Senin";
  switch (hari) {
    case "Senin":
      console.log("Hari kerja, semangat!");
      break;
    case "Selasa":
    case "Rabu":
    case "Kamis":
      console.log("Masih hari kerja, tetap semangat!");
      break;
    case "Jumat":
      console.log("Hari terakhir kerja, woohoo!");
      break;
    case "Sabtu":
    case "Minggu":
      console.log("Hari libur, nikmati waktu Anda!");
      break;
    default:
      console.log("Hari tidak valid.");
    }
  ```
  </details>

# 5. function

### Function declaration & expression :


#### 1. Declaration :
  kelebihan :
  - lebih fleksibel (dapat ditulis dimanapun) karena ada hoisting (deklrasi sebuah function pasti disimpan lebih dulu dalam memori)

  contoh :
  <details>
  <summary>contoh kode</summary>

  ```javascript
  function namaFunction(a, b){
  var total;
  total = a + b

  return total;
  }
  ```
  </details>

#### 2. Expression :
- kelebihan expression :
  - harus di definisikan terlebih dahulu sebelum dipanggil
  - lebih powerfull :
    - sebagai closure
    - sebagai argumen untuk function lain
    - IIFE

- contoh :
  <details>
  <summary>contoh kode</summary>

  ```javascript
  var namaVar = function(a,b) {
  var total;
  total = a + b

  return total;
  }

  namaVar(1,2);
  ```
  </details>
  
- parameter & argument :
   
  argument adalah nilai yang benar-benar dikirimkan ke parameter
  jika parameter lebih sedikit dari argument, maka argument selebihnya akan diabaikan
  jika parameter lebih banyak dari argument, maka parameter kelebihan akan diisi dengan undifined

- Refactoring : Sebuah proses mengubah kode agar menjadi lebih 'baik' tanpa mengubah functionalitas nya
  <details>
    <summary>Contoh kode</summary>

    ```javascript
    // Sebelum refactoring:
    function hitungLuasPersegiPanjang(panjang, lebar) {
      const hasil = panjang * lebar;
      return hasil;
    }
    
    function sapaPengguna(nama) {
      console.log("Halo, " + nama + "!");
    }
    
    function hitungVolumeBalok(panjang, lebar, tinggi) {
      const luasAlas = panjang * lebar;
      const hasil = luasAlas * tinggi;
      return hasil;
    }
    // Setelah refactoring:
    function hitungLuasPersegiPanjang(panjang, lebar) {
      return panjang * lebar;
    }
    
    function sapaPengguna(nama) {
      console.log(`Halo, ${nama}!`);
    }
    
    function hitungVolumeBalok(panjang, lebar, tinggi) {
      return hitungLuasPersegiPanjang(panjang, lebar) * tinggi;
    }
    ```
  </details>

- Variable Scope :
  - block scope & function scope
  - javascript menggunakan function scope
  
  contoh : 
  <details>
  <summary>contoh kode</summary>

  ```javascript
  // Global Scope:
  // Variabel yang dideklarasikan di luar fungsi atau blok kode menjadi variabel global dan dapat diakses di seluruh program.

  // Global scope
  let globalVar = "Ini adalah variabel global";

  function fungsiGlobalScope() {
    console.log(globalVar); // Variabel global dapat diakses di dalam fungsi
  }

  fungsiGlobalScope();
  console.log(globalVar); // Variabel global dapat diakses di luar fungsi
  
  // Local Scope:
  // Variabel yang dideklarasikan di dalam fungsi atau blok kode hanya dapat diakses di dalam fungsi atau blok tersebut.

  function fungsiLocalScope() {
    // Local scope
    let localVar = "Ini adalah variabel lokal";
    console.log(localVar); // Variabel lokal dapat diakses di dalam fungsi
  }

  fungsiLocalScope();
  // console.log(localVar); // Ini akan menyebabkan ReferenceError karena variabel lokal tidak dapat diakses di luar fungsi
  Variabel localVar hanya dapat diakses di dalam fungsi fungsiLocalScope, dan mencoba mengaksesnya di luar fungsi akan menyebabkan ReferenceError.

  // Block Scope (ES6 onward):
  // Dengan pengenalan let dan const pada ES6, kita juga memiliki block scope di dalam blok kode seperti loop atau kondisi.

  if (true) {
    // Block scope
    let blockVar = "Ini adalah variabel dalam blok";
    console.log(blockVar); // Variabel dalam blok dapat diakses di dalam blok
  }

  // console.log(blockVar); // Ini akan menyebabkan ReferenceError karena variabel dalam blok tidak dapat diakses di luar blok
  ```
  </details>

- Rekursif :
  Sebuah fungsi yang memanggil dirisnya sendiri
  
  contoh : 
  <details>
  <summary>contoh kode</summary>

  ```javascript
  function faktorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Basis rekursi: 0! dan 1! adalah 1
  } else {
    return n * faktorial(n - 1); // Panggil diri sendiri dengan nilai yang lebih kecil
    }
  }

  // Contoh penggunaan fungsi faktorial
  console.log(faktorial(5)); // Output: 120 (karena 5! = 5 * 4 * 3 * 2 * 1)

  ```
  </details>

# 6. Array

- Kumpulan key dan value
- Key adalah index dengan tipe integer dimulai dari 0
- Array pada JS sebagai object
- Elemen pada array boleh memiliki tipe data yang berbeda

pair :
- [index] = menampilkan data di index berapa dalam array
- length = melihat panjang array
- join = menggabungkan seluruh isi array dan mengubah nya menjadi string
- push = menambahkan Elemen baru di akhir array nya
- pop = menghapus Elemen akhir dari array
- unshift = menambahkan Elemen baru di Awal array nya
- shift = menghapus Elemen awal dari array
- slice = membelah bagian array menjadi array yang baru
- splice = menyambung/menambal sebuah array
- foreach = digunakan untuk mengubah elemen-elemen dalam array asal tanpa membuat array baru
- map = digunakan untuk membuat array baru dengan hasil transformasi dari setiap elemen dalam array asal.
- sort = untuk mengurutkan isi array
- filter = menghasilkan banyak nilai
- find = hanya menghasilkan satu hasil & tidak menghasilkan array sama seperti foreach

### For & forEach dalam array
for loop lebih umum digunakan ketika Anda memerlukan kontrol lebih besar atas iterasi
dan perlu mengakses indeks elemen, sedangkan forEach lebih cocok digunakan saat Anda
hanya perlu melakukan iterasi melalui elemen-elemen array tanpa perlu mengkhawatirkan
indeksnya.

# 7. Object

object sama dengan array, tapi tidak memiliki index tapi key : value

membuat object pada JS :

- object literal
  <details>
  <summary>contoh kode</summary>

  ```
  // Object literal untuk merepresentasikan seorang siswa
  let siswa = {
    nama: "John Doe",
    umur: 18,
    kelas: "12A",
    nilai: {
      matematika: 90,
      bahasaInggris: 85,
      fisika: 92
    },
    sapa: function() {
      console.log("Halo, nama saya " + this.nama + "!");
    }
  };

  // Mengakses properti objek
  console.log("Nama: " + siswa.nama);
  console.log("Umur: " + siswa.umur);
  console.log("Kelas: " + siswa.kelas);
  console.log("Nilai Matematika: " + siswa.nilai.matematika);

  // Memanggil metode objek
  siswa.sapa();
    
  ```
  </details>
- function declaration
  <details>
  <summary>contoh kode</summary>

  ```javascript
  // Function Declaration dengan properti dan metode
  function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  }
  
  const person2 = createPerson('Jane', 30);
  ```
  </details>
- constructor function (keyword new)
  <details>
  <summary>contoh kode</summary>

  ```javascript
  // Object Constructor Function untuk merepresentasikan seorang siswa
  function Siswa(nama, umur, kelas) {
    // Properti
    this.nama = nama;
    this.umur = umur;
    this.kelas = kelas;

    // Metode
    this.sapa = function() {
      console.log("Halo, nama saya " + this.nama + "!");
    };
  }

  // Membuat objek menggunakan constructor function
  let siswa1 = new Siswa("John Doe", 18, "12A");
  let siswa2 = new Siswa("Jane Doe", 17, "11B");

  // Mengakses properti objek
  console.log("Nama Siswa 1: " + siswa1.nama);
  console.log("Umur Siswa 2: " + siswa2.umur);

  // Memanggil metode objek
  siswa1.sapa();
  siswa2.sapa();
  ```
  </details>
- object.create
  <details>
  <summary>contoh kode</summary>

  ```javascript
  // Objek prototipe
  let siswaPrototipe = {
    sapa: function() {
      console.log("Halo, nama saya " + this.nama + "!");
    }
  };

  // Membuat objek siswa menggunakan Object.create
  let siswa1 = Object.create(siswaPrototipe);
  siswa1.nama = "John Doe";
  siswa1.umur = 18;
  siswa1.kelas = "12A";

  let siswa2 = Object.create(siswaPrototipe);
  siswa2.nama = "Jane Doe";
  siswa2.umur = 17;
  siswa2.kelas = "11B";

  // Mengakses properti objek
  console.log("Nama Siswa 1: " + siswa1.nama);
  console.log("Umur Siswa 2: " + siswa2.umur);

  // Memanggil metode objek
  siswa1.sapa();
  siswa2.sapa();
  ```
  </details>

this = sebuah keyword spesial yang secara otomatis di definisikan pada setiap function


# 8. Pop up box

- alert
- prompt
- confirm
