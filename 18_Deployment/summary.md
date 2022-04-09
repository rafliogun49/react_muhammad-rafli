# Deployment

### Build React App

Sebelum kita mendeploy aplikasi kita server, kita perlu mengkompilasi code dari React menjadi vanilla javascript dengan cara mengetik “npm run build” pada terminal. Instruksi tersebut akan meminta react untuk membuat folder build yang berisi code kita dalam bentuk javascript yang sudah siap diupload ke server. Terdapat beberapa penyedia layanan hosting website seperti surge dan netlify (saya lebih memilih ini).

Untuk membuat website tersedia secara online melalui netlify, kita dapat menggunakan 3 cara yaitu dengan mengunggah langsung folder build ke website netlify, melalui repository git, dan menggunakan netlify CLI. Pada kali ini saya diminta untuk menggunakan netlify CLI. Hal yang pertama dilakukan adalah menginstal Netlify dengan menuliskan instruksi seperti berikut

```powershell
npm install netlify-cli -g
netlify deploy
```

lakukan autentifikasi di website netlify, kemudian lakukan beberapa konfigurasi dan build pada netlify CLI.

lalu langkah terakhir adalah mengetik instruksi di terminal

```powershell
netlify deploy --prod
```

Setelah ini website telah dapat diakses secara online
