# AR_DOA

School Project at Bonch-Bruevich Saint Petersburg State University of Telecommunications (SPBSUT) . 
Russian: Санкт-Петербургский государственный университет телекоммуникаций (СПбГУТ) . 

## Goal

The goal was to make an AR application who related on DOA System . 

What is DOA ?
You can read about it [here (Russian)](www.sut.ru/doci/nauka/review/20174/64-70.pdf) or [here (English)]() .

## Examples

On this example, the text of the application is fetched by a REST Api (provided by handle.net, you can also use doi.org) . 
The API request the GHR (Global Handler Registery), who request itself a LHR (Local Handler Registery).

Screenshot of the Json provided by the REST Api in our case:

![RESTAPI](https://image.noelshack.com/fichiers/2019/16/3/1555505731-screenshot-2019-04-16-at-01-39-28.png)

![ARDemo](https://cdn.discordapp.com/attachments/539748907119542275/568073721147817996/mPRR29ohiA30hj1LWTn4u7CkL42FRlmoSH1wEngfvYcL8XWmQtVkPyQatajmDqrK02kqlRjEgzV1q1w9nSS7CtawinWsZC2rWcK1.png)

## Special thanks

Mahmood Albahri - Teacher of DOA - IoT in СПбГУТ.
СПбГУТ to grand us access to the GHR of Russia.

## Install

Libraries used:
[ViroAR by ViroMedia](https://viromedia.com/viroar)

Prerequisites:
Android -> An ARCore supported device
iOS -> iOS Device with A9 chip or higher and running iOS 11 or higher.


Make sure to have npm and node installed on your pc

MACOS:
https://blog.teamtreehouse.com/install-node-js-npm-mac

LINUX:
https://blog.teamtreehouse.com/install-node-js-npm-linux

WINDOWS:
https://blog.teamtreehouse.com/install-node-js-npm-windows

--------------------------------------------------------
Register into ViroMedia and generate a new API Key.  
Edit `App.js` under your project . 
Download the ViroMedia test bed app:  

iOS:
https://itunes.apple.com/us/app/viro-media/id1163100576?mt=8

Android:
https://play.google.com/store/apps/details?id=com.viromedia.viromedia


Get Viromedia  on your mobile, then create an account.

ANDROID:
https://play.google.com/store/apps/details?id=host.exp.exponent&hl=fr

IOS:
https://itunes.apple.com/us/app/expo-client/id982107779?mt=8

#Init App
After clone, run the command:
<code>npm install</code>

#Start App
Run the command: <code>expo start</code>

