# [PLAN] Changelog v0.4a (2 Maret 2024)

## New:

- Menambahkan halaman Connected Devices (`/profile/connected-devices`)
- Dapat merubah data pengguna (Nama, BirthDate, Password)
- Penggunaan library `react-icons` dan `react-toastify`

## Changes:

- Perubahan struktur file pada folder `profile`
- Mengubah Settings (`/profile/settings`) menjadi Change Password(`/profile/change-password`)
- Mengubah nama Profile pada Side NavBar di `/profile` menjadi Edit Profile

## Bug Fixes:
- Ketika klik salah satu menu dropdown di navigation bar, maka menu akan tertutup langsung

## Bug:

-   **(NEW!)** Connected Devices masih berurut berdasarkan last activity sehingga perangkat yang digunakan bisa saja di posisi bawah
-   Sedikit elemen mengalami inkonsistensi warna atau behaviour ketika dilakukan hovering
-   Terkadang sesudah registrasi akan mengalami flicker/freeze.
-   Ketika melakukan Delete Profile, baru bisa menghapus satu session aktif tidak seluruh session dari akun tersebut

## Notes:

-   **PASTIKAN MELAKUKAN NPM INSTALL TERLEBIH DAHULU**
-   **(NEW!)** Jika tidak terkoneksi internet dan sebelumnya sudah login, maka akan mengalami freeze, dan error always redirect. Hal ini dikarenakan aplikasi dijalankan dalam localhost.
-   Untuk masuk ke halaman selain Login dan Register, diharuskan **login terlebih dahulu**! Kalian bisa mendaftar akun baru atau menggunakan akun sementara di bawah:
    -   **Email:** `kyota@fakhrif.my.id`
    -   **Password:** `itskyota!`
-   Berkaitan dengan bug nomor dua, jika itu terjadi silahkan lakukan penghapusan cookies untuk localhost:3000, lalu langsung lakukan login

# Changelog v0.3a (31 Maret 2024)

## New:

- Tambahan halaman baru yaitu Forum (/forum)

## Changes:

- Menambahkan link ke Forum dan Course (Masih #) pada Navigation Bar

## Bug:

-   **(NEW!)** Sedikit elemen mengalami inkonsistensi warna atau behaviour ketika dilakukan hovering
-   **(NEW!)** Menu Profile pada Navigation Bar tidak tertutup ketika di klik
-   Terkadang sesudah registrasi akan mengalami flicker/freeze.
-   Ketika melakukan Delete Profile, baru bisa menghapus satu session aktif tidak seluruh session dari akun tersebut

## Notes:

-   Untuk masuk ke halaman selain Login dan Register, diharuskan **login terlebih dahulu**! Kalian bisa mendaftar akun baru atau menggunakan akun sementara di bawah:
    -   **Email:** `kyota@fakhrif.my.id`
    -   **Password:** `itskyota!`
-   Berkaitan dengan bug nomor dua, jika itu terjadi silahkan lakukan penghapusan cookies untuk localhost:3000, lalu langsung lakukan login

# Changelog v0.2a (28 Maret 2024)

## New:

-   Penggunaan Cookies pada web Si-Mas Kuli
-   Sudah dapat melakukan hapus pengguna (profile/delete)
-   Loading Modal ketika Login, Register, Delete, Logout
-   Menambahkan Navigation Bar pada website
-   Akses mudah untuk Log Out

## Changes:

-   Menggunakan sessions sebagai data yang dipegang oleh user secara langsung di aplikasi

## Bug Fixes:

-   Sudah terpasang logic untuk mencocokan input password dan confirm-pass pada register
-   Memperbaiki error 500 ketika redirect dari `/profile` ke `/login`
-   Setelah melakukan registrasi sudah redirect ke `/profile`

## Bug:

-   Terkadang sesudah registrasi akan mengalami flicker/freeze. (Sedang Diatasi!)
-   Ketika melakukan Delete Profile, baru bisa menghapus satu session aktif tidak seluruh session dari akun tersebut

## Notes:

-   Untuk masuk ke halaman profile, bisa login terlebih dahulu (Kalian bisa menggunakan akun yang didaftarkan atau akun sementara:
    -   **Email:** `kyota@fakhrif.my.id`
    -   **Password:** `itskyota!`

# Changelog v0.1a (24 Maret 2024)

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
-   Untuk logout, sementara bisa inspect -> application -> storage -> local storage -> `localhost:3000` -> hapus key 'id_user'

## Notes:

-   Pastikan menjalankan Laravel dan Next.js
-   Untuk frontend, Kalian mungkin hanya melihat halaman kosong di `localhost:3000`. Oleh karena itu, Kalian bisa pindah manual ke `/profile` (akan diarahkan ke form login jika belum login)
