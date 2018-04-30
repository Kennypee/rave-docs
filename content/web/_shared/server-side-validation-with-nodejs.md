## Server Side Validation with Node JS

After integrating Rave checkout button and a user has successfully paid, you need to verify that the payment was successful with Rave before giving value to your customer on your website.
Although the Rave inline already verifies the payment from the client side, we strongly recommend you still do a server side verification to make sure the payment flow was authentic. Below are the important things to check for when validating the payment:

1. Verify the transaction reference.
2. Verify the status of the transaction to be a **success**.
3. Verify that a charge response `chargeResponse` found in `response.data.flwMeta` has the value `00` or `0`.
4. Verify that the currency is the expected currency to accept payments in.
5. Most importantly verify the **amount paid** to be equal to the amount of the value to be given.

Here are the steps to implementing server side validation in your application:

1. In the application’s folder, create a new folder and name it `server`
2. In the `server` folder, install the following:
    - **Unirest**  :   A lightweight HTTP request client library
    - **Express**  :  A fast, minimalist web framework for Node

Then in your terminal run  
```
$ npm install express unirest --save
```

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