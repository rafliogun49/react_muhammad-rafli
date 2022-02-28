# CSS

CSS (Cascading Style Sheets) merupakan bahasa yang dapat digunakan untuk menghias tampilan dan mengatur tata letak dokumen HTML. Sintaksnya terdiri dari selector, property, dan value. CSS dapat ditambahkan melalui tiga cara yaitu external, internal, dan inline. 

- External CSS adalah kita membuat CSS di luar file HTML, kemudian disambungkan dengan sintaks link pada bagian head HTML. dengan teknik ini, tampilan HTML akan lebih rapi dan lebih mudah di-maintain.

```css
<link rel="stylesheet" href="mystyle.css">
```

- Inline CSS adalah membuat CSS pada setiap elemen tunggal. Teknik ini dapat digunakan untuk mengaplikasikan style yang unik pada suatu elemen.

```css
<h1 style="color:blue;text-align:center;">This is a heading</h1>
```

- Internal CSS adalah membuat CSS pada head HTML.

```css
<style>
	body {
    background-color: #19355f;
	}
	h1 {
    color: #f47523;
    margin-left: 40px;
	}
</style>
```

### CSS Selector

CSS Selector dapat menggunakan ID (#) atau class (.), untuk best practicenya lebih baik menggunakan class. selector dapat digabungkan dengan menggunakan tanda (,)

```css
h1,h2 {
	color: #121212;
}
```

### CSS Font

sintaks yang umumnya digunakan adalah font-family untuk menentukan kelompok font, font-size untuk menentukan ukuran font, serta font-weight untuk menentukan ketebalan teks. Lalu sumber font yang dapat digunakan adalah [https://fonts.google.com/](https://fonts.google.com/) 

### CSS Margin dan Padding

![image](https://user-images.githubusercontent.com/67999361/155919798-de18bb24-3d50-4603-a065-c0f4d2dbcc69.png)


Pada dasarnya setiap komponen memiliki struktur seperti gambar berikut. Untuk mengatur jarak antar komponen, kita dapat menggunakan margin, namun ketika kita ingin memberikan space pada setiap komponen dapat menggunakan padding.

### CSS Display

Berfungsi untuk menentukan tampilan pada elemen. Display memiliki properti block untuk membuat baris baru, inline-block untuk  menampilkan komponen sesuai lebar yang diperlukan, dan none untuk menyembunyikan komponen. Selain ini sebenarnya kita dapat menggunakan flex dan grid yang dapat lebih responsive dan intuitif digunakan.

### CSS Color

- color: untuk mewarnai teks
- background: untuk menerapkan background pada suatu element

### CSS Pseudo Element

Membuat elemen semu yang tidak muncul di file HTML.

sintaks ::before atau ::after

# Praktikum

Pada praktikum CSS, saya membuat 2 website yaitu file1 dan file2. 

- file1 merupakan website yang berisi latihan untuk membuat kotak merah berukuran 100 x 100 px dengan teks di bagian tengahnya, kotak biru berukuran 100 x 100 px dengan teks di bagian tengahnya, serta kotak hijau berukuran 350-350px. Keseluruhan konten website ditaruh di tengah dan bersifat responsif.
- file2 merupakan website pencatatan yang terdiri dari navigasi, konten post, serta footer. website ini bersifat responsif juga karena saya menggunakan display flex.
