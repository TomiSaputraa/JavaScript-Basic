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

- contoh function declaration :
function namaFunction(a, b){
  var total;
  total = a + b
  
  return total;
}

- contoh function expression :
var namaVar = function(a,b) {
  var total;
  total = a + b
  
  return total;
} 