# Capture A Card

This section shows you how to capture a card for preauthorization

**Endpoint** :  https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/capture


Below is a sample code of how to capture a card for preauthorization in different programming languages:

```

///   cURL


curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/capture \
  --header 'content-type: application/json'
  
  
 
///  Node


var request = require("request");

var options = { method: 'POST',
  url: 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/capture',
  headers: { 'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



///   Ruby


require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/capture")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'

response = http.request(request)
puts response.read_body



///   JavaScript


var data = JSON.stringify(false);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/capture");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);



///   Python


import requests

url = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/capture"

headers = {'content-type': 'application/json'}

response = requests.request("POST", url, headers=headers)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/cb02879ecf58b5765e9ba1b646871a79)



Should your request go through, here is an example of the response you’ll be receiving:

```

{
    "status": "success",
    "message": "Capture complete",
    "data": {
        "id": 194211,
        "txRef": "MC-1508990174050",
        "orderRef": null,
        "flwRef": "FLW-MOCK-839c1abc23b6a4bbb9da807d54c5bbda",
        "redirectUrl": "http://127.0.0",
        "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
        "settlement_token": null,
        "cycle": "one-time",
        "amount": 20,
        "charged_amount": 20.25,
        "appfee": 0.25,
        "merchantfee": 0,
        "merchantbearsfee": 0,
        "chargeResponseCode": "00",
        "chargeResponseMessage": "Approved",
        "authModelUsed": "NOAUTH",
        "currency": "NGN",
        "IP": "::ffff:10.37.225.74",
        "narration": "FLW-PBF CARD Transaction ",
        "status": "successful",
        "vbvrespmessage": "Approved",
        "authurl": "N/A",
        "vbvrespcode": "00",
        "acctvalrespmsg": null,
        "acctvalrespcode": null,
        "paymentType": "card",
        "paymentPlan": null,
        "paymentPage": null,
        "paymentId": "47433",
        "fraud_status": "ok",
        "charge_type": "preauth",
        "is_live": 0,
        "createdAt": "2017-10-26T03:56:42.000Z",
        "updatedAt": "2017-10-26T04:20:21.000Z",
        "deletedAt": null,
        "customerId": 88067,
        "AccountId": 48,
        "customer": {
            "id": 88067,
            "phone": "08056552980",
            "fullName": "temi desola",
            "customertoken": null,
            "email": "tester@flutter.co",
            "createdAt": "2017-10-26T03:39:45.000Z",
            "updatedAt": "2017-10-26T03:39:45.000Z",
            "deletedAt": null,
            "AccountId": 48
        }
    }
}
```


## Body Parameters

| 				| 		   | 					|
| ------------- | -------- | ------------------ |
| **SECKEY** <br />string | **REQUIRED** | Input Textbox Here |
| **flwRef** <br />string | **REQUIRED** | Input Textbox Here |



## Headers

| 				| 		   | 					|
| ------------- | -------- | ------------------ |
| **Content-Type** <br />string | **REQUIRED** | Input Textbox Here <br />*placeholder : "application/json"* |







