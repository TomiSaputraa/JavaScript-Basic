# Nilai dan tipe data :

Tipe data :

- number
- string
- boolean
- object
- function
- undifined

# Angka :

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

dan bilangan negatif

# Operator aritmatika :

binary :

- aritmatika (+,-,\*,/,%)
- penugasan (x += y / x = x + y)
- perbandingan :
  - == : sama dengan
  - != : tidak sama dengan
  - === : strict sama dengan(tidak hanya membandingkan nilai tapi juga tipe data)
  - !== : strict tidak sama dengan
  - > : lebih besar dari
  - < : lebih kecil dari
  - > = : lebih besar sama dengan
  - <= : lebih kecil sama dengan
- logika (&&, ||, !)
- string (+)

ternary :
membutuhkan 3 buah operand

- kondisional :
  (kondisi) ? true : false

unary :
membutuhkan satu operand

- typeof : digunakan untuk mengetahui tipe data apa dari nilai nanti yang kita masukan kedalamnya
  typeof(operand)

# String

digunakan untuk data tekstual menggunakan tanda :

- ""
- ''
- ``
  unicode : https://en.wikipedia.org/wiki/List_of_Unicode_characters

# Boolean

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

# Variable

var = x; // deklrasi & inisialisasi
x = 20; // assigment

Deklarasi variable :

- var
- let
- const

# Pop up box

- alert
- prompt
- confirm

# Control flow

pengulangan :
- for
- while:
  nilai awal
  while(kondisi terminasi) {
    aksi
    
    increment/decrement
  }
- do while

pengkondisian/percabangan :
- if,else if, else
- switch

# function

- parameter & argument
argument adalah nilai yang benar-benar dikirimkan ke parameter
jika parameter lebih sedikit dari argument, maka argument selebihnya akan diabaikan
jika parameter lebih banyak dari argument, maka parameter kelebihan akan diisi dengan undifined

- Refactoring :
Sebuah proses mengubah kode agar menjadi lebih 'baik' tanpa mengubah functionalitas nya

- Variable Scope :
block scope &  function scope
javascript menggunakan function scope

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

# Array

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

# Object
object sama dengan array, tapi tidak memiliki index tapi key : value

membuat object pada JS :
- object literal
- function declaration
- constructor function (keyword new)
- object.create