# 0008-node-nvm-npm-setup

Pertama, instalasi dari nvm (Node Version Manager)

Panduan diperoleh dari http://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/

## TUTORIAL INSTALASI NODE JS MENGGUNAKAN NVM 
##### Tierney Cyren - in How To on Feb 16 2017

Node.js, seperti kebanyakan programming languages, platforms, atau utilities, langkah pertama untuk menggunakannya adalah dengan menginstalnya. Banyak dari perangkat lunak ini biasanya dilengkapi dengan cara cepat untuk mengupgrade saat versi baru tersedia.

Secara default, tidak ada cara untuk meng-upgrade versi Node.js yang Anda dapatkan dari dalam Node.js itu sendiri. Untungnya, ada alat yang fantastis untuk mengelola Node.js yang disebut nvm. Utility yang bisa mengelola versi Node.js yang telah Anda instal secara lokal.

Salah satu aspek yang menakjubkan dari nvm adalah bahwa ia mengelola versi Node.js, bukan hanya upgrade. Ini berarti Anda dapat memiliki versi terbaru Node.js, versi-versi dari semua rilis LTS, serta sejumlah versi lain yang ingin Anda gunakan atau uji.

Dalam tutorial singkat ini, kita akan melihat cara menginstal nvm, lalu bagaimana menggunakannya sebagai version manager untuk Node.js. Setelah selesai tutorial, Anda akan siap untuk mengambil langkah berikutnya dengan Node.js.

Panduan ini mencakup instalasi nvm di macos dan Linux - perhatikan bahwa semua versi Node.js mungkin tidak mendukung setiap versi macos atau Linux.

### Langkah 1: Panduan cepat (TL;DR) instalasi node.js dengan nvm

Inilah panduan singkat, menyoroti langkah-langkah utama:

