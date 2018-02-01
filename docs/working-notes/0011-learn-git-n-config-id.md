# 0011-learn-git-n-config

Sumber utama : https://www.petanikode.com/git-install/

Setelah selesai instalasi (globally -g), selanjutnya melakukan pemeriksaan apakah git sudah terinstal dengan benar. Yaitu denganmelakukan pemeriksaan versi dari git.

Selanjutnya, konfigurasi awal yang harus dilakukan adalah:

    $   git config --global user.name "Joko Wandyatmono"
    $   git config --global user.email "Emond.Swd@gmail.com"

Periksa

    $   git config --list
    user.name=Joko Wandyatmono
    user.email=Emond.Swd@gmail.com

Intialisasi proyek Katalist

Direktori untuk proyek ini dibuat dengan nama /katalist dan ditempatkan di direktori khusus untuk Kabupaten Purworejo - Jawa Tengah - Indonesia (/home/wandyatmono/projects/AA-C/) yang telah saya sediakan sebelumnya.

    $   cd /home/wandyatmono/projects/AA-C
    $   mkdir katalist
    #   cd katalist
    $   git init .
    Initialized empty Git repository in /home/wandyatmono/projects/AA-C/katalist/

Note: . adalah working directory.

    $   git status
    On branch master

    No commits yet

    nothing to commit (create/copy files and use "git add" to track)

Dokumentasi belajar git selanjutnya akan tercermin di dokumentasi langkah-langkah pengembangan berikutnya.







.gitignore

Mendefinisikan file/directory yang tidak ikut versioning

Contoh:

    # ini komentar
    *.[oa]             # abaikan file *.o dan *.a
    *~                 # abaikan file yang diakhiri dengan ~
    *.bak              # abaikan file dengan ekstensi .bak
    !file.bak          # pengecualian, file.bak tidak diabaikan
    /css               # hanya mengabaikan file didalam folder css, 
                    # foldernya didalamnya tidak
    test/              # abaikan semua file didalam folder test/
    doc/*.txt          # abaikan doc/notes.txt, 
                    # tapi tidak doc/server/arch.txt

    Petunjuk: https://haifahrul.wordpress.com/2015/11/11/ignoring-files-di-git-
    dengan-gitignore/

Yang saya lakukan:

    $   gedit .gitignore

Isi:

    #   .gitignore sendiri di-ignored.
    .gitignore
    #   abaikan semua file di dalam folder docs.
    docs/

Git status:

    $   git status
    On branch master

    No commits yet

    nothing to commit (create/copy files and use "git add" to track)

