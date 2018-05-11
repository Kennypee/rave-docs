# Charge a Card with Token

You can charge cards with token by using the following endpoint:


    https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/tokenized/charge

The code sample below depicts how to make a request to charge cards using a token in different programming languages:

```

/// cURL
curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/tokenized/charge
  
/// Node

var request = require("request");

var options = { method: 'POST',
  url: 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/tokenized/charge' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


///  Ruby

require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/tokenized/charge")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)

response = http.request(request)
puts response.read_body

///  JavaScript

var data = JSON.stringify(false);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/tokenized/charge");

xhr.send(data);

///   Python

import requests

url = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/tokenized/charge"

response = requests.request("POST", url)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/2b93e358f538c1d7f0d23198e052ff65)


Should your request go through, below is an example of the response you’ll be getting:

```

{
  "status":"success",
  "message":"V-COMP",
  "data":
  {
    "id":2667,
    "txRef":"GON-0.06208890843489279",
    "flwRef":"FLW-MOCK-a5dba0959266978397231b2b4f73070d",
    "redirectUrl":"http://127.0.0",
    "device_fingerprint":"69e6b7f0b72037aa8428b70fbe03986c",
    "cycle":"one-time",
    "amount":10.3766666288888,
    "charged_amount":10.4,
    "appfee":0.025941666572222,
    "merchantfee":0,
    "merchantbearsfee":0,
    "chargeResponseCode":"02",
    "chargeResponseMessage":"Success-Pending-otp-validation",
    "authModelUsed":"VBVSECURECODE",
    "currency":"NGN",
    "IP":"41.190.3.8",
    "narration":"FLW-PBF CARD Transaction ",
    "status":"success-pending-validation",
    "vbvrespmessage":"Approved. Successful",
    "authurl":"http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/mockvbvpage?ref=FLW-MOCK-a5dba0959266978397231b2b4f73070d&code=00&message=ApprovedSuccessful",
    "vbvrespcode":"00",
    "acctvalrespmsg":null,
    "acctvalrespcode":null,
    "paymentType":"card",
    "paymentId":"2",
    "fraud_status":"ok",
    "charge_type":"normal",
    "is_live":0,
    "createdAt":"2017-03-06T07:06:15.000Z",
    "updatedAt":"2017-03-06T07:06:17.000Z",
    "deletedAt":null,
    "customerId":159,
    "AccountId":134,
    "customer":
    {"id":159,
      "phone":null,
      "fullName":"Anonymous customer",
      "email":"gondy4life@gmail.com",
      "createdAt":"2017-02-23T04:51:15.000Z",
      "updatedAt":"2017-02-23T04:51:15.000Z",
      "deletedAt":null,
      "AccountId":134},
      "chargeToken":
      {"user_token":"f0209",
        "embed_token":"flw-t0-9f3aa69a806f6440fbb78cc9e8b2f135-k3n"
        }
        }
      }
```

View on [GitHub](https://gist.github.com/fullstackmafia/dd79349dc469b73dd9e7b772a09a0164)


### Body Parameters

| Parameter 				| Description								| 					|
| ------------------------- | ------------------------------------------| ----------------- |
| **SECKEY** <br />string             | **REQUIRED** <br />This is a unique key generated for each button created on Rave’s dashboard. It starts with a prefix `FLWSECK` and ends with suffix `X`.                                         | *Input TextBox Here* |
| **token** <br />string              | **REQUIRED** <br />This is the embed_token property returned from the call to charge a card | *Input TextBox Here* |
| **currency** <br />string           | **REQUIRED** <br />This is the specified currency to charge the card in.                                                                                                                           | *Input TextBox Here* |
| **country** <br />string            |                                                                                                                                                                                              | *Input TextBox Here* |
| **amount** <br />string             | **REQUIRED** <br />This is the amount to be charged                                                                                                                                                | *Input TextBox Here* |
| **email** <br />string              | **REQUIRED** <br />This is the email address of the customer                                                                                                                                       | *Input TextBox Here* |
| **firstname** <br />string          | **REQUIRED** <br />This is the first name of the card holder or the customer.                                                                                                                      | *Input TextBox Here* |
| **lastname** <br />string           | **REQUIRED** <br />This is the last name of the card holder or the customer.                                                                                                                       | *Input TextBox Here* |
| **IP** <br />string                 | **REQUIRED** <br />IP - Internet Protocol. This represents the IP address of where the transaction is being carried out.                                                                           | *Input TextBox Here* |
| **narration** <br />string          | This is a custom description added by the merchant.                                                                                                                                          | *Input TextBox Here* |
| **txRef** <br />string              | **REQUIRED** <br />This is the unique reference, unique to the particular transaction being carried out. It is generated by the merchant for every transaction                                     | *Input TextBox Here* |
| **meta** <br />string               | passed as an object. These are extra set of parameters that can be passed to your pay button.                                        | *Input TextBox Here* |
| **device_fingerprint** <br />string | This is the fingerprint for the device being used. It can be generated using a library on whatever platform is being used.                                                                   | *Input TextBox Here* |


### Headers

|  | | |
| ------------------------- | -----| ----------------- |
| **Content-Type** <br />string |  | *Input TextBox Here* |
