# Cancel a subscription

This section shows you how to cancel an existing subscription on a merchant account.

**Endpoint** :  https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/id/cancel

Below is a sample code of how to cancel a subscription in different programming languages:

```

///  cURL

curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/id/cancel
  
  
///   Node

var request = require("request");

var options = { method: 'POST',
  url: 'https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/id/cancel' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


///  Ruby


require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/id/cancel")

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

xhr.open("POST", "https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/id/cancel");

xhr.send(data);



///  Python

import requests

url = "https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/id/cancel"

response = requests.request("POST", url)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/7c5f962eca70cf9a77241ad44fa1027b)


## Path Parameters
| 				| 												   | 					|
| ------------- | ------------------------------------------------ | ------------------ |
| **id** <br />int32 | **REQUIRED** <br /> This is the payment plan id | Input TextBox Here |



## Body Parameters
| 				| 												   | 					|
| ------------- | ------------------------------------------------ | ------------------ |
| **seckey** <br /> string | **REQUIRED** <br /> This is the merchant secret key | Input TextBox Here |



