# Integrating Rave with React

Rave allows you to receive local and international payments via card, bank account, and USSD. The beauty of having these different payment options is that it lets your customers pay you seamlessly.
This section will walk you through the steps you can take to integrate Rave with your React application. [React](https://reactjs.org/) is a JavaScript library used to build user interfaces. When you are through with this integration, you should be able to do the following:




1. Setup a test (sandbox) and live account on Rave.
2. Retrieve your public and secret key.
3. Successfully integrate Rave on any React project or application.
4. Successfully accept payments from your customers using Rave.
5. Successfully verify a payment and give your customer value.
6. Understand articles and blog posts written on securing online payments.


By proceeding with this integration it is assumed that you have at least basic knowledge of the following:


1. React
2. React Router
3. NodeJS and NPM



# Create A Rave Account

The first step is to sign up with Flutterwave for a Rave account. Below are the two types of accounts on the Rave platform and their descriptions.



| RAVE ACCOUNT TYPE      | DESCRIPTION                                                                                                                                                                                  | LINK                                                             |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Test (Sandbox) Account | Choose this account if you’re a developer and you need a testing environment that isolates untested code changes and outright experimentation from the production environment or repository. | https://ravesandbox.flutterwave.com/                             |
| Live Account           | Choose this account if you’re a merchant and you want to accept payments directly to your bank account.                                                                                      | [**https://rave.flutterwave.com**](https://rave.flutterwave.com) |







# Create a React Application

To create a React application, navigate to your terminal and input the following commands:

CAUTION:     This procedure assumes you are familiar with and have installed the following:


1. NodeJS
2. NPM



    # install the create-react-app cli globally
    npm install -g create-react-app
    
    # create a new project by running the create-react-app command
    create-react-app my-rave-project


When you are done, your application’s folder should have a structure similar to this:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_72C78DFCECD70752D9EB2B769AB2A3DF54C2EC61A7F52C8F89E488217CFC798B_1522784450953_Screenshot+from+2018-04-02+17-02-25.png)



Your `package.json` file should  include `react` , `react-dom`,  `react-scripts`  and  `react-toastify` as dependencies. You may install other dependencies that you may need with `NPM`:


    npm install --save <NAME OF DEPENDENCY>

Alternatively,  you may use Yarn:


    yarn add <NAME OF DEPENDENCY>


# Setup Rave

Assuming you’ve signed up using a sandbox account, login to your **Ravepay** Dashboard and at the 
sidebar, click on **Setup Rave**.



![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1522280153710_Screenshot+from+2018-03-29+00-28-11.png)




When you click on **Setup Rave**,  you will be shown a handful of options via which you can start collecting payments:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1522281473908_Screenshot+from+2018-03-29+00-57-40.png)





Since we are Integrating Rave with React, how to accept payments with Rave in our custom applications should be our concern here. To be able to generate the payment modal on your application, you first need to include the test script URL in your application. The importance of the test script is to load the modal. It works in a fashion similar to how images load over content delivery networks.


    <html>
      <script type="text/javascript" src="https://ravesandbox.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
    </html>


When you are done including the test script, you need to embed Rave’s inbuilt  `getPaidSetup` function in your code. The  `getPaidSetup`  function is one of Rave’s core functions and is an integral part of Rave’s engine, it is responsible for handling the payments your customers make on your page. Below is an excerpt of how the `getpaidSetup` function will appear in your application’s code:



      <script>  
          window.getpaidSetup({
          amount: this.state.amount,
          txref: 'rave-checkout-1508751596',
          PBFPubKey: this.publicKey,
          custom_title: 'React Pay',
          payment_method: 'both',
          customer_email: 'john@example.com',
          customer_phone: '08033445566',
          onclose: function() {},
          callback: function(d) {
           //  var flw_ref = d.tx.flwRef;
            if (d.tx.chargeResponseCode === '00' || d.tx.chargeResponseCode === '0') {
              toast.success("Wow! That was fast and easy!");
            } else {
              toast.error("Ouch! Please try again!");
            }
            console.log(d);
          }
        });
      </script>  


