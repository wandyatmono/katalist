# 0012-get-jardikda-from-backups

Sebelum pembuatan project seed di /katalist, saya akan mengambil proyek `jardikda` dari backup yang ada di external harddisk. Bukan sekedar menyalin direktori `/AA-C/jardikda` tetapi semua direktori yang terkait dengan proyek jardikda. Penyalinan saya lakukan dengan bantuan `nautilus`.

Semua salinan saya letakan di `/home/wandyatmono/projects` dan akan menjadi sumber saya dalam mengkonstruksi seed di proyek `katalist`.

    ~/projects
        /AA-C
            /databases
            /jardikda
            /restapi

Kemudian, Saya mencoba untuk melakukan pemeriksaan ke `projects/AA-C/jardikda` yang berasal dari projects yang lalu (di 12.04 i386) tersebut.

	$   cd /home/wandyatmono/projects/AA-C/jardikda
	$   ng -v

Hasilnya:

    Your global Angular CLI version (1.6.1) is greater than your local
	version (1.0.0). The local Angular CLI version is used.

	To disable this warning use "ng set --global warnings.versionMismatch=false".
		_                      _                 ____ _     ___
	   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
	  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
	 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
	/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
				    |___/
	@angular/cli: 1.0.0
	node: 8.9.3
	os: linux x64
	@angular/animations: 4.3.3
	@angular/common: 4.3.0
	@angular/compiler: 4.3.0
	@angular/core: 4.3.0
	@angular/forms: 4.3.0
	@angular/http: 4.3.0
	@angular/platform-browser: 4.3.0
	@angular/platform-browser-dynamic: 4.3.0
	@angular/router: 4.3.0
	@angular/cli: 1.0.0
	@angular/compiler-cli: 4.3.0

Berarti ada ketidak-sesuaian antara @angular/cli yang global dan yang ada di project (local). Yang global v1.6.1, yang local v1.0.0.

Untuk memperbaikinya, saya menggunakan petunjuk dari https://stackoverflow.com/questions/43931986/how-to-upgrade-angular-cli-to-the-latest-version

Petunjuknya begini:

	In order to update the angular-cli package installed globally in your system, you need to run:

        $   npm uninstall -g angular-cli
        $   npm cache clean
        $   npm install -g @angular/cli@latest
	
    Depending on your system, you may need to prefix the above commands with sudo.

	Also, most likely you want to also update your local project version, because inside your project directory it will be selected with higher priority than the global one:

        $   rm -rf node_modules
        $   npm uninstall --save-dev angular-cli
        $   npm install --save-dev @angular/cli@latest
        $   npm install

	thanks grizzm0 for pointing this out on GitHub.

Tentu saja saya memilih cara yang kedua. Dan yang saya lakukan adalah sebagai berikut:

	$   npm uninstall @angular/cli
	$   npm cache clean
	$   npm cache verify
	$   npm install --save-dev @angular/cli@latest
	$   npm install
	$   ng -v

		_                      _                 ____ _     ___
	   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
	  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
	 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
	/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
	 			    |___/
		
	Angular CLI: 1.6.1
	Node: 8.9.3
	OS: linux x64
	Angular: 4.4.6
	... animations, common, compiler, compiler-cli, core, forms
	... http, platform-browser, platform-browser-dynamic, router
	... tsc-wrapped

	@angular/cli: 1.6.1
	@angular-devkit/build-optimizer: 0.0.36
	@angular-devkit/core: 0.0.22
	@angular-devkit/schematics: 0.0.42
	@ngtools/json-schema: 1.1.0
	@ngtools/webpack: 1.9.1
	@schematics/angular: 0.1.11
	@schematics/schematics: 0.0.11
	typescript: 2.2.2
	webpack: 3.10.0

Berhasil. Sudah tidak ada warning message yang menunjukkan adanya ketidak-sesuaian antara @angular/cli yang global dengan yang local.