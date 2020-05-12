![Not maintened](https://img.shields.io/maintenance/no/2019)

# AR_DOA

School Project at Bonch-Bruevich Saint Petersburg State University of Telecommunications (SPBSUT) . 

Russian: Санкт-Петербургский государственный университет телекоммуникаций (СПбГУТ) . 

## Goal

The goal was to make an AR application who related on DOA System . 

What is DOA ?
You can read about it [here in Russian](https://github.com/BLKKKBVSIK/AR_DOA/tree/master/doc/DOA-IoT-Russian.pdf) or [here in English](https://github.com/BLKKKBVSIK/AR_DOA/tree/master/doc/DOA-IoT-English.pdf) .

## Examples

On this example, the text of the application is fetched by a REST Api (provided by handle.net, you can also use doi.org).  
The API request the GHR (Global Handler Registery), who request itself a LHR (Local Handler Registery).

Screenshot of the Json provided by the REST Api in our case:

![RESTAPI](https://image.noelshack.com/fichiers/2019/16/5/1555626920-68747470733a2f2f696d6167652e6e6f656c736861636b2e636f6d2f66696368696572732f323031392f31362f332f313535353530353733312d73637265656e73686f742d323031392d30342d31362d61742d30312d33392d32382e706e67.png)

Demo of the fonctionnal application requesting the API of the GHR to fetch previously showed data:

![ARDemo](https://thumbs.gfycat.com/WatchfulCalmAngelwingmussel-size_restricted.gif)

## Special thanks

Mahmood Albahri - Teacher of DOA - IoT in СПбГУТ . 

СПбГУТ to grand us access to the GHR of Russia . 

## Install

Wanna try the app ?  
See the [release](https://github.com/BLKKKBVSIK/AR_DOA/releases)

The release is Android only since i don't own an Apple Developer account.

### Prerequisites:

Libraries used:  
[ViroAR by ViroMedia](https://viromedia.com/viroar)

Android -> An ARCore supported device  
iOS -> iOS Device with A9 chip or higher and running iOS 11 or higher  


Make sure to have npm and node installed on your pc . 

MACOS:  
https://blog.teamtreehouse.com/install-node-js-npm-mac

LINUX:  
https://blog.teamtreehouse.com/install-node-js-npm-linux

WINDOWS:  
https://blog.teamtreehouse.com/install-node-js-npm-windows

--------------------------------------------------------


This is deprecated since Viro is going [open source](https://blog.viromedia.com/viro-is-going-open-source-be9da0b43328).

~~Register into ViroMedia and generate a new API Key Viro  
Edit `App.js` under your project~~

Edit `HelloWorldSceneAR.js` in the `js` folder, and update the `_onClicked` fonction to put the link of the result Json of your handler.


If you need to modify your handler manually, you can use the Handler.net tools:

http://handle.net/download_hnr.html

http://handle.net/hnr_documentation.html

http://handle.net/proxy_servlet.html


Download the ViroMedia testbed app:

iOS:
https://itunes.apple.com/us/app/viro-media/id1163100576?mt=8

Android:
https://play.google.com/store/apps/details?id=com.viromedia.viromedia

Now, make sure ngrok is also installed and run the command `npm install` .

After the installation is completed you can run `npm start`, the ngrok link should appear in the console.
You just have to copy it to the ViroMedia testbed app.