The `getPaidSetup` function needs a public key, this key serves as the link between your Rave account and the Payment Button you want to create. To view your public as well as secret key, on your Rave dashboard navigate to **Settings** >> **API** 



![](https://d2mxuefqeaa7sj.cloudfront.net/s_72C78DFCECD70752D9EB2B769AB2A3DF54C2EC61A7F52C8F89E488217CFC798B_1524003526573_Screenshot+from+2018-04-17+23-16-54.png)





  **CAUTION**: The **public key** is used when embedding the pay button, it can be used on the **client page**. The **secret key** is very sensitive to your Rave account and should not be exposed to your **client page**. Do not commit your **secret key** to GitHub or any other versioning system and ensure you only use your **secret key** on the **server side**. Kindly re-read this paragraph. 

After you have implemented the `getpaidSetup`  function in your code and your customers want to make payments to your account, they should see a modal similar to this:



![](https://d2mxuefqeaa7sj.cloudfront.net/s_72C78DFCECD70752D9EB2B769AB2A3DF54C2EC61A7F52C8F89E488217CFC798B_1522708979828_Screenshot+from+2018-04-02+23-42-29.png)




[SEE A DEMO ON CODEPEN](https://codepen.io/fullstackmafia/pen/zWZzyp)


Should your payment go through, this is what your sample callback response will look like:


    {
      "status": "success",
      "message": "Charge Complete",
      "data": {
        "data": {
          "responsecode": "00",
          "responsemessage": "successful"
        },
        "tx": {
          "id": 10604,
          "txRef": "12373",
          "orderRef": "URF_1501152088995_7069035",
          "flwRef": "FLW-MOCK-f0ef7b5fc0e9a2e00e02169aff4572de",
          "redirectUrl": "http://127.0.0",
          "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
          "settlement_token": null,
          "cycle": "recurring-daily",
          "amount": 290,
          "charged_amount": 290,
          "appfee": 0,
          "merchantfee": 0,
          "merchantbearsfee": 0,
          "chargeResponseCode": "00",
          "chargeResponseMessage": "Success-Pending-otp-validation",
          "authModelUsed": "PIN",
          "currency": "NGN",
          "IP": "197.242.109.215",
          "narration": "FLW-PBF CARD Transaction ",
          "status": "successful",
          "vbvrespmessage": "successful",
          "authurl": "http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/mockvbvpage?ref=FLW-MOCK-f0ef7b5fc0e9a2e00e02169aff4572de&code=00&message=Approved. Successful",
          "vbvrespcode": "00",
          "acctvalrespmsg": null,
          "acctvalrespcode": null,
          "paymentType": "card",
          "paymentId": "2",
          "fraud_status": "ok",
          "charge_type": "normal",
          "is_live": 0,
          "createdAt": "2017-07-27T10:41:28.000Z",
          "updatedAt": "2017-07-27T10:41:42.000Z",
          "deletedAt": null,
          "customerId": 517,
          "AccountId": 134,
          "customer": {
            "id": 517,
            "phone": null,
            "fullName": "teni adebola",
            "customertoken": null,
            "email": "temi@gmail.com",
            "createdAt": "2017-06-02T10:33:13.000Z",
            "updatedAt": "2017-06-02T10:33:13.000Z",
            "deletedAt": null,
            "AccountId": 134
          },
          "chargeToken": {
            "user_token": "82bfc",
            "embed_token": "flw-t0-2a2646448375873c9060eeffe48bdedb-m03k"
          }
        }
      }
    }


To view sample callback responses for other situations such as a failed response, a declined transaction, insufficient funds etc,  do check out this [gist](https://gist.github.com/fullstackmafia/117b6046f968e14dcf3f6693816b815f) on Github.


## You’ve gotten paid, now what?

Yaay!  You just completed integration. Complete some test transactions and guess what, on Rave you are live when you sign up, the only steps we need you to complete are these:


  1. Click on the  `Add account`  notification to add a bank account we can settle your funds into, along with a few other details that are required.
  2. Once you complete this, you would see Live badge on your dashboard, hover over it, to see the limits set on your account.
  

*After I do this what is next ?*

There are two (2) states your account is in:



1. **Pending**:  During this period you are allowed to start transacting with the limits given below. Your account is not setup for settlement till you fill/add a bank account and the details submitted are reviewed and approved.


| INDIVIDUALS                                                                                                                  | BUSINESS (SOLE PROPRIETOR AND CORPORATE)                                                                                         | NGOs                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| - 50k per transactions and 200k daily cumulative upon go-live
- 500k per transaction and 500k daily cumulative upon approval | - 200k per transaction and 1mm daily cumulative upon go-live
- 500k per transaction and unlimited daily cumulative upon approval | - 50k per transactions and 200k daily cumulative upon go-live
- 500k per transaction and 500k daily cumulative upon approval |

  
2.  **Approved** :  Great your documents were approved. Your limits would be raised too, now it is time to start making the money. You can always email  `hi@flutterwavego.com`  requesting that your limit be raised if your business use case absolutely requires it. When sending an email be sure to include your account name on Rave and use case for raising limits. Thanks!


Now you are done integrating, to finesse that Integration and show your user's they can now pay with whatever they have literally `(card, account, USSD)`. You can add Rave’s image to your page as a branding asset to your payment options section.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1522338738016_8948ce7-Badge_1.png)




## Server Side Validation with Node JS

After integrating Rave checkout button and a user has successfully paid, you need to verify that the payment was successful with Rave before giving value to your customer on your website.
Although the Rave inline already verifies the payment from the client side, we strongly recommend you still do a server side verification to make sure the payment flow was authentic. Below are the important things to check for when validating the payment:


1. Verify the transaction reference.
2. Verify the status of the transaction to be a **success**.
3. Verify that a charge response `chargeResponse` found in `response.data.flwMeta` has the value `00` or `0`.
4. Verify that the currency is the expected currency to accept payments in.
5. Most importantly verify the **amount paid** to be equal to the amount of the value to be given.


Here are the steps to implementing server side validation in your React application:


1. In the application’s folder, create a new folder and name it `server`
2. In the `server` folder, install the following:


  1. Unirest  :   A lightweight HTTP request client library
  2. Express  :  A fast, minimalist web framework for Node

     Then in your terminal run  `npm install express unirest --save`
   

3. Still in the  `server`  folder, create a file and name it `server.js`



Below is sample code of how to implement server side verification using Node JS:




    /server.js
    
    const express = require("express");
    
    // unirest is an http request library so any other preferred library can be used.
    const unirest = require("unirest");
    
    const app = express();
    
    app.post("/verifyPayment", function(req, res) {
      var payload = {
        SECKEY: "FLWSECK-d16b95d7b3ae47f5c43bd63b609ee8eb-X",
        flw_ref: req.body.flw_ref
      };
    
      // please make sure to change this to production url when you go live
      var server_url =
        "http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/verify";
    
      unirest
        .post(server_url)
        .headers({ "Content-Type": "application/json" })
        .send(payload)
        .end(function(response) {
          //check status is success.
          if (response.body.status === "success") {
            if (response.body.data.amount === req.body.amount) {
              console.log("Payment successful");
            }
          }
        });
    });
    
    app.listen("3128");



If you would like to review the entire codebase of this integration, you can find it on [Github](https://github.com/flutterwave-dev/rave-react-demo).


RELEVANT LINKS:     

[Get Paid Using a Hosted Page](/doc/Get-Paid-using-a-Hosted-Page-ek8TCZ5HjI4tZXMorsVuh)
[Enhancing Security with Integrity Hashes](/doc/Enhancing-Security-with-Integrity-Hashes-LgqpXOGMw5i6vJgrzMTym)


## 

