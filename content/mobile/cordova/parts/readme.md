# Integrating Rave With Cordova

Rave provides support for Cordova applications that can be seamlessly integrated, in order to process payments. You can accept credit card, debit card and bank account payments directly on your application with Rave. Cordova is a development environment that enables you to create apps for different platforms e.g. iOS, Android and Windows. In this section, we’ll walk you through the processes involved and the steps to completely integrate Rave into your Cordova App.

If you do not have a  Rave account yet, now would be a good time to Sign-up [here](https://flutterwave.com/)




## **I****nstallation** **Requirements**

****For this integration, you’ll need Node and Git installed on your system. If you don’t have them, you can download and install from here:

[**Download | Node.js**](https://nodejs.org/en/download/)
[**Git - Downloads**](https://git-scm.com/downloads)


## **Step** ******1: Install the Cordova** **M****odule** **U****sing Node’s npm** **U****tility.**

****The Cordova module will automatically be downloaded by the npm utility.

**For OS X and Linux**
Write the following command in the command line, then hit enter on your keyboard.


    
    sudo npm install -g cordova
    

**On Windows**
Write the following command in your command prompt, and hit enter on your keyboard to install Cordova globally on your machine.



    
    npm install -g cordova
    

Next, create an application folder to store your project files on the Desktop then change into the project folder


    cd Desktop
    mkdir Cordova-Rave
    cd Cordova-Rave

 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D240AF2A5C6E906EAC4E921F513B0833307F0A58F2FF45FD0E64DA52C21755C0_1522841846226_cordovaCmd1.jpg)



## **Step** ******2: Create a** **C****ordova** **P****roject**

****Inside the project directory (Cordova-Rave), run the Cordova create script to create a new Cordova project in the project directory:


    cordova create hello com.example.hello HelloWorld


This would create a project folder called  `hello`  inside the Cordova-Rave folder on the desktop.
By default, the Cordova create script generates a skeletal web-based application whose home page is the project's `www/index.html` file in the  `hello`  folder.


## **Step** ******3:** **A****dd your** **P****referred** **B****rowser to the** **P****roject.**

Continuing from the last cmd image above, simply change directory from the Cordova-Rave folder into the projects  `hello`  folder and run 



    cordova platform add browser


To add a browser to your project, wait for the installation to finish.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_D240AF2A5C6E906EAC4E921F513B0833307F0A58F2FF45FD0E64DA52C21755C0_1522844777691_cordovaCmd2.jpg)



## **Step** ******4: Run** **t****he Browser**

To run the browser, simply run the following command in the same directory (hello).


    cordova run browser or cordova run 

This command will launch your browser to http://localhost:8000/index.html which will read from the homepage of your project.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_D240AF2A5C6E906EAC4E921F513B0833307F0A58F2FF45FD0E64DA52C21755C0_1523692408607_chome.jpg)
![](https://d2mxuefqeaa7sj.cloudfront.net/s_D240AF2A5C6E906EAC4E921F513B0833307F0A58F2FF45FD0E64DA52C21755C0_1523692408632_cmd-cordova.jpg)



## **Step** ******5: Install Rave Payment**

****To install Rave, you’ll have to navigate back to your project folder but since the project is already running in `cmd`, you won’t be able to navigate back at least, not in the same window (this is why we require Git). Hence, right click on your Desktop and select “Git Bash Here” it’ll open a bash window for you to navigate into the **Cordova-Rave > hello** folder and then run this command to install Rave payment


    //  ~/Desktop/Cordova-Rave
    
    cd hello
    
    // ~/Desktop/Cordova-Rave/hello
    
    $ npm install cordova-rave
    


This installs the Rave payment package to your project. Having installed it, let’s go ahead and configure it.


## **Step** ******6: Configure Rave Payment**

To configure the Rave payment, navigate to your terminal and run


    // ~/Desktop/Cordova-Rave/hello
    
    cd node_modules/cordova-rave && npm start 
    

 and hit enter on your keyboard and it’ll start running the config. 
 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D240AF2A5C6E906EAC4E921F513B0833307F0A58F2FF45FD0E64DA52C21755C0_1522853646080_CordovaNpmStart.jpg)


Note:  After the above process you will be prompted for your Rave payment public key and other required fields:


    PBFPubKey:  FLWPUBK-20795b3bfe02a5af632c8901d90e7591-X
    amount:  100
    customer_email:  roguestars2@gmail.com
    currency:  NGN
    country:  NG
    custom_title:
    custom_description:
    redirect_url:  https://www.google.com
    custom_logo:
    liveMode:  No


> 
> Note: These are exemplary data, while setting up your project, you’ll have to use the appropriate data  provided on your Rave dashboard
> 

When you are done answering all prompts,  run the build command and wait for the build to execute.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_D240AF2A5C6E906EAC4E921F513B0833307F0A58F2FF45FD0E64DA52C21755C0_1522853632942_CordovarunBuild.jpg)


 
This will create a  ***rave.js***  ******file in your **www** directory. Link to this file in your root index.html file. Should you modify your  `config.json`  at anytime, you will need to run the build again.
Next, in your code editor, open your project folder and navigate to the  `index.html`  file, open the file and modify it to add a pay button that will launch Rave’s pay modal.


