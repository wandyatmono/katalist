# 0009-angular-cli-setup

I use the official site https://cli.angular.io/ as a source after
shown by a special tutorial video of Ng4 from CourseCo.
A series of tutorial videos published by CourseCo on Angular 4. Including how to upgrade to the latest version.

01-1493651919245_2977_How_to_Install_Angular_4__g13I7Xy1PtI.mp4

    $ npm install -g @ angular / cli

Lots of errors. In the second attempt, the error slightly decreases. And after I met, there is an important message as follows:

    npm ERR! network This is a problem related to network connectivity.
    npm ERR! network In most cases you are behind a proxy or have bad network settings.
    npm ERR! network
    npm ERR! network If you are behind a proxy, please make sure that the
    npm ERR! network 'proxy' config is set properly. See: 'npm help config'

I did get internet access from mobile USB thetering, there is a big possibility of network using proxy and not allowed by Ubuntu. Then I try with mobile wifi thetering.

	$   npm install -g @angular/cli

    /home/wandyatmono/.nvm/versions/node/v8.9.3/bin/ng -> /home/wandyatmono/.nvm/versions/node/v8.9.3/lib/node_modules/@angular/cli/bin/ng

	> node-sass@4.7.2 install /home/wandyatmono/.nvm/versions/node/v8.9.3/lib/node_modules/@angular/cli/node_modules/node-sass
	> node scripts/install.js

	Downloading binary from https://github.com/sass/node-sass/releases/download/v4.7.2/linux-x64-57_binding.node
	Download complete..] - :
	Binary saved to /home/wandyatmono/.nvm/versions/node/v8.9.3/lib/node_modules/@angular/cli/node_modules/node-sass/vendor/linux-x64-57/binding.node
	Caching binary to /home/wandyatmono/.npm/node-sass/4.7.2/linux-x64-57_binding.node

	> uglifyjs-webpack-plugin@0.4.6 postinstall /home/wandyatmono/.nvm/versions/node/v8.9.3/lib/node_modules/@angular/cli/node_modules/webpack/node_modules/uglifyjs-webpack-plugin
	> node lib/post_install.js


	> node-sass@4.7.2 postinstall /home/wandyatmono/.nvm/versions/node/v8.9.3/lib/node_modules/@angular/cli/node_modules/node-sass
	> node scripts/build.js

	Binary found at /home/wandyatmono/.nvm/versions/node/v8.9.3/lib/node_modules/@angular/cli/node_modules/node-sass/vendor/linux-x64-57/binding.node
	Testing binary
	Binary is fine
	npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules/@angular/cli/node_modules/fsevents):
	npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

	+ @angular/cli@1.6.1
	added 977 packages in 179.259s

Test!

	ng test
	node_modules appears empty, you may need to run `npm install`

Ok!

	ng --version

		_                      _                 ____ _     ___
	   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
	  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
	 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
	/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
				    |___/
		
	Angular CLI: 1.6.1
	Node: 8.9.3
	OS: linux x64
	Angular: 
	...

So, my system composition is:

	nvm -> 0.33.0
	npm -> 5.5.1
	node latest ->  node v9.3.0
	node LTS ->  node v8.9.3
	angular-cli -> v1.6.1

