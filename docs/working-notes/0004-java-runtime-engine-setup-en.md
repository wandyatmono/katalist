# 0004-java-runtime-engine-setup

Java Runtime Engine untuk Ubuntu adalah salah satu kebutuhan standard. Neo4j Database Engine adalah salah satu aplikasi besar yang membutuhkan JRE.
 
Saat ini Oracle sudah sampai pada release ke 9. Tetapi saya anggap cukup
dengan melakukan instalasi yang ke 8.

Petunjuk saya peroleh dari [liquid-web](https://www.liquidweb.com/kb/how-to-install-oracle-java-8-on-ubuntu-14-04-lts/)

## How to Install Oracle Java 8 on Ubuntu 14.04 LTS
##### Posted on June 5, 2015 by J. Mays

Pre-Flight Check
    -   These instructions are intended specifically for installing Oracle Java 8 on 
        Ubuntu 14.04 LTS.
    -   I’ll be working from a Liquid Web Core Managed Ubuntu 14.04 LTS server with 
        Apache and PHP installed, and I’ll be logged in as non-root user. If you need 
        more information then visit our tutorial on How to Add a User and Grant Root 
        Privileges on Ubuntu 14.04 LTS.

### Step #1: Add the WebUpd8 Team Personal Package Archive (PPA)

Add the PPA:

    $   sudo apt-add-repository ppa:webupd8team/java

Note: Personal Package Archives include unsupported packages and are untrusted by the 
primary Ubuntu branch. At the time of publication, the WebUpd8 Oracle Java PPA is just 
an installer (meaning it does not include any Oracle Java binaries, but will download 
and install them). Use this PPA at your own risk.

### Step #2: The Installation

As a matter of best practice we’ll update our packages:

    $   sudo apt-get update

Then let’s install Oracle Java 8 with the PPA installer:

    $   sudo apt-get install oracle-java8-installer

Be sure to accept the Oracle license!

### Step #3: Verify Installation

Now verify that Java is installed and is of version 1.8.x:

    $   java -version

Your result should be similar to:

    java version "1.8.0_45"
    Java(TM) SE Runtime Environment (build 1.8.0_45-b14)
    Java HotSpot(TM) 64-Bit Server VM (build 25.45-b02, mixed mode)

COMPLETED.