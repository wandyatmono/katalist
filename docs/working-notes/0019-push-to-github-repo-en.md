# 0019-push-to-github

### DESIGN

1. Create a repository in Github.
2. Push local repository to remote repository

	> `Note:`
	> Of course, documentation file 0019 is not readable in Github at this checkpoint. Still untracked.

### IMPLEMENTATION I: Create a repository in Github.

1. Signin to Github and be on the home page (as per account).

2. Select `New repository` in pulldown-menu` ** + ** `in the top right corner of any page (or click the` New repository` button if it is in the home-page).

3. Enter the project name According to Github, preferably with short sentences and easy to remember.

		katalist

	And its description,

		Opensource Project for Education

	Then, click the `Create repository` button at the bottom of the page.

	> Before `Create repository`, it can be determined whether the repository will be made` public` or `private`. Visible to the public or only to yourself or to a specific person whom we share the right to contribute. For second choice only for paid account.
	> To avoid errors, I did not initialize Github-repo with a README file, license, or gitignore. I will add the files after push local-repository.

	[![Figure 0019-1: Github New Repository Form Page](./images/0019-1.png)](./images/0019-1.png)<br>
    <center><i>Figure 0019-1: Github New Repository Form Page</i></center>

### IMPLEMENTATION II: Push local repository to remote repository

1. After the repository is formed, we will be faced with some hints. Especially the instructions for configuring our local repo and command to push local repository to the remote repository we just created.

		$   git remote add origin https://github.com/wandyatmono/katalist.git
		$   git remote -v
		origin	https://github.com/wandyatmono/katalist.git (fetch)
		origin	https://github.com/wandyatmono/katalist.git (push)

2. Push local repository to the remote repository we have previously mentioned as the origin above.

		$   git push -u origin master
		Username for 'https://github.com': wandyatmono
		Password for 'https://wandyatmono@github.com': 
		Counting objects: 105, done.
		Delta compression using up to 2 threads.
		Compressing objects: 100% (101/101), done.
		Writing objects: 100% (105/105), 1.26 MiB | 48.00 KiB/s, done.
		Total 105 (delta 8), reused 0 (delta 0)
		remote: Resolving deltas: 100% (8/8), done.
		To https://github.com/wandyatmono/katalist.git
		* [new branch]      master -> master
		Branch 'master' set up to track remote branch 'master' from 'origin'.

	[![Figure 0019-2: Repository of Katalist](./images/0019-2.png)](./images/0019-2.png)<br>
    <center><i>Figure 0019-2: Repository of Katalist</i></center>