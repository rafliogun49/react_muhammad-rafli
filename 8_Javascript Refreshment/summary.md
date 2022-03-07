# Javascript

**Javascript** adalah bahasa pemrograman berbasis teks yang digunakan pada client-side dan server-side sehingga memugkinkan untuk membuat halaman web yang interaktif. Javascript bersifat high level, bahasa pemrograman scripting, untyped, dan interpreted.

## Variabel Javascript

Sederhananya variabel merupakan suatu wadah yang dapat diisi oleh data. data yang dapat disimpan bisa berupa data primitif atau objek. Javascript memiliki tiga tipe variabel yang memiliki kegunaan yang berbeda yaitu var, let, dan const. Agar variabel dapat digunakan, kita perlu mendeklarasikan variabel terlebih dahulu.

|  | Var | Let | Const |
| --- | --- | --- | --- |
| Declare | dapat dideklarasi tanpa assignment | dapat dideklarasi tanpa assignment | Harus langsung diisi nilai |
| Redeclare | Dapat redeclare | tidak dapat redeclare | tidak dapat redeclare |
| Reassignment | Dapat mengubah nilai | dapat mengubah nilai | tidak dapat mengubah nilai |
| Hoisting (menggunakan variabel sebelum di-declare) | Bisa | Tidak bisa | Tidak bisa |

## Value and Reference

Nilai/data dapat dibagi menjadi dua, yaitu primitive dan object. Primitive merupakan elemen paling sederhana yang tersedia dalam bahasa pemrograman. Nilai primitif terdiri dari tipe data string, boolean, number, float, bigInt, undefined, null, dan symbol. Sementara itu objects merupakan unit yang menyimpan properti dan fungsi, sehingga lebih kompleks dari nilai primitive. Tipe data objects terdiri dari object, array, function, date, set, map, weak set, dan weak map. Sedikit fakta unik yaitu kita dapat membuat variabel yang nilainya merupakan variabel lainnya.

```jsx
let a = 1;
let b = a;
console.log(b)
console.log(a === b)
//output 1
//output true
```

## Destructuring

Sebuah teknik untuk menyalin nilai dari suatu array atau objek ke dalam variabel yang berbeda.

```jsx
// Array
const [firstElement, secondElement] = list
//example array
const x = [1,2,3,4,5]
const [y,z,,a] = x
console.log(y) //result 1
console.log(z) //result 2
console.log(a) //result 4

//Object
const user = {
	id = 42,
	is_verified = true
};

const {id, is_verified} = user
console.log(id) //42
console.log(is_verified) //true
```

## Spreading

Sintaks spreading (...) memungkinkan kita untuk menyalin data pada suatu array atau objek ke array atau objek lainnya.

```jsx
//Array
const a = [1,2,3]
const b = [1]
const c = [...a, ...b]
console.log(c) //[1,2,3,1]

//Object
const a = {a:1};
const b = {b:2};
const c = {...a,...b};
console.log(c) //{a:1, b:2}
```

## Method

Method merupakan sebuah fungsi yang dapat dijalankan pada objek, sehingga memudahkan proses pengolahan data.

| Method | Arti |
| --- | --- |
| concat | menggabungkan dua array dan mengembalikannya dalam satu array |
| map | membuat array baru yang hasilnya sesuai dengan fungsi yang diterapkan pada setiap elemen |
| foreach | memanggil fungsi untuk setiap elemen array |
| slice | memilih bagian dari array, dan mengembalikan array baru |
| filter | membuat array baru berisi elemen-elemen yang memiliki nilai true pada fungsi di dalamnya |
| reduce | melakukan operasi pada setiap elemen array menjadi nilai tunggal |

## Control Flow

Secara default kode akan dieksekusi dari atas ke bawah atau dari kiri ke kanan secara berurutan (synchronous). Tapi kenyataannya kita dapat mengatur alur eksekusi kode sesuai keinginan kita dengan menggunakan looping serta conditioning.

| Looping | Conditioning |
| --- | --- |
| For | If Else (percabangan jika maka) |
| While | Switch (percabangan jika maka yang banyak dan spesifik) |
| Do While | Try catch (statement try akan mengeksekusi program, lalu catch akan menangkap error pada statement di dalam try) |
|  | Throw (melempar error yang akan ditangkap oleh catch) |

## Function

Serangkaian prosedur yang dapat digunakan berulang kali

ada tiga cara untuk membuat function di javascript

```jsx
//function
function namaLengkap (depan, belakang) {
	console.log(depan +" "+belakang)
}

let namaLengkap = function (depan, belakang) {
	console.log(depan +" "+belakang)
}

let namaLengkap = () => {
	console.log(depan +" "+belakang)
}
```

## Asynchronous

Eksekusi tak selalu berdasarkan urutan, tapi berdasarkan waktu atau proses.

```jsx
console.log("Mulai");
setTimeout(() => {console.log("Proses....")}, 1000);
console.log("Berhenti")

//Output:
//Mulai
//Berhenti
//Proses
```

Kita dapat menggunakan async-await, promise, dan setTimeOut()

**Promise** itu ibarat janji. hasilnya di masa depan dapat berupa keberhasilan atau kegagalan

**setTimeOut()** adalah fungsi untuk menunda eksekusi selama beberapa waktu

**Async :** sebuah function yang bekerja secara asynchronous yang mengembalikan promise sebagai valuenya, tapi style penulisannya seperti synchronous.

**Await:** keyword yang bertujuan untuk menghentikan eksekusi sambil menunggu promise-nya selesai

## Class

Javascript bisa menerapkan OOP (Object Oriented Programming) menggunakan class. Class merupakan prototype dari suatu object.

Komponen class terdiri dari:

- keyword class: sebagai penanda class
- class name (harus Capitalize)
- constructor: method yang akan dipanggil pertama
- attributes: properti yang ada di dalam class
- method: fungsi yang berada di dalam class
- extends: untuk menurunkan sifat dari parent class

## Document Object Model (DOM)

API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object. Hal terpenting dalam DOM ada empat:

- DOM Selection Method:

| Event | Kegunaan |
| --- | --- |
| getElementById() | ambil element berdasarkan id |
| getElementByTagName() | ambil tag HTML |
| getElementByClassName() | ambil element berdasarkan nama class |
| querySelector() | ambil element |
| querySelectorAll() | ambil seluruh list element |
- DOM Manipulation

| Event | Kegunaan |
| --- | --- |
| element.innerHTML | merubah isi dalam tag |
| element.style | mengubah style dari tag yang dipilih |
| element.setAttribute() | memanipulasi atribute yang sudah dipilih |
| element.classList.add() | memanipulasi class yang sudah diseleksi |
- DOM Event


| Event | Trigger |
| --- | --- |
| onclick | Klik |
| onchange | mengubah input |
| onblur | meninggalkan kolom input |
| onmouseover | mouse diatas object |
| onmouseout | mouse keluar object |
| oncopy | copy suatu object |
