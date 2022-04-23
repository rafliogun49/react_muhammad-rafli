# Graph QL - Mutation

**Mutation** adalah suatu teknik untuk menulis kembali data ke server.

Untuk implementasinya kita dapat menggunakan hooks useMutation dari apollo client.

Dengan menggunakan mutation kita dapat melakukan update, insert, dan delete data dengan mudah.

Ketika ingin melakukan refetching menggunakan mutation, kita dapat menambahkan {refetchQueries: [QueryGraphQL] }

Contoh GraphQL Mutation yang saya gunakan dalam tugas praktikum:

```graphql
query MyQuery {
  passenger {
    id
    jenis_kelamin
    nama
    umur
  }
}

mutation DeletePassenger($id: Int!) {
  delete_passenger_by_pk(id: $id) {
    id
  }
}

mutation InputPassenger($objects: [passenger_insert_input!] = {}) {
  insert_passenger(objects: $objects) {
    returning {
      id
    }
  }
}

mutation UpdatePassenger($id: Int!, $jenis_kelamin: String!, $umur: String!, $nama: String!) {
  update_passenger_by_pk(
    _set: {umur: $umur, jenis_kelamin: $jenis_kelamin, nama: $nama}
    pk_columns: {id: $id}
  ) {
    id
  }
}
```

# Praktikum

Pada kali ini saya membuat 3 fitur yaitu input pengunjung, hapus pengunjung, dan update data pengunjung. Update data pengunjung telah saya atur agar kita dapat langsung mengubahnya di dalam baris tersebut
