# Authorization with React

Authorization / otorisasi itu tentang apa saja akses yang diberikan kepada orang-orang tertentu. Tentunya dalam suatu aplikasi terdapat 2 role atau lebih yang terdiri dari pihak administrator dari perusahaan serta usernya. Kedua role ini tentunya memiliki hak akses yang berbeda seperti pihak admin dapat mengakses banyak data user sedangkan user hanya dapat mengakses data miliknya saja.

Tahapan:

- import library universal cookie
- Membuat file js bernama PrivateRoute
- membuat variabel yang berisi class Cookies dari universal cookie dalam file tersebut
- membuat variabel auth yang berisi cookies.get(”auth”)
- melakukan conditional rendering jika auth bernilai true akan menghasilkan outlet / mengarahkan ke route childnya sedangkan jika false akan melakukan redirect ke halaman login
- kembali lagi ke file App.js, kemudian membuat routenya seperti ini

```jsx
<Routes>
  <Route path="/" element={<Login />} />
  <Route element={<PrivateRoute />}>
    <Route path="home" element={<Home />} />
  </Route>
</Routes>
```

# Praktikum

Pada praktikum ini saya membuat fitur authorization pada fitur login sehingga ketika kita belum login maka tidak akan bisa mengakses page home. Tahapannya sama dengan apa yang telah saya tuliskan sebelumnya.