Download the nvm install script via cURL:

	$	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

	% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
									Dload  Upload   Total   Spent    Left  Speed
	100 11329  100 11329    0     0   4213      0  0:00:02  0:00:02 --:--:--  4213
	=> Downloading nvm as script to '/home/wandyatmono/.nvm'

	=> Appending nvm source string to /home/wandyatmono/.bashrc
	=> bash_completion source string already in /home/wandyatmono/.bashrc
	=> Close and reopen your terminal to start using nvm or run the following to use it now:

	export NVM_DIR="/home/wandyatmono/.nvm"
	[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

Pastikan nvm telah terpasang dengan benar, dengan 

	$	nvm --version
	
Seharusnya mengembalikan versi nvm yang terpasang.

Instal versi Node.js yang Anda inginkan

Instal versi terbaru dengan

	$	nvm install node

Gunakan versi terbaru dengan

	$	nvm use node

Instal versi LTS terbaru dengan

	$	nvm install --lts

Gunakan versi LTS terbaru dengan 

	$	nvm use --lts

### Langkah 2 (Opsional): Pastikan sistem Anda memiliki compiler C ++ yang sesuai

Note: Karena platformnya masih fresh, maka C++ harus diinstall. Walau langkah pertama ini tidak diperlukan karena saya tidak menggunakan langkah kedua. Saya menggunakan langkah ke 1 yang lebih praktis.

Dalam beberapa kasus, seperti pada saat menginstal rilis Node.js dari source mereka atau menginstal versi Node.js sebelum 0.8.6, Anda harus memastikan bahwa sistem Anda telah memiliki C ++ build tool yang sesuai.

Untuk LTS dan rilis modern, Walau demikian, penting untuk memastikan bahwa semua dependenciestelah terpenuhi.

Di Linux, compiler C ++ akan bervariasi dari distribusi ke distribusi. Misalnya, pada Debian dan Ubuntu, Anda perlu menginstal 'build-tools' dan 'libssl-dev', tapi mungkin berbeda pada distribusi Linux Anda yang lain.

Untuk mendapatkan build-tools dan libssl-dev pada distribusi Debuan dan Ubuntu, Anda dapat menjalankan perintah berikut ini:

	$	sudo apt-get install build-essential
	
Instal paket build-essential - biarkan berjalan sampai selesai

	$	sudo apt-get install libssl-dev

Instal paket libssl-dev - juga biarkan yang ini berjalan sampai selesai

### Langkah 3: Download nvm dengan install script

Setelah Anda mendapatkan compiler C ++ yang tepat untuk sistem Anda, sekarang saatnya untuk menjalankan install-script nvm. Berikut adalah skrip installasi single-step untuk macOS maupun Linux. Anda punya pilihan cURL atau Wget tapi hasilnya akan yang sama saja.

Catatan: Jika sistem Linux Anda tidak memiliki cURL atau Wget, Anda dapat menjalankan `sudo apt-get install curl` and use the cURL method.

Menjalankan Install Script dengan cURL:

Untuk menginstal nvm dengan metode cURL, jalankan perintah berikut di terminal Anda:

	$	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

Menggunakan Install Script dengan Wget:

Untuk menginstal nvm dengan metode Wget, jalankan perintah berikut di terminal Anda:

	$	wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

### Langkah 4: Verifikasi bahwa nvm terinstall dengan benar

Setelah menjalankan skrip install dari Langkah 2, nvm seharusnya sudah berhasil diinstal. Untuk memastikan nvm siap dan berjalan di komputer Anda, Anda dapat mengujinya dengan perintah berikut:

	$	nvm --version

Perintah ini akan menghasilkan sesuatu seperti (meski tidak harus persis) sebagai berikut:

	$	nvm --version
	0.33.0

Perintah yang kita jalankan - akan memeriksa versi nvm yang terinstal. Versi nvm saat ini - mungkin akan beda di tiap komputer Anda!

### Langkah 5: Menggunakan nvm untuk mengelola Node.js

Selamat! Anda sekarang sudah mendapatkan nvm - alat untuk memudahkan Anda mengelola dan menukar versi Node.js yang telah Anda instal secara lokal. Sekarang, mari kita mulai dengan melakukan hal itu.

Instal versi Node.js terbaru

Untuk menginstal versi Node.js terbaru, Anda dapat menggunakan perintah berikut:

	$	nvm install node

Selanjutnya, untuk menggunakan versi Node.js di shell baru mana pun, Anda cukup menjalankan perintah penggunaan:

	$	nvm use node

Instal versi LTS Node.js terbaru

Untuk menginstal versi LTS terbaru dari Node.js, Anda dapat menjalankan perintah berikut:

	$	nvm install --lts

Dan untuk menggunakan versi LTS terbaru dari Node.js di shell baru, Anda cukup menjalankan perintah penggunaan:

	$	nvm use --lts

### Langkah 6: Mari bangun aplikasi, API, tools, dan yang lainnya dengan Node.js!

Sekarang Anda punya version manager fantastis untuk Node.js. Sudah waktunya untuk mulai membangun!

Kami punya beberapa sumber untuk membuat Anda kickstarted! Baik luas dan kedalaman Node.js dan ekosistem JavaScript yang cukup besar - selain alat pengembang seperti Modul 'NodeSource N|Solid and Certified', kami memiliki banyak tutorial, panduan, dan artikel untuk membantu Anda untuk kickstart dengan Node.js.

Jika Anda tertarik untuk menjaga agar kode Anda tetap bersih, mudah dipelihara, dan kolaboratif, perhatikan mengambil post kami 'using ESLint for linting your JavaScript applications'. Apakah anda tertarik untuk membangun aplikasi web dengan Node.js? Salah satu aspek yang paling menantang dari aplikasi web adalah keamanan - Anda dapat mempelajari praktik terbaik keamanan di Ekspres untuk mengunci aplikasi web Anda, untuk mencegah pelanggaran dan serangan. Atau, mungkin Anda ingin menyebarkan aplikasi Node.js Anda dengan Docker? Maka Anda pasti harus membaca artikel kami tentang dockerizing your Node.js applications.

Jadi, jika Anda ingin tetap berhubungan dengan ekosistem Node.js, Anda harus mengikuti @NodeSource di Twitter! Kami akan terus memperbarui berita penting dari proyek inti Node.js, tutorial Node.js yang segar dan berguna, dan banyak lagi.


Note:

Sekarang, yang terinstal di system seharusnya:

	nvm -> 0.33.0
	npm -> 5.5.1
	node latest ->  node v9.3.0
	node LTS ->  node v8.9.3

