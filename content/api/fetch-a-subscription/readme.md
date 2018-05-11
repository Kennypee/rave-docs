# Fetch a Subscription

This section shows you how to fetch a subscription on a merchant account.

Endpoint :  https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/query

Below is a sample code of how to fetch a subscription in different programming languages:

```

///  cURL

curl --request GET \
  --url 'https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/query?seckey=seckey&id=id'


///  Node

var request = require("request");

var options = { method: 'GET',
  url: 'https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/query',
  qs: 
   { seckey: 'seckey',
     id: 'id' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


///  Ruby

require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/query?seckey=seckey&id=id")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)

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

xhr.open("GET", "https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/query?seckey=seckey&id=id");

xhr.send(data);


///  Python

import requests

url = "https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/query"

querystring = {"seckey":"seckey","id":"id"}

response = requests.request("GET", url, params=querystring)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/5049aebe7362ed060cb9cbf7e212d685)

## Query Parameters
| 				| 												   | 					|
| ------------- | ------------------------------------------------ | ------------------ |
| **seckey** <br /> string | **REQUIRED** <br /> This is the merchant secret key | Input TextBox Here |
| **id** <br /> string     | **REQUIRED** <br /> This is the subdscription id, it can be gotten in the response from a successful subscription charge | Input TextBox Here |

