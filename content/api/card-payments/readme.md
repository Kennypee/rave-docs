# Card Payments

This section shows how to perform card payments using Rave's APIs
 
Rave allows you charge local cards (cards issued in Nigeria) and International cards using our APIs. When charging cards with Rave you have to take into account `authentication models`  -  these are primarily how the user who is meant to pay authenticates the transaction. Example of authentication models include:


1. Using a  `one time pin`  (OTP).
2. Using a card  `internet PIN`  (i-PIN)
3. Using an  `address verification system`  (AVS)


The guide below would show you how to charge cards on Rave using our APIs.


## Prerequisites for accepting card payments on Rave.


1. Sign-up for a Rave account [here](https://rave.flutterwave.com).
2. You can use webhooks to get notified on transactions using the [webhook guide](/guides/api/events-webhooks), or use the response returned by the endpoint.
3. For all card payments you would need to implement three steps to the transactions, `Initiate payment` , `Validate payment`, `Verify completed payment`.


## Step 1: Encrypt your request.

To see how to encrypt your request using any of our encryption function, copy the required sample request in the code sample below and visit the Rave Encryption section.


```

//   Parameters using a Mastercard

{
  "PBFPubKey": "FLWPUBK-4e581ebf8372cd691203b27227e2e3b8-X",
  "cardno": "5399830240760817",
  "cvv": "473",
  "expirymonth": "12",
  "expiryyear": "20",
  "currency": "NGN",
  "country": "NG",
  "amount": "10",
  "email": "user@gmail.com",
  "phonenumber": "0902620185",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),// your unique merchant reference
  "meta": [{metaname: "flightID", metavalue: "123949494DC"}],
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
}

// Payment using a Visa Card

{
  "PBFPubKey": "FLWPUBK-4e581ebf8372cd691203b27227e2e3b8-X",
  "cardno": "4187427415564246",
  "cvv": "473",
  "expirymonth": "12",
  "expiryyear": "20",
  "currency": "NGN",
  "country": "NG",
  "amount": "10",
  "email": "user@gmail.com",
  "phonenumber": "0902620185",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),// your unique merchant reference
  "meta": [{metaname: "flightID", metavalue: "123949494DC"}],
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
}

// Payment using an International Card

{
  "PBFPubKey": "FLWPUBK-4e581ebf8372cd691203b27227e2e3b8-X",
  "cardno": "4556052704172643",
  "cvv": "899",
  "expirymonth": "12",
  "expiryyear": "20",
  "currency": "USD",
  "country": "NG",
  "amount": "10",
  "email": "user@gmail.com",
  "phonenumber": "0902620185",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),// your unique merchant reference
  "meta": [{metaname: "flightID", metavalue: "123949494DC"}],
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "is_mpesa": 1,
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
}

//  Parameters for pre-authorised payments

{
  "PBFPubKey": "FLWPUBK-4e581ebf8372cd691203b27227e2e3b8-X",
  "cardno": "5840406187553286",
  "charge_type": "preauth",
  "cvv": "473",
  "expirymonth": "12",
  "expiryyear": "20",
  "currency": "NGN",
  "country": "NG",
  "amount": "10",
  "email": "user@gmail.com",
  "phonenumber": "0902620185",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),
  "meta": [{metaname: "flightID", metavalue: "123949494DC"}],
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
}

//  Parameters using AVS authmodel

{
  "PBFPubKey": "FLWPUBK-4e581ebf8372cd691203b27227e2e3b8-X",
  "cardno": "5399830240760817",
  "cvv": "473",
  "expirymonth": "12",
  "expiryyear": "20",
  "currency": "USD",
  "country": "NG",
  "amount": "10",
  "email": "user@gmail.com",
  "phonenumber": "0902620185",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),
  "meta": [{metaname: "flightID", metavalue: "123949494DC"}],
  "suggested_auth": "NOAUTH_INTERNATIONAL",
  "billingzip": "07205",
  "billingcity": "Hillside",
  "billingaddress": "470 Mundet PI",
  "billingstate": "NJ",
  "billingcountry": "US",
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/77884e563c2ec900f6da1da2d6f89f7f)


### Using a Local Mastercard or Verve Card

When using a local MasterCard or Verve card i.e cards issued in Nigeria, we suggest a PIN authmodel as your authentication model, the suggested auth is returned after `initiating payment`, you would get a response that looks like this:

```
{
  "status": "success",
  "message": "AUTH_SUGGESTION",
  "data": {
    "suggested_auth": "PIN"
  }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/b53506d1c75d3bafce582f3ed7e66292)

When you get this response you are to add  `pin`  and  `suggested_auth`  to your payload again, re-encrypt it and re-initiate the payment. See an example of the new request to send to re-initiate the payment.

    //  JSON
    {
      "PBFPubKey": "FLWPUBK-4e581ebf8372cd691203b27227e2e3b8-X",
      "cardno": "5399830240760817",
      "cvv": "473",
      "expirymonth": "12",
      "expiryyear": "20",
      "currency": "NGN",
      "pin": "570",
      "country": "NG",
      "amount": "10",
      "email": "desola.ade1@gmail.com",
      "suggested_auth": "PIN",
      "phonenumber": "0902620185",
      "firstname": "temi",
      "lastname": "desola",
      "IP": "355426087298442",
      "txRef": "MC-" + Date.now(),
      "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
      "meta": [{metaname: "flightID", metavalue: "123949494DC"}],
      "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
    }


### Using AVS (Address Verification System) to charge an International card.

When using an international card that uses the AVS system, we detect this automatically and suggest using the AVS authmodel. The suggested authmodel is returned after initiating payment with the card details. Check out the sample response below:

    //   Suggested Auth Response
    {
      "status": "success",
      "message": "AUTH_SUGGESTION",
      "data": {
        "suggested_auth": "NOAUTH_INTERNATIONAL"
      }
    }


When you get this response you are to add the cards `billing address details` and `suggested_auth` to your payload again, re-encrypt it and re-initiate the payment. See an example of the new request to send to re-initiate the payment.



    //   JSON
    
    {
      "PBFPubKey": "FLWPUBK-4e581ebf8372cd691203b27227e2e3b8-X",
      "cardno": "5399830240760817",
      "cvv": "473",
      "expirymonth": "12",
      "expiryyear": "20",
      "currency": "USD",
      "country": "NG",
      "amount": "10",
      "email": "user@gmail.com",
      "phonenumber": "0902620185",
      "firstname": "temi",
      "lastname": "desola",
      "IP": "355426087298442",
      "txRef": "MC-" + Date.now(),
      "meta": [{metaname: "flightID", metavalue: "123949494DC"}],
      "billingzip": "07205",
      "billingcity": "Hillside",
      "billingaddress": "470 Mundet PI",
      "billingstate": "NJ",
      "billingcountry": "US",
      "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
      "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
    }

The billing details of the card include the following:

`billingzip` :  This is the zip code or postal card registered with the card, customers can easily find this on their bank statement.

`billingcity`  :  This is the city registered with the card, it makes up part of the address the customer used for their card. Customers can easily find this on their bank statement.

`billingaddress`  :  This is the house/building address registered with the card. Customers can easily find this on their bank statement.

`billingstate`  :  This is the state registered with the card. Customers can easily find this on their bank statement.

`billingcountry`  :  This is the country registered with the card. Customers can easily find this on their bank statement.



## Step 2: Initiate your payment.

After encryption the next step is to initiate your payment using the encrypted string by sending a request to the `/charge` endpoint. See how to do that below:

Sandbox Endpoint: `https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/charge`

Sample Request:

Copy the cURL request in the code sample below and make a request in your terminal to see how it works!

```

//  cURL

 --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/charge \
  --header 'content-type: application/json' \
  --data '{
      "PBFPubKey":"FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X",
      "client":"VodhvFFsni0CBeieHPq9HTuG5lbNPgmD5rbEw6Uxb0TD9eD9B3VM5uZ1B5lC3thQMbPypNBCAYxaW2W21VnGuznMPf1G1digW0sHjuO6BGLGbzkwv12rmgNelv19ECSaKfyJmWOSPBvQifHMXZz2M35WuZpE2oD78Be54Xz7vUy3b6MkxrFc+d5gTnuiluBcSDSmnpj/d1ovlo5bix3PeuMUtIYzGFE/RK/EcIYyfYnpL26VFT1aEn5d/iOPyHecqFYVhCMwzV0E6j0uBtT/DMWg+Bi4O1VHej2EBxxKcmwu9rTYvsFf81AtOKZazJEKOea9Xn7mx0J/QpcP2kEf3asWrUqNUgvacl8y8IyaS4jGtU7fCcrIreHttSekpT/16rc45sC428zQy6OfSLoJDA4D2Ww+TEYnMWRNhzuBDHJ9wJTfHmgQcipiD/r7cQyLAzyllfhXsHWFIv3R+ECgrrvxpYMe2lVQ5d+DdTO2pC1MyhkOscNBp7dUwoEGfU7nxY/UGoRWV5WSAg9nFYELS2F4gfvWVkbP07Q+ap11GYUbuZFTMmfULbK/3j//q+9eElWS+E2m6mY4upgehIat8qIGsvGLKR3kagL4wQPZlBMD/S8eiQ8sUD+ngFS8T0XfZUXC5m6IMQdZ7Bfz0mAT2w==",
      "alg":"3DES-24"
    }'

//  JSON

{
  "PBFPubKey": "FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X",
  "client": "VodhvFFsni0CBeieHPq9HTuG5lbNPgmD5rbEw6Uxb0TD9eD9B3VM5uZ1B5lC3thQMbPypNBCAYxaW2W21VnGuznMPf1G1digW0sHjuO6BGLGbzkwv12rmgNelv19ECSaKfyJmWOSPBvQifHMXZz2M35WuZpE2oD78Be54Xz7vUy3b6MkxrFc+d5gTnuiluBcSDSmnpj/d1ovlo5bix3PeuMUtIYzGFE/RK/EcIYyfYnpL26VFT1aEn5d/iOPyHecqFYVhCMwzV0E6j0uBtT/DMWg+Bi4O1VHej2EBxxKcmwu9rTYvsFf81AtOKZazJEKOea9Xn7mx0J/QpcP2kEf3asWrUqNUgvacl8y8IyaS4jGtU7fCcrIreHttSekpT/16rc45sC428zQy6OfSLoJDA4D2Ww+TEYnMWRNhzuBDHJ9wJTfHmgQcipiD/r7cQyLAzyllfhXsHWFIv3R+ECgrrvxpYMe2lVQ5d+DdTO2pC1MyhkOscNBp7dUwoEGfU7nxY/UGoRWV5WSAg9nFYELS2F4gfvWVkbP07Q+ap11GYUbuZFTMmfULbK/3j//q+9eElWS+E2m6mY4upgehIat8qIGsvGLKR3kagL4wQPZlBMD/S8eiQ8sUD+ngFS8T0XfZUXC5m6IMQdZ7Bfz0mAT2w==",
  "alg": "3DES-24"
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/525595c25a7d1215c2f0d20c745511d4)



When you initiate the payment you would get a response similar to the responses below:

```

Non Visa / International Card

{
  "status": "success",
  "message": "V-COMP",
  "data": {
    "id": 12945,
    "txRef": "MC-7663-YU",
    "orderRef": "URF_1501241395442_2906135",
    "flwRef": "FLW-MOCK-9deabfa86935b9f0805ae276d49ad079",
    "redirectUrl": "http://127.0.0",
    "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
    "settlement_token": null,
    "cycle": "one-time",
    "amount": 10,
    "charged_amount": 10,
    "appfee": 0,
    "merchantfee": 0,
    "merchantbearsfee": 0,
    "chargeResponseCode": "02",
    "chargeResponseMessage": "Success-Pending-otp-validation",
    "authModelUsed": "PIN",
    "currency": "NGN",
    "IP": "::ffff:127.0.0.1",
    "narration": "FLW-PBF CARD Transaction ",
    "status": "success-pending-validation",
    "vbvrespmessage": "Approved. Successful",
    "authurl": "N/A",
    "vbvrespcode": "00",
    "acctvalrespmsg": null,
    "acctvalrespcode": null,
    "paymentType": "card",
    "paymentId": "2",
    "fraud_status": "ok",
    "charge_type": "normal",
    "is_live": 0,
    "createdAt": "2017-07-28T11:29:55.000Z",
    "updatedAt": "2017-07-28T11:29:56.000Z",
    "deletedAt": null,
    "customerId": 168,
    "AccountId": 134,
    "customer": {
      "id": 168,
      "phone": null,
      "fullName": "demi adeola",
      "customertoken": null,
      "email": "tester@flutter.co",
      "createdAt": "2017-02-25T12:20:22.000Z",
      "updatedAt": "2017-02-25T12:20:22.000Z",
      "deletedAt": null,
      "AccountId": 134
    },
    "customercandosubsequentnoauth": true
  }
}

// Visa/ International Card

{
  "status": "success",
  "message": "V-COMP",
  "data": {
    "id": 12945,
    "txRef": "MC-7663-YU",
    "orderRef": "URF_1501241395442_2906135",
    "flwRef": "FLW-MOCK-9deabfa86935b9f0805ae276d49ad079",
    "redirectUrl": "http://127.0.0",
    "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
    "settlement_token": null,
    "cycle": "one-time",
    "amount": 10,
    "charged_amount": 10,
    "appfee": 0,
    "merchantfee": 0,
    "merchantbearsfee": 0,
    "chargeResponseCode": "02",
    "chargeResponseMessage": "Success-Pending-otp-validation",
    "authModelUsed": "VBVSECURECODE",
    "currency": "NGN",
    "IP": "::ffff:127.0.0.1",
    "narration": "FLW-PBF CARD Transaction ",
    "status": "success-pending-validation",
    "vbvrespmessage": "Approved. Successful",
    "authurl": "http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/mockvbvpage?ref=FLW-MOCK-9deabfa86935b9f0805ae276d49ad079&code=00&message=Approved. Successful",
    "vbvrespcode": "00",
    "acctvalrespmsg": null,
    "acctvalrespcode": null,
    "paymentType": "card",
    "paymentId": "2",
    "fraud_status": "ok",
    "charge_type": "normal",
    "is_live": 0,
    "createdAt": "2017-07-28T11:29:55.000Z",
    "updatedAt": "2017-07-28T11:29:56.000Z",
    "deletedAt": null,
    "customerId": 168,
    "AccountId": 134,
    "customer": {
      "id": 168,
      "phone": null,
      "fullName": "demi adeola",
      "customertoken": null,
      "email": "tester@flutter.co",
      "createdAt": "2017-02-25T12:20:22.000Z",
      "updatedAt": "2017-02-25T12:20:22.000Z",
      "deletedAt": null,
      "AccountId": 134
    },
    "customercandosubsequentnoauth": true
  }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/d723f9f64d7181c3176f3db5e812249d)

### Some of the important responses are explained below:

`chargeResponseCode`  :   This is the response code of the transaction, its function is to tell you when a transaction is successful with a response code  `00`  or when the ransaction requires validation  `02`.

`chargeResponseMessage`  :  This is the response message and it can be shown to the customer to show what needs to be done next.

`authModelUsed`  :   This shows you the authmodel used for the transaction, it can also help you decide internally what steps to take after the payment is initiated, e.g. if the value is `PIN` the customer would be required to submit their `pin` or `otp` based on the message returned in `chargeResponseMessage` or if the value is `VBVSECURECODE` you would be required to load the `authurl` returned in the response in an iframe.

`paymentType`  :  This shows you the payment instrument used i.e. if the customer used a `card`, `account` or `ussd` to complete the payment.


## Step 3: Validate the payment.

After initiating the payment you would need to validate the transaction, validation is like authentication, essentially the customer is required to validate that he is the customer with the correct permissions to carry out the payment.
When validating transactions you need to take into account the `authModelUsed` and the `chargeResponseMessage` returned.

### Scenario 1:

When

`authModelUsed`  :  `PIN`  you would be asked to validate the transaction by asking the customer for the OTP sent to their registered (with the bank account) mobile number.

`chargeResponseMessage`  :  You need to show this to the customer, it would come with the instructions needed to complete validation.


### Scenario 2:

When

`authModelUsed`  :  `VBVSECURECODE`  you would be asked to validate by loading the  `authurl` returned in an iframe, the customer would see a page with their banks branding asking them to validate the transaction, once this is completed we would call your `redirect_url` and append the response as query parameters.


> NOTE : When validating a transaction with `VBVSECURECODE` as the  `authModelUsed`  there would be no use of the `/validatecharge` endpoint.

### To Validate a transaction, see how below:

Sandbox Endpoint  :   `https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/validatecharge`

Check out the sample request for validating payments:

```

/// cURL

curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/validatecharge \
  --header 'content-type: application/json' \
  --data '{"PBFPubKey":"FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X","transaction_reference":"FLW-MOCK-ce3654ac725278c4e2b7700c3af1fab8","otp":12345}'

///  JSON

{
  "PBFPubKey": "FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X",
  "transaction_reference": "FLW-MOCK-744927fe5cae22fddef891d1ee14ac7b", 
  "otp": "181971713"
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/7f8c808dd4e548d699469da4a5844015)

`PBFPubKey`  :  This is your merchant public key
`transaction_reference`  :  This is the flwRef returned in the initiate payment response.
`OTP`  :  This is the one time pin inputed by the customer.


When you validate a payment you would get a response similar to the one below:

```


{
  "status": "success",
  "message": "Charge Complete",
  "data": {
    "data": {
      "responsecode": "00",
      "responsemessage": "successful"
    },
    "tx": {
      "id": 12935,
      "txRef": "Ghshsh",
      "orderRef": "URF_1501241077083_3844735",
      "flwRef": "FLW-MOCK-a71d1de9130a1e221720ef52456943e5",
      "redirectUrl": "http://127.0.0",
      "device_fingerprint": "N/A",
      "settlement_token": null,
      "cycle": "one-time",
      "amount": 1000,
      "charged_amount": 1000,
      "appfee": 0,
      "merchantfee": 0,
      "merchantbearsfee": 0,
      "chargeResponseCode": "00",
      "chargeResponseMessage": "Success-Pending-otp-validation",
      "authModelUsed": "PIN",
      "currency": "NGN",
      "IP": "::ffff:127.0.0.1",
      "narration": "FLW-PBF CARD Transaction ",
      "status": "successful",
      "vbvrespmessage": "successful",
      "authurl": "http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/mockvbvpage?ref=FLW-MOCK-a71d1de9130a1e221720ef52456943e5&code=00&message=Approved. Successful",
      "vbvrespcode": "00",
      "acctvalrespmsg": null,
      "acctvalrespcode": null,
      "paymentType": "card",
      "paymentId": "2",
      "fraud_status": "ok",
      "charge_type": "normal",
      "is_live": 0,
      "createdAt": "2017-07-28T11:24:37.000Z",
      "updatedAt": "2017-07-28T13:42:20.000Z",
      "deletedAt": null,
      "customerId": 85,
      "AccountId": 134,
      "customer": {
        "id": 85,
        "phone": null,
        "fullName": "Anonymous customer",
        "customertoken": null,
        "email": "user@example.com",
        "createdAt": "2017-01-24T08:09:05.000Z",
        "updatedAt": "2017-01-24T08:09:05.000Z",
        "deletedAt": null,
        "AccountId": 134
      },
      "chargeToken": {
        "user_token": "1b7d7",
        "embed_token": "flw-t0-fcebba188b33ecc6a3dca944a638e28f-m03k"
      }
    }
  }
```

View on [GitHub](https://gist.github.com/fullstackmafia/0e9d463917c5bdab324fddb8f76deace)


Once you get this response you need to proceed to the last step to complete the payment which is payment verification.

## Step 4: Verify the payment.

After charging a card successfully, you need to verify that the payment was successful with Rave before giving value to your customers. Although Rave inline does quite a good job of verifying the payment from the client side, we strongly recommend that you still perform a server side verification to further enhance and authenticate your payment flow. Below are the important things to check for when validating the payment:


- Verify the transaction reference.
- Verify the `data.status` of the transaction to be `successful`.
- Verify the `chargecode` returned in the response to be `00`.
- Verify the currency to be the expected currency
- Most importantly validate the amount paid to be equal to the amount of value to be given.

Below you will see how to implement server side validation in different programming languages:

```

/// cURL

curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery \
  --header 'content-type: application/json' \
  --data '{"txref":"MC-1520443531487","SECKEY":"FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X", "include_payment_entity": 1}'
  
  
  ///  PHP
  
  <?php 

$result = array();

$postdata =  array( 
  'txref' => 'OH-AAED44',
  'SECKEY' => 'FLWSECK-bb971402072265fb156e90a3578fe5e6-X',
  'inlcude_payment_entity' => 1
  );

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,json_encode($postdata));  //Post Fields
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$headers = [
  'Content-Type: application/json',
];

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$request = curl_exec ($ch);
$err = curl_error($ch);

if($err){
  // there was an error contacting rave
  die('Curl returned error: ' . $err);
}


curl_close ($ch);

$result = json_decode($request, true);

if('error' == $result->status){
  // there was an error from the API
  die('API returned error: ' . $result->message);
}

if('successful' == $result->data->status && '00' == $result->data->chargecode){
  // transaction was successful...
  // please check other things like whether you already gave value for this ref
  // If the amount and currency matches the expected amount and currency etc.
  // if the email matches the customer who owns the product etc
  // Give value
}


/// JAVA

//Endpoint to verify transaction
    private final String VERIFY_ENDPOINT = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery"; 
    
    /**
     * 
     * Method to 
     * 
     * @param paymententity - <b>paymententity - set as a constant with default value as 1</b>
     * @param txref - <b>txref - is the unique payment reference generated by the merchant.</b>
     * @param secret - <b>secret - is the merchant secret key</b>
     * @return
     * @throws UnirestException 
     */
    public JSONObject verify(String flwRef, String secret, double amount, int paymententity) throws UnirestException, Exception {
        
        // This packages the payload
        JSONObject data = new JSONObject();
        data.put("txref", txref);
        data.put("SECKEY", secret);
        data.put("include_payment_entity", paymententity)
        
        // end of payload
        
        // This sends the request to server with payload
        HttpResponse<JsonNode> response = Unirest.post(VERIFY_ENDPOINT)
                .header("Content-Type", "application/json")
                .body(data)
                .asJson();
        
        // This get the response from payload
        JsonNode jsonNode = response.getBody();
        
        // This get the json object from payload
        JSONObject responseObject = jsonNode.getObject();
        
        // check of no object is returned
        if(responseObject == null)
            throw new Exception("No response from server");
        
        // This get status from returned payload
        String status = responseObject.optString("status", null);
        
        // this ensures that status is not null
        if(status == null)
            throw new Exception("Transaction status unknown");
        
        // This confirms the transaction exist on rave
        if(!"success".equalsIgnoreCase(status)){
            
            String message = responseObject.optString("message", null);
            
            throw new Exception(message);
        }
        
        data = responseObject.getJSONObject("data");
        
        // This get the amount stored on server
        double actualAmount = data.getDouble("amount");
        
        // This validates that the amount stored on client is same returned
        if(actualAmount != amount)
            throw new Exception("Amount does not match");
        
        
        // now you can give value for payment.
       
    }
    
    ///  C#
    
    var data = new {txref = "OH-AAED44", SECKEY = "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X", include_payment_entity = 1};
            var client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            var responseMessage = client.PostAsJsonAsync("https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery", data).Result;
            var responseStr = responseMessage.Content.ReadAsStringAsync().Result;
            var response = Newtonsoft.Json.JsonConvert.DeserializeObject<ResponseData>(responseStr);
            if (response.data.status == "successful" && response.data.amount == amount && response.data.chargecode == "00")
            {
              
              System.Console.WriteLine("Payment Successful then give value");
               
            }
```

View on [GitHub](https://gist.github.com/fullstackmafia/84c299a11f5d85c984f56044d0b11eed)

When you successfully verify a completed payment you would get a response similar to the one below:

```


{
    "status": "success",
    "message": "Tx Fetched",
    "data": {
        "txid": 121257,
        "txref": "MC-1522438968515",
        "flwref": "FLW-MOCK-5e52517f0b314c73c56992dc620d8998",
        "devicefingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
        "cycle": "one-time",
        "amount": 10,
        "currency": "NGN",
        "chargedamount": 10,
        "appfee": 0,
        "merchantfee": 0,
        "merchantbearsfee": 1,
        "chargecode": "00",
        "chargemessage": "Charge successful. Please enter the OTP sent to your mobile number 080****** and email te**@rave**.com",
        "authmodel": "VBVSECURECODE",
        "ip": "::ffff:127.0.0.1",
        "narration": "FLW-PBF CARD Transaction ",
        "status": "successful",
        "vbvcode": "00",
        "vbvmessage": "successful",
        "authurl": "http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/mockvbvpage?ref=FLW-MOCK-5e52517f0b314c73c56992dc620d8998&code=00&message=Approved. Successful&receiptno=RN1522438999815",
        "acctcode": null,
        "acctmessage": null,
        "paymenttype": "card",
        "paymentid": "1057",
        "fraudstatus": "ok",
        "chargetype": "normal",
        "createdday": 5,
        "createddayname": "FRIDAY",
        "createdweek": 13,
        "createdmonth": 2,
        "createdmonthname": "MARCH",
        "createdquarter": 1,
        "createdyear": 2018,
        "createdyearisleap": false,
        "createddayispublicholiday": 0,
        "createdhour": 19,
        "createdminute": 43,
        "createdpmam": "pm",
        "created": "2018-03-30T19:43:19.000Z",
        "customerid": 21887,
        "custphone": "0902620185",
        "custnetworkprovider": "AIRTEL",
        "custname": "temi desola",
        "custemail": "desola.ade1@gmail.com",
        "custemailprovider": "GMAIL",
        "custcreated": "2018-03-30T19:43:19.000Z",
        "accountid": 134,
        "acctbusinessname": "Synergy Group",
        "acctcontactperson": "Desola Ade",
        "acctcountry": "NG",
        "acctbearsfeeattransactiontime": 1,
        "acctparent": 1,
        "acctvpcmerchant": "N/A",
        "acctalias": "temi",
        "acctisliveapproved": 0,
        "orderref": "URF_1522438999774_1285835",
        "paymentplan": null,
        "paymentpage": null,
        "raveref": "RV31522438998679C0566DED05",
        "amountsettledforthistransaction": 10,
        "card": {
            "expirymonth": "12",
            "expiryyear": "20",
            "cardBIN": "543889",
            "last4digits": "0229",
            "brand": "MASTERCARD MASHREQ BANK CREDITSTANDARD",
            "card_tokens": [
                {
                    "embedtoken": "flw-t1nf-4877921998c0d784bbaf3949d23647a5-m03k",
                    "shortcode": "6a50e",
                    "expiry": "9999999999999"
                }
            ],
            "life_time_token": "flw-t1nf-4877921998c0d784bbaf3949d23647a5-m03k"
        }
    }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/8103fd2e5e6e15d72dcf34974be55461)

## Save a card after charging. 

Awesome! Now you are done charging a card, you can always save the card for future charges so users don’t have to go enter that same card’s details again. You can do that using our Save a card APIs.
