<!-- TABLE OF CONTENTS -->
<details>
  <summary>Daftar isi konten</summary>
  <ol>
    <li><a href="#1. Nilai-dan-tipe-data">Nilai dan tipe data</a></li>
    <li><a href="#2.-Operator">Operator</a></li>
    <li><a href="#3.-Variable">Variable</a></li>
    <li><a href="#4.-Control flow">Control Flow</a></li>
      <ul>
        <li><a href="##Pengulangan/Looping">Pengulangan/Looping</a></li>
        <li><a href="##pengkondisian/percabangan-:">pengkondisian/percabangan :</a></li>
      </ul>
    <li><a href="#function">Function</a></li>
    <li><a href="#array">Array</a></li>
    <li><a href="#object">Object</a></li>
  </ol>
</details>

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

### Tipe Data Angka :
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
  - `>` : lebih besar dari
  - < : lebih kecil dari
  - `>` = : lebih besar sama dengan
  - <= : lebih kecil sama dengan
- logika (&&, ||, !)
- Pengabungan string (+)
- ternary :
membutuhkan 3 buah operand
~~ contoh
``` javascript
function cekAngka(nilai) {
  return nilai % 2 === 0 ? 'Genap' : 'Ganjil';
}
```
- kondisional :
  (kondisi) ? true : false
- unary :
membutuhkan satu operand
- typeof : digunakan untuk mengetahui tipe data apa dari nilai nanti yang kita masukan kedalamnya
  typeof(operand)

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
- while:
  nilai awal
  while(kondisi terminasi) {
  aksi
  increment/decrement
  }
- do while

## pengkondisian/percabangan :

- if,else if, else
- switch

# 5. function
- parameter & argument : 
  argument adalah nilai yang benar-benar dikirimkan ke parameter
  jika parameter lebih sedikit dari argument, maka argument selebihnya akan diabaikan
  jika parameter lebih banyak dari argument, maka parameter kelebihan akan diisi dengan undifined

- Refactoring : Sebuah proses mengubah kode agar menjadi lebih 'baik' tanpa mengubah functionalitas nya

- Variable Scope :
  - block scope & function scope
  - javascript menggunakan function scope

- Rekursif :
  Sebuah fungsi yang memanggil dirisnya sendiri

-function declaration & expression :
  kelebihan declaration :
  - lebih fleksibel (dapat ditulis dimanapun) karena ada hoisting (deklrasi sebuah function pasti disimpan lebih dulu dalam memori)

contoh function declaration :
function namaFunction(a, b){
var total;
total = a + b

return total;
}

kelebihan expression :

- harus di definisikan terlebih dahulu sebelum dipanggil
- lebih powerfull :
  - sebagai closure
  - sebagai argumen untuk function lain
  - IIFE

contoh function expression :
var namaVar = function(a,b) {
var total;
total = a + b

return total;
}

namaVar(1,2);

# 6. Array

- Kumpulan key dan value
- Key adalah index dengan tipe integer dimulai dari 0
- Array pada JS sebagai object
- Elemen pada array boleh memiliki tipe data yang berbeda

pair :
[index] = menampilkan data di index berapa dalam array
length = melihat panjang array
join = menggabungkan seluruh isi array dan mengubah nya menjadi string
push = menambahkan Elemen baru di akhir array nya
pop = menghapus Elemen akhir dari array
unshift = menambahkan Elemen baru di Awal array nya
shift = menghapus Elemen awal dari array
slice = membelah bagian array menjadi array yang baru
splice = menyambung/menambal sebuah array
foreach = digunakan untuk mengubah elemen-elemen dalam array asal tanpa membuat array baru
map = digunakan untuk membuat array baru dengan hasil transformasi dari setiap elemen dalam array asal.
sort = untuk mengurutkan isi array
filter = menghasilkan banyak nilai
find = hanya menghasilkan satu hasil & tidak menghasilkan array sama seperti foreach

"for loop lebih umum digunakan ketika Anda memerlukan kontrol lebih besar atas iterasi
dan perlu mengakses indeks elemen, sedangkan forEach lebih cocok digunakan saat Anda
hanya perlu melakukan iterasi melalui elemen-elemen array tanpa perlu mengkhawatirkan
indeksnya."

# 7. Object

object sama dengan array, tapi tidak memiliki index tapi key : value

membuat object pada JS :

- object literal
- function declaration
- constructor function (keyword new)
- object.create

this = sebuah keyword spesial yang secara otomatis di definisikan pada setiap function


# 8. Pop up box

- alert
- prompt
- confirm
