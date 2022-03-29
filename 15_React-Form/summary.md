# React Form

Form merupakan elemen yang biasa digunakan untuk menangani input dari user. Contohnya pada sign up, login, comment, upload feeds instagram, dll.

Jenis input yang biasa digunakan dalam form adalah:

- text: untuk menerima inputan text
- select: menawarkan inputan yang sudah kita tentukan
- radio: memilih salah satu opsi yang ditawarkan
- checkbox: memilih beberapa opsi yang ditawarkan
- button: tombol untuk mentrigger suatu aksi
- file: untuk menginput file (gambar, dokumen, dll)

### Controlled Vs Uncontrolled Component

Uncontrolled: tidak mengontrol input formulir, cara memperoleh nilainya melalui modules useRef. Bisa dibilang kita hanya mengambil value saat dibutuhkan saja

Controlled: setiap melakukan perubahan dalam, kita memanggil fungsi onChange untuk mengubah statenya. Dengan menggunakan teknik ini kita dapat melakukan validasi pada input sebelum disubmit

| Element  | Value property       | Change Callback | New value in callback |
| -------- | -------------------- | --------------- | --------------------- |
| text     | value="string"       | onChange        | event.target.value    |
| checkbox | checked={boolean}    | onChange        | event.target.checked  |
| radio    | checked={boolean}    | onChange        | event.target.checked  |
| textarea | value="string"       | onChange        | event.target.value    |
| select   | value="option value" | onChange        | event.target.value    |

### Validation

Ada dua tipe validasi:

- Validasi client side menggunakan fitur validasi HTML atau menggunakan code javascript
- Server side: validasi sebelum masuk ke database, biasanya setelah user menekan submit.

Yang saya pelajari pada kali ini adalah menerapkan kode javascript dan menggunakan atribut HTML untuk validasi. Validasi menggunakan atribut required, minlength, maxlength, min, max, type, dan pattern. Validasi javascript dapat diterapkan ketika kita memanggil fungsi seperti onChange, onClick, onSubmit, dll.

# Praktikum

Pada praktikum ini saya membuat sebuah website form pendaftaran peserta coding bootcamp yang berisi nama (wajib huruf), email (wajib menggunakan format email), nomor telpon (wajib nomor sejumlah 9-14 karakter), latar belakang pendidikan, foto surat kesungguhan, harapan peserta.

Saya menerapkan controlled component pada bagian nama, email, nomor telepon, latar belakang pendidikan, dan harapan peserta. Kemudian untuk foto kesungguhan peserta menggunakan uncontrolled component.

Bagian yang wajib diisi dari form ini adalah nama, email, dan nomor telepon. Untuk sisanya bersifat opsional

Jika terdapat format yang tidak sesuai, maka akan muncul tulisan error di atas tombol submit. Lalu jika kita mensubmit dalam kondisi terdapat error maka akan muncul alert “data pendaftar tidak sesuai”

Jika informasi yang diberikan telah sesuai maka akan muncul alert data telah disimpan.

Website form ini juga dapat direset dengan menggunakan button reset
