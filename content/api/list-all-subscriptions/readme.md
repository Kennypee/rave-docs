# List all subscriptions

This section shows you how to list all subscriptions on a merchant account.

**Endpoint** :   https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/query

Below is a sample code of how to list all subscriptions in different programming languages:

```
///  cURL

curl --request GET \
  --url 'https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/query?seckey=seckey'
 
 
///   Node

var request = require("request");

var options = { method: 'GET',
  url: 'https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/query',
  qs: { seckey: 'seckey' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


///  Ruby

require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/query?seckey=seckey")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)

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

xhr.open("GET", "https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/query?seckey=seckey");

xhr.send(data);


///  Python

import requests

url = "https://ravesandboxapi.flutterwave.com/v2/gpx/subscriptions/query"

querystring = {"seckey":"seckey"}

response = requests.request("GET", url, params=querystring)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/3ad31c0a5158bd43d26802d69d26d2b4)

## Query Parameters
| 				| 												   | 					|
| ------------- | ------------------------------------------------ | ------------------ |
| **seckey** <br /> string | **REQUIRED** <br /> This is the merchant secret key | Input TextBox Here |

