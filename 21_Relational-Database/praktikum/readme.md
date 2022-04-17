# Praktikum

One to one antara id anggota pada tabel keterangan dengan nama pada tabel anggota

```graphql
query MyQuery {
  keterangan {
    id_anggota
    anggotum {
      nama
    }
  }
}
```

Result:

```graphql
{
  "data": {
    "keterangan": [
      {
        "id_anggota": 1,
        "anggotum": {
          "nama": "Budi"
        }
      },
      {
        "id_anggota": 2,
        "anggotum": {
          "nama": "Sita"
        }
      },
      {
        "id_anggota": 3,
        "anggotum": {
          "nama": "Angga"
        }
      },
      {
        "id_anggota": 1,
        "anggotum": {
          "nama": "Budi"
        }
      },
      {
        "id_anggota": 2,
        "anggotum": {
          "nama": "Sita"
        }
      },
      {
        "id_anggota": 3,
        "anggotum": {
          "nama": "Angga"
        }
      }
    ]
  }
}
```

One to many antara id pada tabel anggota dengan pelajaran pada tabel keterangan

```graphql
query MyQuery2 {
  anggota {
    id
    keterangans {
      pelajaran
    }
  }
}
```

Result:

```graphql
{
  "data": {
    "anggota": [
      {
        "id": 1,
        "keterangans": [
          {
            "pelajaran": "Sistem Informasi"
          },
          {
            "pelajaran": "React"
          }
        ]
      },
      {
        "id": 2,
        "keterangans": [
          {
            "pelajaran": "Sistem Informasi"
          },
          {
            "pelajaran": "React"
          }
        ]
      },
      {
        "id": 3,
        "keterangans": [
          {
            "pelajaran": "Sistem Informasi"
          },
          {
            "pelajaran": "React"
          }
        ]
      }
    ]
  }
}
```
