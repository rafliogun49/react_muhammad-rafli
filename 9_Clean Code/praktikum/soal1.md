### Problem 1 - Analysis

Terdapat 7 jenis kesalahan dalam kode ini:

- Tidak menggunakan comment untuk menjelaskan maksud kode yang dibuat.
- Penggunaan var untuk mendeklarasikan variabel sudah tidak disarankan sehingga sebaiknya diganti menjadi let atau const.
- Tidak menggunakan constructor untuk menampung properti pada class user. Best practice dari pembuatan kelas adalah menggunakan constructor untuk menyimpan properti / variabel.
- penulisan kode seperti “user[ ] users” dan “user[ ] getallusers( )” tidak dikenal dalam javascript, sehingga kode ini membuat saya bingung dalam memahami kode serta kode ini berpotensi untuk mengalami error.
- Penulisan nama class pada “class user” dan “class userservice” menggunakan huruf kecil, padahal seharusnya penulisan nama class menggunakan huruf kapital seperti class User dan class UserService.
- penulisan function “getallusers()” dan “getuserbyid()” seharusnya menggunakan camel case menjadi “getAllUsers()” dan “getUserById()”
- parameter userid tidak menggunakan camelcase dan tidak efisien karena menggunakan kata “user” lagi meskipun ini berada dalam function yang mengandung kata “user” juga. sebaiknya parameter ini diubah menjadi “userId” atau “id” saja.

### Perbaikan yang saya usulkan adalah:

```jsx
class User {
  constructor() {
    this.id;
    this.name;
    this.password;
  }
}

class UserService {
  constructor() {
    this.users = ["arman", "maulana"];
  }

  //ambil seluruh data user

  getAllUsers() {
    return this.users;
  }

  // ambil data user berdasarkan id-nya

  getUserById(userId) {
    return this.users.filter(user => user === userId);
  }
}
```
