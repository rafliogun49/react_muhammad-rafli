# React Hook

React Hook memungkinkan kita untuk membuat serta mengubah state tanpa menggunakan class. Dengan menggunakan react hook, kita dapat dengan lebih mudah untuk mengelola dan membaca codingan kita karena menggunakan functional programming. React Hook dasar yang sering digunakan adalah useState, useEffect, serta useContext.

Aturan pada hooks:

- Hanya panggil hooks di tingkat atas
- Hanya panggil hooks dari fungsi-fungsi react

**Custom Hooks :** Kita dapat membuat hook sendiri yang memungkinkan kita dapat membuat komponen logic yang reusable

### useState

useState memungkinkan kita untuk melacak state dalam komponen function. useState memiliki dua nilai yaitu nilai saat ini dan function yang dapat mengupdate nilai state

```jsx
import {useState} from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
    </>
  );
}

ReactDOM.render(<FavoriteColor />, document.getElementById("root"));
```

**useEffect**

useEffect memungkinkan kita untuk melakukan side-effect pada komponen. contohnya adalah mengambil data, memperbarui DOM secara langsung, atau pengatur waktu. useEffect menerima dua argumen yaitu function dan dependency, namun untuk argumen kedua ini bersifat opsional.

```jsx
import {useState} from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
    </>
  );
}

ReactDOM.render(<FavoriteColor />, document.getElementById("root"));
```

# Praktikum

Pada praktikum ini saya melakukan refactoring pada page home,component input to do, serta component to do item. Saya melakukan perubahan dari teknik penulisan yang menggunakan class menjadi function menggunakan useState.
