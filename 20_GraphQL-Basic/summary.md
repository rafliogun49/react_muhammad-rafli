# GraphQL - Basic

GraphQL merupakan bahasa query untuk API. GraphQL memungkinkan kita untuk mengambil data yang hanya kita butuhkan dengan satu end point.

GraphQL dapat dijalankan secara lokal dan dalam server. Untuk membuat GraphQL muncul di internet, kita dapat menggunakan Hasura dan Apollo server serta Heroku sebagai penyimpanan database. Hasura merupakan penyedia graphql dan rest api dalam cloud, sedangkan Heroku merupakan cloud PaaS yang biasa digunakan oleh backend developer untuk mempublikasikan codenya.

Fitur utama GraphQL:

- Query: untuk mengambil data dengan query yang kita deklarasikan sebelumnya
- Mutation: untuk input, delete, update data
- Subscription: mengambil update data realtime / berbasis suatu event

Contoh GraphQL Query

```graphql
{
  query {
    movies {
      id
      title
      director {
        name
        age
      }
    }
  }
}
```

Contoh GraphQL Mutation

```graphql
mutation {
	insert_film{
		objects: {
			title: "Something",
			description: "New Movies",
		}
	}
	{
		returning {
			id
		}
	}
}
```

Contoh GraphQL Subscription

```graphql
subscription {
  person {
    id
    name
  }
}
```

# Praktikum

pada praktikum ini saya membuat sebuah graphQL untuk mengelola database bernama kampus merdeka. Disini saya membuat 2 buah tabel yang bernama anggota dengan isi id dan nama, serta tabel keterangan yang berisi id, id_anggota, pelajaran, nilai, dan status.
Hal pertama yang saya lakukan adalah membuat database, membuat 2 tabel tersebut, dan menghubungkannya. Setelah itu saya menginput nilai-nilai kedua tabel tersebut dengan nilai yang telah disediakan oleh pihak alterra. Lalu saya mulai mengatur nilai query untuk mengambil siswa dengan status true, melakukan input data angga dengan menggunakan mutasi, dan mengubah nilai status "false" menjadi "true" menggunakan mutation.
