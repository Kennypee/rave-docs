# Integrating Rave with Flask

Rave allows you to receive local and international payments via card, bank account and USSD. The beauty of having these different payment options is that it lets your customers pay you seamlessly.

This section will walk you through integrating Rave with Flask. [Flask](http://flask.pocoo.org/) is an extensible microframework used to build web applications with Python. The aim of this integration is to enable you perform the following:


1. Setup a test(sandbox) and live account on Rave.
2. Retrieve your public and secret key.
3. Successfully integrate Rave on any Flask project or application.
4. Successfully accept payments from your customers using Rave.
5. Successfully verify a payment and give your customer value.
6. Understand articles and blog posts written on securing online payments.


By proceeding with this integration it is assumed that you have at least basic knowledge of the following:


1. Python
2. Pip
3. Flask




# Create A Rave Account

The first step is to sign up with Flutterwave for a Rave account. Below are the two types of accounts on the Rave’s platform with their descriptions.



| RAVE ACCOUNT TYPE     | DESCRIPTION                                                                                                                                                                                  | LINK                                                             |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Test(Sandbox) Account | Choose this account if you’re a developer and you need a testing environment that isolates untested code changes and outright experimentation from the production environment or repository. | https://ravesandbox.flutterwave.com/                             |
| Live Account          | Choose this account if you’re a merchant and you want to accept payments directly to your bank account.                                                                                      | [**https://rave.flutterwave.com**](https://rave.flutterwave.com) |






## Scaffold a Flask Application

The first step to building a Flask application is to check if you have Python installed in your system. You can do this by navigating to your terminal and typing the following command:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_3B373590E644B6E7266AE617F7805A6055C1C837675B28D1A3CB7E0D747C440A_1525001868667_Screenshot+from+2018-04-29+12-37-30.png)


If you don’t have Python on your system, you can download it [here](https://www.python.org/downloads/). 



When you’re done installing Python, create a directory for you Rave project:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_3B373590E644B6E7266AE617F7805A6055C1C837675B28D1A3CB7E0D747C440A_1525003952017_Screenshot+from+2018-04-29+13-12-06.png)



After creating the directory, install Flask and other libraries:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_3B373590E644B6E7266AE617F7805A6055C1C837675B28D1A3CB7E0D747C440A_1525004195547_Screenshot+from+2018-04-29+13-16-18.png)


Installing Flask also installs a few dependencies which you can view when you run the following command:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_3B373590E644B6E7266AE617F7805A6055C1C837675B28D1A3CB7E0D747C440A_1525032588486_Screenshot+from+2018-04-29+21-08-45.png)


The dependencies listed above can be saved in a file. This is good practice because anyone who wants to work on or run your project will need to know the dependencies to install. The following command will save the dependencies in a `requirements.txt` file:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_3B373590E644B6E7266AE617F7805A6055C1C837675B28D1A3CB7E0D747C440A_1525033052362_Screenshot+from+2018-04-29+21-17-22.png)


When you’re done installing the required libraries, navigate to your project folder. Here we’ll proceed to arrange our project’s sub-folders and files in the following format:

`/app` :  This is a directory within your project folder. Here we’ll put all or code and leave out other files such as the `requirements.txt`  file outside.
`/app/templates` :  This is where we’ll put our HTML files.
`/app/static` :  This is where we’ll put static files such as CSS and JavaScript files as well as images.




# Setup Rave

Assuming you’ve signed up using a sandbox account, login to your **Ravepay** Dashboard and at the sidebar, click on **Setup Rave**.



![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1522280153710_Screenshot+from+2018-03-29+00-28-11.png)




When you click on **Setup Rave**,  you will be shown a handful of options via which you can start collecting payments:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1522281473908_Screenshot+from+2018-03-29+00-57-40.png)





Since we are integrating Rave with Flask, how to accept payments with Rave in our custom applications should be our concern here. To be able to generate the payment modal on your application, you first need to include the test script URL in your application. The importance of the test script is to load the modal. It works in a fashion similar to how images load over content delivery networks.


    <html>
      <script type="text/javascript" src="https://ravesandbox.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
    </html>


When you are done including the test script, you need to embed Rave’s inbuilt  `getPaidSetup` function in your code. The  `getPaidSetup`  function is one of Rave’s core functions and is an integral part of Rave’s engine, it is responsible for handling the payments your customers make on your page. Below is a basic example of how the `getpaidSetup` function will appear in your application’s code:



      <script>  
          getpaidSetup({
          PBFPubKey: "YOUR PUBLIC KEY",
          customer_email: "user@example.com",
          custom_title: "OGTECH",
          amount: 500,
          customer_phone: "233546744623",
          payment_method: "both",
          txref: "rave-123456",
          onclose: function() {},
          callback: function(response) {
            var flw_ref = response.tx.flwRef;
            console.log("This is the response returned after a charge", response);
            if (
              response.tx.chargeResponseCode == "00" ||
              response.tx.chargeResponseCode == "0"
            ) {
              // redirect to a success page
              console.log('Payment Successful')
            } else {
              // redirect to a failure page
              console.log('Error! Issue with Payment')
            }
          }
        });
      </script>  


The `getPaidSetup` function needs a public key, this key serves as the link between your Rave account and the Payment Button you want to create. To view your public as well as secret key, on your Rave dashboard navigate to **Settings** >> **API** 



![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1524003443152_Screenshot+from+2018-04-17+23-16-54.png)





  **CAUTION**: The **public key** is used when embedding the pay button, it can be used on the **client page**. The **secret key** is very sensitive to your Rave account and should not be exposed to your **client page**. Do not commit your **secret key** to GitHub or any other versioning system and ensure you only use your **secret key** on the **server side**. Kindly re-read this paragraph. 

After you have implemented the `getpaidSetup`  function in your code and your customers want to make payments to your account, they should see a modal similar to this:



![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1522336147851_Screenshot+from+2018-03-29+15-24-07.png)




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


  1. Click on the Add account notification to add a bank account we can settle your funds into, along with a few other details that are required.
  2. Once you complete this, you would see Live badge on your dashboard, hover over it, to see the limits set on your account.
  

*After I do this what is next ?*

There are two (2) states your account is in.

  
1. **Pending**:  During this period you are allowed to start transacting with the limits given below. Your account is not setup for settlement till you fill/add a bank account and the details submitted are reviewed and approved.


| INDIVIDUALS                                                                                                                  | BUSINESS (SOLE PROPRIETOR AND CORPORATE)                                                                                         | NGOs                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| - 50k per transactions and 200k daily cumulative upon go-live
- 500k per transaction and 500k daily cumulative upon approval | - 200k per transaction and 1mm daily cumulative upon go-live
- 500k per transaction and unlimited daily cumulative upon approval | - 50k per transactions and 200k daily cumulative upon go-live
- 500k per transaction and 500k daily cumulative upon approval |

  
2.  **Approved** :  Great your documents were approved. Your limits would be raised too, now it is time to start making the money. You can always email  `hi@flutterwavego.com`  requesting that your limit be raised if your business use case absolutely requires it. When sending an email be sure to include your account name on Rave and use case for raising limits. Thanks!


Now you are done integrating, to finesse that Integration and show your users they can now pay with whatever they have `(card, account, USSD)`. You can add Rave’s image to your page as a branding asset to your payment options section.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1522338738016_8948ce7-Badge_1.png)



## 


If you would like to review the entire codebase of this integration, you can find it on [Github](https://github.com/flutterwave-dev/rave-python).






