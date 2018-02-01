# 0008-node-nvm-npm-setup

First, the installation of nvm (Node Version Manager)

The guide is obtained from http://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/

## TUTORIAL INSTALLATION NODE JS USING NVM
##### Tierney Cyren - in How To on Feb 16 2017

Like most programming languages, platforms, or utility tools, the first step to use them is to install them. Many of these software are usually equipped with a quick way to upgrade when a new version is available.

By default, there is no way to upgrade the version of Node.js you get from within Node.js itself. Fortunately, there is a fantastic tool for managing Node.js called nvm. Who can manage the Node.js version you have installed locally.

One amazing aspect of nvm is that it manages the Node.js version, not just the upgrades. This means you can have the latest version of Node.js, the latest version of all LTS releases, as well as a number of other versions you want to use or test.

In this short tutorial, we'll see how to install nvm, then how to use it as the version manager for Node.js. Once you've finished the tutorial, you'll be ready to take the next step with Node.js.

This guide includes nvm installation on macos and Linux - note that all versions of Node.js may not support every macOS or Linux version.

## Step 1: The Quick Guide (TL; DR) installation of node.js with nvm

Here's the abbreviated guide, highlighting the major steps:

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

Ensure that nvm was installed correctly with 

	$	nvm --version
	
which should return the version of nvm installed.

Install the version of Node.js you want

Install the latest version with 

	$	nvm install node

Use the latest version with 

	$	nvm use node

Install the latest LTS version with 

	$	nvm install --lts

Use the latest LTS verison with 

	$	nvm use --lts

### Step 2 (Optional): Ensure your system has the appropriate C++ compiler

Note: Because the platform is still fresh, then C ++ must be installed. Although this first step is not necessary because I do not use the second step. I use step 1 which is more practical.

In some cases, such as installing Node.js releases from their sources or installing Node.js versions before 0.8.6, you should make sure that your system already has the appropriate C ++ build tool.

For LTS and modern releases, however, it is important to ensure that all dependencies have been met.

In Linux, C ++ compilers will vary from distribution to distribution. For example, on Debian and Ubuntu you need to install 'build-tools' and 'libssl-dev', but may be different on your other Linux distribution.

To get build-tools and libssl-dev on Debian and Ubuntu distributions, you can run the following commands:

	$	sudo apt-get install build-essential
	
Install the build-essential package - let it run until it's completion

	$	sudo apt-get install libssl-dev

Install the libssl-dev package - also let this one run to completion

### Step 3: Download nvm with the install script

Once you get the right C ++ compiler for your system, it's time to run the nvm install-script. Here is a single-step installation script for macOS and Linux. You have a choice of cURL or Wget but the result will be the same.

Note: If your Linux system doesn't have either cURL or Wget, you can run `sudo apt-get install curl` and use the cURL method.

Running the Install Script with cURL:

To install nvm with the cURL method, run the following command in your terminal:

	$	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

Using the Install Script with Wget:

To install nvm with the Wget method, run the following command in your terminal:

	$	wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

### Step 4: Verify that nvm was Properly installed

After running the install script from Step 2, nvm should have successfully installed. To ensure that nvm is ready and running on your machine, you can test it with the following command:

	$	nvm --version

This command will return something like (though not necessarily exactly) the following:

	$	nvm --version
	0.33.0

The command that we run - will check the nvm version installed. Current nvm version - may be different on each of your computers!

### Step 5: Using nvm to manage Node.js

Congratulations! You've now got nvm - a tool to easily allow you to manage and swap out the versions of Node.js you've got installed locally. Now, let's get you started with doing just that.

Install the latest Node.js version

To install the latest available version of Node.js, you can use the following command:

	$	nvm install node

Next, to use that version of Node.js in any new shell, you can simply run the use command:

	$	nvm use node

Install the latest Node.js LTS version

To install the latest available LTS version of Node.js, you can run the following command:

	$	nvm install --lts

And to use that latest LTS version of Node.js in any new shell, you can simply run the use command:

	$	nvm use --lts

### Step 6: Go build applications, APIs, tools, and more with Node.js!

Now you have a fantastic version manager for Node.js. It's time to start building!

We have several sources to get you kickstarted! Both the breadth and depth of Node.js and a sizable JavaScript ecosystem - in addition to developer tools like 'NodeSource N|Solid and Certified Modules', we have a lot of tutorials, guides and articles to help you to kickstart with Node.js.

If you are interested in keeping your code clean, maintainable, and collaborative, please note taking our post 'using ESLint for linting your JavaScript applications'. Are you interested in building web apps with Node.js? One of the most challenging aspects of web apps is security - you can learn best security practices on Express to lock your web app, to prevent violations and attacks. Or, maybe you want to deploy your Node.js app with Docker? Then you should definitely read our article about dockerizing your Node.js applications.

So if you want to stay in touch with the Node.js ecosystem, you should follow @NodeSource on Twitter! We will continue to update important news from Node.js core projects, fresh and useful Node.js tutorials, and more.


Note:

Now, what is installed in the system should be:

	nvm -> 0.33.0
	npm -> 5.5.1
	node latest ->  node v9.3.0
	node LTS ->  node v8.9.3

