# 0010-git-setup

Whenever a disaster occurs (to mass storage) it is certain that many archives that are important for tracking and refreshing the memory of the old and ongoing project will be lost without trace.

Based on that experience, I have to work hard to secure every product that is still in process and all its traces as well as possible.

hardened to be willing to learn the best version-control.

From the technological side, I set out to study git issues
https://git-scm.com/. Git used by many famous factory and project like Google, facebook, microsoft, twitter, linked-in, netflix, android, linux, gnome, ecclipse, and so on.

Installing git

https://askubuntu.com/questions/579589/upgrade-git-version-on-ubuntu-14-04

You need to add the Git Maintainers repository in order to get the latest Git 
version.

Please run these commands in order:

    sudo add-apt-repository ppa:git-core/ppa
    sudo apt-get update
    sudo apt-get install git

Then, check the version of the installed Git:

    git --version

It's not always necessary to remove the existing Git before upgrading it, 
but if you run into any problems, do the following and then repeat the steps 
mentioned above: 

    sudo apt-get remove git

Note:

    Version yang di dapat adalah git version 2.15.1

Saya dapat berharap, yang terpasang adalah git yang sudah stable. Karena 
The most current stable version of Git for Ubuntu dapat di-check di

    https://launchpad.net/~git-core/+archive/candidate