## **Step** ******7: Open** **A****pp in** **E****ditor**


![](https://files.readme.io/f4c5292-sc13.PNG)


**Navigate to the index.html file inside the www directory**

![](https://files.readme.io/6ba3410-sc_14.png)


**Edit the index.html file with the following code:**


    <!DOCTYPE html>
    <!--
        Licensed to the Apache Software Foundation (ASF) under one
        or more contributor license agreements.  See the NOTICE file
        distributed with this work for additional information
        regarding copyright ownership.  The ASF licenses this file
        to you under the Apache License, Version 2.0 (the
        "License"); you may not use this file except in compliance
        with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
        Unless required by applicable law or agreed to in writing,
        software distributed under the License is distributed on an
        "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
        specific language governing permissions and limitations
        under the License.
    -->
    <html>
        <head>
            <!--
            Customize this policy to fit your own app's needs. For more guidance, see:
                https://github.com/apache/cordova-plugin-whitelist/blob/master/README.md#content-security-policy
            Some notes:
                * gap: is required only on iOS (when using UIWebView) and is needed for JS->native communication
                * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
                * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
                    * Enable inline JS: add 'unsafe-inline' to default-src
            -->
            <meta name="format-detection" content="telephone=no">
            <meta name="msapplication-tap-highlight" content="no">
            <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
            <link rel="stylesheet" type="text/css" href="css/index.css">
            <title>Hello World</title>
        </head>
        <body>
            <div class="app">
                <h1>Apache Cordova</h1>
                <div id="deviceready" class="blink">
                    <p class="event listening">Connecting to Device</p>
                    <p class="event received">Device is Ready</p>
                    <button class="btn btn-primary" type="button" onclick="pay()">Pay Now</button>
                </div>
            </div>
            
            <script type="text/javascript" src="cordova.js"></script>
            <script type="text/javascript" src="js/index.js"></script>
            <script type="text/javascript" src="rave.js"></script>        
            <script>
                function pay(){
                    initRavePay({
                        'PBFPubKey': 'FLWPUBK-d9dda4676e150ec83eac4da33d8a2f4c-X',
                        'amount': '0',
                        'currency': 'NGN',
                        'country': 'NG',
                        'customer_email': 'user@example.com',
                        'customer_firstname': 'Jon',
                        'customer_lastname': 'Snow',
                        'pay_button_text': 'Pay now',
                        'custom_title': '',
                        'custom_description': '',
                        'redirect_url': 'https://www.google.com',
                        'custom_logo': '',
                        'txref': 'CD-102297-RV098299'
                    });
                }
            </script>
        </body>
    </html>

**Save file**
Next, Save the file and run on your Cordova browser again or simply open your `index.html` file on your browser, you should get this output with the button:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_D240AF2A5C6E906EAC4E921F513B0833307F0A58F2FF45FD0E64DA52C21755C0_1523692109856_cmd-cordova.jpg)
![](https://d2mxuefqeaa7sj.cloudfront.net/s_D240AF2A5C6E906EAC4E921F513B0833307F0A58F2FF45FD0E64DA52C21755C0_1523692109802_cordovaHome.jpg)






![](https://d2mxuefqeaa7sj.cloudfront.net/s_D240AF2A5C6E906EAC4E921F513B0833307F0A58F2FF45FD0E64DA52C21755C0_1522855130659_cordovaHPage.jpg)


**Launch Modal**

Click on the Pay button you created to launch the Rave Modal


![](https://d2mxuefqeaa7sj.cloudfront.net/s_D240AF2A5C6E906EAC4E921F513B0833307F0A58F2FF45FD0E64DA52C21755C0_1522855149303_COrdovaModal.jpg)


You have successfully implemented Rave payment on your Cordova App, you can start receiving payments now. 




















































