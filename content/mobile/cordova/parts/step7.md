## Step 7: Open App in Editor


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