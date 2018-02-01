# 0010-git-setup

Setiap kali terjadi disaster (terhadap mass storage) sudah dapat dipastikan akan banyak arsip yang penting untuk penjejakan dan penyegaran ingatan terhadap proyek yang lama dan yang sedang dikerjakan akan hilang tak berbekas.

Berdasarkan pengalaman tersebut, saya harus berusaha keras untuk mengamankan setiap produk yang masih dalam proses dan seluruh jejak-jejaknya dengan sebaik-baiknya.

mengeraskan hati untuk bersedia mempelajari version-control yang terbaik. 

Dari sisi teknologi, saya menetapkan untuk mempelajari git terbitan 
https://git-scm.com/. Git yang digunakan oleh banyak factory dan project terkenal seperti Google, facebook, microsoft, twitter, linked-in, netflix, android, linux, gnome, ecclipse, dsb.

Instalasi git

https://askubuntu.com/questions/579589/upgrade-git-version-on-ubuntu-14-04

You need to add the Git Maintainers repository in order to get the latest Git 
version.

Please run these commands in order:

    $   sudo add-apt-repository ppa:git-core/ppa
    $   sudo apt-get update
    $   sudo apt-get install git

Then, check the version of the installed Git:

    $   git --version
    git version 2.15.1

It's not always necessary to remove the existing Git before upgrading it, 
but if you run into any problems, do the following and then repeat the steps 
mentioned above: 

    sudo apt-get remove git

Note:

    Version yang di dapat adalah git version 2.15.1

Saya dapat berharap, yang terpasang adalah git yang sudah stable. Karena 
The most current stable version of Git for Ubuntu dapat di-check di

    https://launchpad.net/~git-core/+archive/candidate

Catatan: Sebagai sumber belajar, saya menggunakan tutorial di https://www.petanikode.com/tutorial/git.

