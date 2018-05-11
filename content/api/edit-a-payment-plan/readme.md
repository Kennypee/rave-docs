# Edit a Payment Plan

This section shows you how to edit a payment plan on a merchant account.

**Endpoint** :  https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/id/edit

Below is a sample code of how to edit a payment plan in different programming languages:

```
///   cURL


curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/-2/edit
  
  

///   Node


var request = require("request");

var options = { method: 'POST',
  url: 'https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/-2/edit' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



///   Ruby


require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/-2/edit")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)

response = http.request(request)
puts response.read_body



/// JavaScript


var data = JSON.stringify(false);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/-2/edit");

xhr.send(data);



///   Python


import requests

url = "https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/-2/edit"

response = requests.request("POST", url)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/766b5efe4ccd6886d05daf8ff2cd3e42)

## Path Parameters

| 				| 												   | 					|
| ------------- | ------------------------------------------------ | ------------------ |
| **id** <br />int32 | **REQUIRED** <br /> This is the payment plan id | Input TextBox Here |




## Body Parameters
| 				| 												   | 					|
| ------------- | ------------------------------------------------ | ------------------ |
| **seckey** <br /> string | **REQUIRED** <br /> This is the merchant secret key. 	   | Input TextBox Here |
| **name** <br /> string   | This is the name of the payment plan.            | Input TextBox Here |
| **status** <br /> string | This is the status you would like to update the payment plan to, possible values are `active`, `cancelled` | Input TextBox Here |

