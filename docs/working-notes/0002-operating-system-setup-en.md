# 0002-operating-system-setup

Although the desktop I use for development is very old-fashioned,

    Processor       :   Intel® Core™2 Duo CPU P7450 @ 2.13GHz × 2 
    Memory          :   1.9 GiB
    Graphic         :   Mobile Intel® GM45 Express Chipset 
    Disk            :   77.1 GB.

Although it has been proven to work well, light and reliable,
Ubuntu 12.04.5 LTS Precise Pangolin 32bit, the pre-disaster OS that I use, is constrained by some important applications development aides (mainly Chrome) that no longer provides a new version for this OS.

Therefore I 'force myself' to choose Ubuntu 14.04.5 LTS Trusty Tahr 64bit as OS.

My installation is done by choosing the easiest way, by downloading the .iso DVD format from [official site of Ubuntu](http://releases.ubuntu.com/14.04/) and then creating the DVD installer and installing it as usual.

The problem occurs only when the OS has to recognize and install drivers for wireless network chips.

Solving:

[https://itsfoss.com/fix-no-wireless-network-ubuntu/](https://itsfoss.com/fix-no-wireless-network-ubuntu/)

How To Fix No Wireless Network In Ubuntu 14.04 and 14.10

First find out the network adapter in your system. 
You can refer to this article to find out make of wireless network adapter
in Linux. In fact, you can just check in Software Sources if there are any
additional drivers available for your system or not. If there are propriety
drivers available, this method will easily work for you. Also, you will need
the ISO image of the same Ubuntu version.

### Step 1:
Get the ISO image of Ubuntu. If you just had a fresh install, you must have
this ISO image in some other system or same system in another OS in dual boot.
Copy it to an external device such as USB or DVD. Just copy it, don’t burn it
as bootable USB.

Now boot in to Ubuntu and copy this Ubuntu ISO image to your home directory.

### Step 2:
Open a terminal (Ctrl+Alt+T) and use the following commands:

    sudo mkdir /media/cdrom
    cd ~
    sudo mount -o loop ubuntu-* /media/cdrom

Basically we just manually mounted the ISO image as if it was a CD.

### Step 3:
Go to Unity Dash and look for Software & Updates:

In the first tab Ubuntu Software, check the option of CD Rom with Ubuntu…
(di bagian paling bawah).

It will ask for your password and reload the software sources. 
Next is to go in Additional Drivers tab (tab terakhir) and select the
propriety driver and click on Apply Changes.

Once the drivers have been installed, you’ll see that Ubuntu now recognizes
the wireless networks in range.

### SELESAI.

