# Relational Database

**Database** merupakan kumpulan data yang terorganisir. Database tersebut dapat dihubungkan dengan database lainnya dengan tiga jenis hubungan yaitu one to one, one to many, dan many to many.

Untuk mengimplementasikan relational database, kita dapat menggunakan software database seperti mySQL, oracle, amazon S3, microsoft azure, dll. tipe data pada mySQL adalah number, huruf, dan date.

Perintah SQL dapat dibagi menjadi tiga jenis yaitu:

- DDL (Data Definition Language) yang meliputi CREATE DATABASE, USE, CREATE TABLE, DROP TABLE, RENAME TABLE
- DML (Data Manipulation Language) yang meliputi INSERT, SELECT, UPDATE, DELETE, LIKE / BETWEEN, AND / OR, ORDER BY, LIMIT, INNER JOIN, LEFT JOIN, RIGHT JOIN, UNION
- DCL (Data Control Language)

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
