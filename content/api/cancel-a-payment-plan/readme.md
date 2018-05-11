# Cancel Payment Plan

This section shows you how to cancel a payment plan on a merchant account.

**Endpoint** :  https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/id/cancel

Below is a sample code of how to cancel a payment plan in different programming languages:

```
///   cURL


curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/-2/cancel \
  --data '{"seckey":"FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X"}'
  
  
 
///  Node


var request = require("request");

var options = { method: 'POST',
  url: 'https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/-2/cancel',
  body: { seckey: 'FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



///   Ruby


require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/-2/cancel")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request.body = "{\"seckey\":\"FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X\"}"

response = http.request(request)
puts response.read_body




///   JavaScript


var data = JSON.stringify({
  "seckey": "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/-2/cancel");

xhr.send(data);




///   Python


import requests

url = "https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/-2/cancel"

payload = "{\"seckey\":\"FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X\"}"
response = requests.request("POST", url, data=payload)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/8bab1a7169de7b088d932a21bc119d6c)

## Path Parameters
| 				| 												   | 					|
| ------------- | ------------------------------------------------ | ------------------ |
| **id** <br />int32 | **REQUIRED** <br /> This is the payment plan id | Input TextBox Here |



## Body Parameters
| 				| 												   | 					|
| ------------- | ------------------------------------------------ | ------------------ |
| **seckey** <br /> string | **REQUIRED** <br /> This is the merchant secret key | Input TextBox Here |


> NOTE :  Canceling a payment plan would cause the plan to throw an `inactive` error for all subscribers under the plan on their next charge date. <br />If you would like to cancel a subscription, you can do that using the Cancel a subscription endpoint.

