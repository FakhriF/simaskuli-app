# Changelog v0.1a

## New:

-   Ditambahkan page baru (profile, register, dan login)
-   Sudah terkoneksi database dan sudah dapat melakukan login dan register

## Changes:

-   Perubahan settingan pada Laravel untuk menyesuaikan development local Next.js

## Bug:

-   Sementara belum dipasang logic untuk mencocokan input password dan confirm-pass pada register
-   Setelah membuat akun, mungkin tidak ada perubahan apa-apa. Untuk sementara, Kalian bisa cek ke `localhost:8000/api/users` untuk melihat sudah tersimpan atau belum
-   Untuk masuk ke halaman profile, bisa login terlebih dahulu (Kalian bisa menggunakan akun yang didaftarkan atau akun sementara:
    -   **Email:** `kyota@fakhrif.my.id`
    -   **Password:** `itskyota!`
-   Akan muncul error 500 ketika mengalami redirect dari `/profile` ke `/login` (abaikan saja)
-   Untuk logout, sementara Anda bisa inspect -> application -> storage -> local storage -> `localhost:3000` -> hapus key 'id_user'

## Notes:

-   Pastikan menjalankan Laravel dan Next.js
-   Untuk frontend, Kalian mungkin hanya melihat halaman kosong di `localhost:3000`. Oleh karena itu, Kalian bisa pindah manual ke `/profile` (akan diarahkan ke form login jika belum login)
