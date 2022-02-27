# HTML


**HTML** merupakan singkatan dari Hypertext Markup Language yang berperan sebagai standar dalam membentuk struktur pada website. Kegunaan utam HTML adalah untuk membuat struktur, tampilan, serta isi dari tampilan website. Kita dapat menuliskan kode HTML pada beberapa text editor seperti notepad, notepad++, sublime, VS Code, serta atom. Untuk saat ini saya hanya menggunakan Visual Studio Code saja agar mempermudah prosesnya melalui beberapa extension.

 

Sebuah website umumnya memiliki struktur seperti:

```html
<!DOCTYPE html> <!-- Mendefinisikan dokumen sebagai HTML 5 -->
<html lang="en"> <!-- elemen root html -->
<head> <!-- berisi informasi meta tentang dokumen -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title> <!-- judul halaman website -->
</head>
<body> <!-- berisi konten halaman website -->
    <div></div> <!-- divider konten yang biasanya lebih dari satu baris -->
		<span></span> <!-- divider tulisan atau konten yang satu baris aja -->
</body>
</html>
```

Tag HTML5 penting:

```html
<!-- Heading dan paragraph -->
<!-- -->
<h1></h1> <!-- Heading terbesar -->
<h6></h6> <!-- Heading terkecil -->
<p></p> <!-- penanda paragraph -->

<!-- Link -->
<a href="https://www.youtube.com">Cek Youtube</a> <!-- tulisan berisi link -->
<a href="https://www.youtube.com" target="_blank">Cek Youtube</a> <!-- Buka youtube di tab baru -->

<!-- Image -->
<img src="logo-alterra.png" alt="ini-logo-alterra"> <!-- tulisan alt akan muncul ketika gambar tidak dapat diakses client -->

<!-- Listing -->
<ol> <!-- untuk list berurutan -->
	<li>Sapi</li>
	<li>Ayam</li>
	<li>Babi</li>
</ol>
<ul> <!-- untuk list yang tidak berurutan -->
	<li>Sapi</li>
	<li>Ayam</li>
	<li>Babi</li>
</ul>
```

Untuk materi tabel saya rasa saat ini jarang digunakan, jadi saya tidak banyak membahas mengenai ini. Peran tabel dapat digantikan oleh <div> dan dimodifikasi oleh css.

  
Form HTML merupakan topik yang cukup penting dalam HTML karena form memiliki peran untuk menerima input dari user seperti login, signup, tambah komen, dll. Untuk membuat form kita perlu menambahkan sintaks <form></form> sebagai pembungkus form. Sintaks yang biasa digunakan dalam form adalah input, select, button, serta textarea. 

  
# Praktikum
  
Praktikum HTML kali ini adalah membuat tiga halaman website yang terdiri dari homepage yang berisi pengenalan website bernama MyBook, Form page berisi pendaftaran website MyBook, serta welcome page yang berisi ucapan selamat kepada user yang telah mendaftarkan diri pada MyBook. Flow website ini adalah user memasuki homepage, lalu menekan link sign up; kemudian user diarahkan untuk mengisi form berisi first name, last name, gender, nationality, language spoken, serta bio; setelah user menekan submit pada form, user akan diarahkan pada halaman welcome.
