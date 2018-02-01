# 0011-learn-git-n-config

Primary source: https://www.petanikode.com/git-install/

After installation (globally -g), then check whether git is installed correctly. That is by doing a version check of git.

Furthermore, the initial configuration to do is:

    $   git config --global user.name "Joko Wandyatmono"
    $   git config --global user.email "Emond.Swd@gmail.com"

Check

    $   git config --list
    user.name=Joko Wandyatmono
    user.email=Emond.Swd@gmail.com

Intialization of the Katalist project

The directory for this project is created under the name /katalist and placed in a special directory for Purworejo - Central Java - Indonesia (/home/wandyatmono/projects/AA-C/) that I have provided previously.

    $   cd /home/wandyatmono/projects/AA-C
    $   mkdir katalist
    #   cd katalist
    $   git init .
    Initialized empty Git repository in /home/wandyatmono/projects/AA-C/katalist/

Note: . is working directory.

    $   git status
    On branch master

    No commits yet

    nothing to commit (create/copy files and use "git add" to track)

The future git documentation will be reflected in the documentation of subsequent developmental steps.