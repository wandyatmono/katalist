# 0012-get-jardikda-from-backups

Before making the seed project in / catalist, I will take the project `jardikda` from the backup on the external harddisk. Not just copy the directory `/AA-C/jardikda` but all the directories associated with the jardikda project. My copying is done with the help of `nautilus`.

All copies I put on `/home/wandyatmono/projects` and will be my source for constructing the seeds in the` katalist` project.

    ~/projects
        /AA-C
            /databases
            /jardikda
            /restapi

Then, I try to do a check on `projects/AA-C/jardikda` from the past projects (on 12.04 i386).

	$   cd /home/wandyatmono/projects/AA-C/jardikda
	$   ng -v

The result:

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

Means there is a mismatch between the @angular/cli that is global and that is in the project (local). The global v1.6.1, the local v1.0.0.

To fix it, I use the instructions from
https://stackoverflow.com/questions/43931986/how-to-upgrade-angular-cli-to-the-latest-version

The instructions are:

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

Of course I chose the second way. And what I do is as follows:

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

It worked. There is no warning message indicating a mismatch between the global @angular/cli and the local one.