# Global State Management dan Data Fetching

## Global State Management

Perubahan data state pada react harus bergerak dari atas ke bawah, namun sayangnya sistem ini kurang efisien untuk aplikasi yang menggunakan banyak state. Oleh karena itu muncul konsep global state management. Tools yang saat ini sering digunakan adalah Redux.

Redux tepat untuk digunakan ketika:

- Banyak state yang perlu ditaruh di banyak tempat
- State pada app sering berubah
- Logic untuk mengubah state kompleks
- Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
- Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

Redux libraries dan tools:

- React redux
- Redux toolkit

Komponen penting:

- Action: memberikan informasi dari aplikasi ke store
- Reducer: functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
- Store: objek sentral yang menyimpan state pada aplikasi

## Redux Thunk

Thunk middleware memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action. Redux thunk berguna untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga async seperti request data.

## React Persist

Untuk menyimpan data pada local storage

## Data Fetching

Menarik data dari API

caranya melalui:

- Fetch API
- Axios
- React Query Library

# Praktikum

Pada kali ini saya membuat website todo dengan menggunakan global state management. Library yang digunakan adalah redux toolkit, react-redux, redux-persist, serta bootstrap. Website ini dapat berjalan lancar dan datanya akan terekam di local storage
