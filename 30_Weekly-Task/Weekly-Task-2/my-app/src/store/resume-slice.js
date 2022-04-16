import {createSlice} from "@reduxjs/toolkit";

const initialData = {
  data: [
    {
      id: 0,
      icon: "github",
      title: "Git and Github",
      photos: [
        "https://user-images.githubusercontent.com/67999361/155533643-31e8548c-3cd2-4371-99b5-f0a277f6f616.png",
      ],
      linkGithub:
        "https://github.com/rafliogun49/react_muhammad-rafli/tree/main/2_Version%20Control%20and%20Branch%20Management%20(Git)",
      text: [
        "Versioning adalah mengatur versi dari source code program. Problemnya adalah akan ada banyak file revisi setiap melakukan perubahan. Tools yang dapat digunakan adalah Version Control System, Source Code Manager, Revision Control System.",
        "Salah satu cara untuk mengatur versioning adalah dengan menggunakan git. Git memiliki sifat terdistribusi dan dapat melacak sebuah perubahan file. Penyedia git yang populer digunakan adalah github",
        "Instruksi penting dalam git adalah git init, git add, git commit, git push, git branch, dan git checkout. Selain itu terdapat best practice dalam menggunakan scrum seperti tidak mengutak-atik master branch, tidak langsung mengedit di development branch, melakukan perubahan fitur pada branch feature yang berdiri di atas develop branch, dan merge dengan develop dan master setelah proses developing selesai",
      ],
    },
    {
      id: 1,
      icon: "ux",
      title: "Intro UI/UX",
      photos: [
        "https://user-images.githubusercontent.com/67999361/155264108-89b431ea-2df6-4621-960a-5c370eb0f5c3.png",
        "https://user-images.githubusercontent.com/67999361/155264217-b323525e-ad4d-4d57-bc3b-c57bac499e8c.png",
        "https://user-images.githubusercontent.com/67999361/155264129-5b0e5f33-b7d7-4884-9df4-252707e30a64.png",
        "https://user-images.githubusercontent.com/67999361/155264138-94c30cc7-4fac-4b63-92ea-e938f9f3603f.png",
      ],
      linkGithub:
        "https://github.com/rafliogun49/react_muhammad-rafli/tree/main/3_Introduction%20UIUX",
      text: [
        "UX itu tentang keseluruhan yang pengguna rasakan setiap menggunakan sebuah produk",
        `Untuk membuat UX yang baik pada produk yang akan dibuat, kita dapat memanfaatkan framework design thinking. Design thinking terdiri dari beberapa tahap seperti:`,
        `Empathize: Terdiri dari persona, jobs to be done, usability testing; Define: Mengidentifikasi needs dan memprioritaskan needs; Ideate: Merancang task flow dan menggambar prototype Lo-Fi; Prototype: Membuat mockup Hi-Fi serta prototype yang sudah diklik; Validasi: Testing prototype ke user dan melakukan iterasi desain`,
        `UI
        Tampilan yang digunakan user untuk berinteraksi dengan produk. Terdapat 4 Pilar UI yaitu:
        1. Desain harus konsisten (Design pattern perlu sama agar user familiar);
        2. Tampilan harus clear dan simple (Hindari element yang tidak perlu dan buat bahasa yang clear);
        3. Typography yang tepat (Perhatikan typeface, size, dan tata letak agar meningkatkan aspek readability);
        4. Umpan balik kepada user (Feedback harus bermakna, relevan, dan jelas);`,
      ],
    },
    {
      id: 2,
      icon: "figma",
      title: "Figma",
      photos: [
        "https://user-images.githubusercontent.com/67999361/155646186-99f65884-88b4-4e12-8c70-1ee68b67e5ec.png",
        "https://user-images.githubusercontent.com/67999361/155646203-eeaaf392-b029-46e5-a2fc-8f3420e9484b.png",
        "https://user-images.githubusercontent.com/67999361/155646224-48a08bbf-b0bc-4a0a-9de8-fb9944d82c0b.png",
        "https://user-images.githubusercontent.com/67999361/155646263-0a497587-c7ce-42c9-9ad6-feedc4d395dd.png",
      ],
      linkGithub: "https://github.com/rafliogun49/react_muhammad-rafli/tree/main/4_Figma",
      text: [
        "Figma merupakan editor grafis vektor sekaligus prototyping tools yang berbasis website, namun dapat juga pada versi desktop. Keuntungan dari menggunakan figma adalah gratis, dapat digunakan pada mac serta PC, dapat berkolaborasi dengan orang lain, memiliki design system yang baik, dapat melakukan prototyping dengan baik serta mudah, dan memiliki banyak plugin yang dapat membantu proses design. I love Figma haha. Namun di sisi lain Figma adalah aplikasi berbasis penyimpanan cloud sehingga membutuhkan koneksi internet untuk bekerja.",
        `Hal pertama yang perlu dilakukan ketika pertama kali menggunakan figma adalah menyiapkan frame, menyusun palet warna, menyusun typography, serta reusable component agar mempermudah proses design aplikasi. Dengan menggunakan pendekatan atomic design, kita dapat membuat aplikasi dengan menyusun component layaknya lego.`,
        `Pada praktikum kali ini saya meniru website medium.com yang merupakan platform blogging buatan mantan founder twitter.`,
      ],
    },
    {
      id: 3,
      icon: "html",
      title: "HTML",
      photos: [
        "https://user-images.githubusercontent.com/67999361/155874706-993cd531-779e-4995-bd01-740f0b4243db.png",
        "https://user-images.githubusercontent.com/67999361/155874716-2909c988-b071-465b-a97f-baf9865fe3bd.png",
        "https://user-images.githubusercontent.com/67999361/155874780-21c782a3-7c34-4985-ac57-6e424fc12157.png",
      ],
      linkGithub: "https://github.com/rafliogun49/react_muhammad-rafli/tree/main/5_HTML",
      text: [
        "HTML merupakan singkatan dari Hypertext Markup Language yang berperan sebagai standar dalam membentuk struktur pada website. Kegunaan utam HTML adalah untuk membuat struktur, tampilan, serta isi dari tampilan website. Kita dapat menuliskan kode HTML pada beberapa text editor seperti notepad, notepad++, sublime, VS Code, serta atom. Untuk saat ini saya hanya menggunakan Visual Studio Code saja agar mempermudah prosesnya melalui beberapa extension.",
        `Untuk materi tabel saya rasa saat ini jarang digunakan, jadi saya tidak banyak membahas mengenai ini. Peran tabel dapat digantikan oleh <div> dan dimodifikasi oleh css.`,
        `Form HTML merupakan topik yang cukup penting dalam HTML karena form memiliki peran untuk menerima input dari user seperti login, signup, tambah komen, dll. Untuk membuat form kita perlu menambahkan sintaks <form></form> sebagai pembungkus form. Sintaks yang biasa digunakan dalam form adalah <input>, <select>, <textarea>, serta <button>.`,
        `Praktikum HTML kali ini adalah membuat tiga halaman website yang terdiri dari homepage yang berisi pengenalan website bernama MyBook, Form page berisi pendaftaran website MyBook, serta welcome page yang berisi ucapan selamat kepada user yang telah mendaftarkan diri pada MyBook. Flow website ini adalah user memasuki homepage, lalu menekan link sign up; kemudian user diarahkan untuk mengisi form berisi first name, last name, gender, nationality, language spoken, serta bio; setelah user menekan submit pada form, user akan diarahkan pada halaman welcome.`,
      ],
    },
    {
      id: 4,
      icon: "css",
      title: "CSS",
      photos: [
        "https://user-images.githubusercontent.com/67999361/155913027-9991f98e-a38b-495d-9e3a-b5199ee3412e.png",
        "https://user-images.githubusercontent.com/67999361/156320553-f1091030-2692-4a93-95da-40b9b1ca38ec.png",
        "https://user-images.githubusercontent.com/67999361/156320653-8505e58c-cddd-4d3f-9358-6f5e57f13953.png",
        "https://user-images.githubusercontent.com/67999361/156320659-08ad87a9-b631-4f6b-a272-75ea78f246f4.png",
      ],
      linkGithub: "https://github.com/rafliogun49/react_muhammad-rafli/tree/main/6_CSS",
      text: [
        "CSS (Cascading Style Sheets) merupakan bahasa yang dapat digunakan untuk menghias tampilan dan mengatur tata letak dokumen HTML. Sintaksnya terdiri dari selector, property, dan value. CSS dapat ditambahkan melalui tiga cara yaitu external, internal, dan inline.",
        `External CSS adalah kita membuat CSS di luar file HTML, kemudian disambungkan dengan sintaks link pada bagian head HTML. dengan teknik ini, tampilan HTML akan lebih rapi dan lebih mudah di-maintain. Inline CSS adalah membuat CSS pada setiap elemen tunggal. Teknik ini dapat digunakan untuk mengaplikasikan style yang unik pada suatu elemen. Internal CSS adalah membuat CSS pada head HTML.`,
        `CSS Selector dapat menggunakan ID (#) atau class (.), untuk best practicenya lebih baik menggunakan class. selector dapat digabungkan dengan menggunakan tanda (,)`,
        `CSS Font. sintaks yang umumnya digunakan adalah font-family untuk menentukan kelompok font, font-size untuk menentukan ukuran font, serta font-weight untuk menentukan ketebalan teks. Lalu sumber font yang dapat digunakan adalah https://fonts.google.com/`,
        `CSS Margin dan Padding. Pada dasarnya setiap komponen memiliki struktur seperti gambar berikut. Untuk mengatur jarak antar komponen, kita dapat menggunakan margin, namun ketika kita ingin memberikan space pada setiap komponen dapat menggunakan padding.`,
        `CSS Display Berfungsi untuk menentukan tampilan pada elemen. Display memiliki properti block untuk membuat baris baru, inline-block untuk menampilkan komponen sesuai lebar yang diperlukan, dan none untuk menyembunyikan komponen. Selain ini sebenarnya kita dapat menggunakan flex dan grid yang dapat lebih responsive dan intuitif digunakan.`,
      ],
    },
    {
      id: 5,
      icon: "bootstrap",
      title: "Bootstrap",
      photos: [
        "https://user-images.githubusercontent.com/67999361/156877163-1df6ed14-4f90-403a-a3d1-8e19cf8e7539.png",
        "https://user-images.githubusercontent.com/67999361/156877167-611427cd-fcbc-474f-a8d1-4e19836d1ba1.png",
        "https://user-images.githubusercontent.com/67999361/156877174-836f38ff-3252-48b6-a579-68498630ef3d.png",
      ],
      linkGithub: "https://github.com/rafliogun49/react_muhammad-rafli/tree/main/7_Bootstrap",
      text: [
        "Bootstrap merupakan salah satu framework UI yang terkenal untuk membuat website yang responsive dan mobile-first. Bootstrap memiliki beberapa keuntungan seperti penggunaan yang gratis, mudah dipelajari, performa yang cepat, dan tentunya memberikan tampilan website yang responsif. Cara penggunaannya untuk kali ini adalah menempatkan tag link berisi link bootstrap pada header.",
        `Hal penting yang saya pelajari di bootstrap adalah:`,
        `penggunaan container untuk mengemas sejumlah konten. property: container, container-fluid`,
        `row untuk mengatur tata letak serta menjadi patokan ukuran kolom childnya`,
        `Column: Sistem grid bootstrap memungkinkan kita untuk memiliki maksimal 12 kolom dalam suatu halaman website. aturan penulisan: col-[lg,md,sm]-[1-12]`,
        `Button: Membuat tombol aturan: btn-primary, success, warning, danger, light, link, dark`,
        `Praktikum bootstrap ini kita diminta untuk membuat website bernama eStartup dengan menggunakan assets (css, js, img, dan svg) yang telah disediakan oleh pihak Alterra. Jadi di sini saya hanya mengurus bootstrap untuk HTML dan sedikit mengubah css. Komponen website ini terdiri dari navigasi, section about us, section feature, dan footer.`,
      ],
    },
    {
      id: 6,
      icon: "js",
      title: "Javascript",
      photos: [
        "https://user-images.githubusercontent.com/67999361/157054486-299facb7-ab30-429a-88a8-fca45c2a92b3.png",
        "https://user-images.githubusercontent.com/67999361/157054709-a8d560a0-32c7-45a6-82a3-b8d6ed4e804a.png",
        "https://user-images.githubusercontent.com/67999361/157054868-88870f2f-e078-4f73-b88b-eb8e149d4f9e.png",
        "https://user-images.githubusercontent.com/67999361/157055120-0473ae70-f92a-4d89-8693-45df7b6ee93e.png",
        "https://user-images.githubusercontent.com/67999361/157055376-888bfbcd-a2ac-4e45-8411-0313302c4951.png",
        "https://user-images.githubusercontent.com/67999361/157055470-586033ff-525c-4c16-8f84-8113340a29b6.png",
      ],
      linkGithub:
        "https://github.com/rafliogun49/react_muhammad-rafli/tree/main/8_Javascript%20Refreshment",
      text: [
        "Javascript adalah bahasa pemrograman berbasis teks yang digunakan pada client-side dan server-side sehingga memugkinkan untuk membuat halaman web yang interaktif. Javascript bersifat high level, bahasa pemrograman scripting, untyped, dan interpreted.",
        `Variabel JS. Sederhananya variabel merupakan suatu wadah yang dapat diisi oleh data. data yang dapat disimpan bisa berupa data primitif atau objek. Javascript memiliki tiga tipe variabel yang memiliki kegunaan yang berbeda yaitu var, let, dan const. Agar variabel dapat digunakan, kita perlu mendeklarasikan variabel terlebih dahulu.`,
        `Value and Reference. Nilai/data dapat dibagi menjadi dua, yaitu primitive dan object. Primitive merupakan elemen paling sederhana yang tersedia dalam bahasa pemrograman. Nilai primitif terdiri dari tipe data string, boolean, number, float, bigInt, undefined, null, dan symbol. Sementara itu objects merupakan unit yang menyimpan properti dan fungsi, sehingga lebih kompleks dari nilai primitive. Tipe data objects terdiri dari object, array, function, date, set, map, weak set, dan weak map. Sedikit fakta unik yaitu kita dapat membuat variabel yang nilainya merupakan variabel lainnya.`,
        `Destructuring. Sebuah teknik untuk menyalin nilai dari suatu array atau objek ke dalam variabel yang berbeda.`,
        `Spreading. Sintaks spreading (...) memungkinkan kita untuk menyalin data pada suatu array atau objek ke array atau objek lainnya.`,
        `Method. Method merupakan sebuah fungsi yang dapat dijalankan pada objek, sehingga memudahkan proses pengolahan data.`,
        `Control Flow. Secara default kode akan dieksekusi dari atas ke bawah atau dari kiri ke kanan secara berurutan (synchronous). Tapi kenyataannya kita dapat mengatur alur eksekusi kode sesuai keinginan kita dengan menggunakan looping serta conditioning.`,
        `Function. Serangkaian prosedur yang dapat digunakan berulang kali`,
        `Asynchronous. Eksekusi tak selalu berdasarkan urutan, tapi berdasarkan waktu atau proses. Kita dapat menggunakan async-await, promise, dan setTimeOut()`,
        "Class Javascript bisa menerapkan OOP (Object Oriented Programming) menggunakan class. Class merupakan prototype dari suatu object.``Document Object Model (DOM). API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object.",
      ],
    },
    {
      id: 7,
      icon: "cleanCode",
      title: "Clean Code",
      photos: [
        "https://user-images.githubusercontent.com/67999361/157818915-1fbd1470-77e8-4d7a-89fc-4024444b1c4c.png",
        "https://user-images.githubusercontent.com/67999361/157819091-65209dd1-946f-499b-bbaa-f06b3c479796.png",
      ],
      linkGithub: "https://github.com/rafliogun49/react_muhammad-rafli/tree/main/7_Bootstrap",
      text: [
        "Clean code merupakan istilah untuk kode yang mudah dibaca, dipahami, dan diubah oleh programmer. Pada dasarnya kode itu agak sulit untuk dipahami, oleh karena itu jangan dipersulit lagi dengan nama variabel yang aneh. Programmer perlu mempelajari clean code karena nantinya akan mempermudah kolaborasi serta mempercepat proses pengembangan.",
        `Karakteristik: Penamaan yang mudah dipahami. Mudah dieja dan dicari. Singkat namun mendeskripsikan konteks. Nama variabel bersifat konsisten. Jangan tambahkan konteks yang tidak penting. Memberikan komentar pada proses penting yang berjalan. Function tidak memiliki banyak argumen. Gunakan style guide penulisan code. untuk javascript dapat menggunakan style guide AirBnB. Gunakan tools formating menggunakan prettier`,
        `Prinsip: KISS (Keep It Simple Stupid), DRY (Dont repeat yourself), Refactoring: Mengubah kode menjadi lebih efisien untuk di-maintain`,
      ],
    },
  ],
};

const summarySlice = createSlice({
  name: "summary",
  initialState: initialData,
  reducers: {
    addFavorite: (state, action) => {
      let temp = [...state.data];
      temp[action.payload].favorite = !temp[action.payload].favorite;
      state.data = temp;
    },
  },
});

export const {addFavorite} = summarySlice.actions;
export default summarySlice;
