# Login with React

Tugas login ini dipegang oleh front end dan backend. Tugas front end biasanya untuk mengatur input pada form dan menyambungkannya ke API. Jadi prinsipnya itu kita menyamakan username dengan password. Jika username dan passwordnya ada yang sama dengan data di database, maka akan mengembalikan array dengan panjang 1 yang berisi data user yang telah login.

# Praktikum

Pada kali ini saya membuat server GraphQL menggunakan Hasura dengan database bernama login yang berisi nama, username, dan password. Saya menambahkan data untuk login ke dalam hasura dengan data “Rafli” sebagai nama, “rafliogun49” sebagai username, dan “password” sebagai password. Library yang akan digunakan adalah graphql, react router dom, apollo client, dan ant design. Skema graphQL yang digunakan untuk praktikum ini adalah Query dengan kondisi variabel username dan password harus sama dengan data yang ada di database.

```graphql
query MyQuery($_eq: String!, $_eq1: String!) {
  login(where: {username: {_eq: $_eq}, password: {_eq: $_eq1}}) {
    id
    name
    password
    username
  }
}
```

Ketika kita mengisikan input username dengan kata “rafliogun49” dan password dengan kata “password”, maka akan terjadi loading kemudian kita diarahkan ke page Home.
