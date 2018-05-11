# Fetch a Payment Plan

This section shows you how to fetch a payment plan on a merchant account.

**Endpoint** :  https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/query

Below is a sample code of how to fetch a payment plan in different programming languages:

```

///   cURL

curl --request GET \
  --url 'https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/query?seckey=seckey'
  
  


///   Node


var request = require("request");

var options = { method: 'GET',
  url: 'https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/query',
  qs: { seckey: 'seckey' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



///   Ruby


require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/query?seckey=seckey")

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

xhr.open("GET", "https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/query?seckey=seckey");

xhr.send(data);



///   Python


import requests

url = "https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/query"

querystring = {"seckey":"seckey"}

response = requests.request("GET", url, params=querystring)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/d3aa42158281888e5486f47d4fb39cbd)


Should  your request go through, below is a sample of the response you’ll get:


```

{
  "status": "success",
  "message": "QUERIED-PAYMENTPLANS",
  "data": {
    "page_info": {
      "total": 6,
      "current_page": 1,
      "total_pages": 1
    },
    "paymentplans": [
      {
        "id": 89,
        "name": "kosewe",
        "amount": 45,
        "interval": "weekly",
        "duration": 0,
        "status": "active",
        "currency": "NGN",
        "plan_token": "rpp_551d26cc7c7f76f23581",
        "date_created": "2018-04-13T17:52:22.000Z"
      },
      {
        "id": 88,
        "name": "random",
        "amount": 120,
        "interval": "weekly",
        "duration": 11,
        "status": "active",
        "currency": "NGN",
        "plan_token": "rpp_a103899c61ef0e5442f3",
        "date_created": "2018-04-13T16:53:42.000Z"
      },
      {
        "id": 77,
        "name": "dsfghjbkn,jhgf",
        "amount": 1000,
        "interval": "daily",
        "duration": 0,
        "status": "active",
        "currency": "NGN",
        "plan_token": "rpp_eeed3737a09098c9c84e",
        "date_created": "2018-04-11T08:10:12.000Z"
      },
      {
        "id": 16,
        "name": "Internet Fees",
        "amount": 2000,
        "interval": "weekly",
        "duration": 4,
        "status": "active",
        "currency": "NGN",
        "plan_token": "rpp_874b364c8460fce342fb",
        "date_created": "2017-10-28T16:06:05.000Z"
      },
      {
        "id": 6,
        "name": "Rand",
        "amount": 20000,
        "interval": "weekly",
        "duration": 5,
        "status": "active",
        "currency": "NGN",
        "plan_token": "rpp_83ad01da6135e9ee73c5",
        "date_created": "2017-10-09T09:18:47.000Z"
      },
      {
        "id": 5,
        "name": "MyMotoXE",
        "amount": 2000,
        "interval": "weekly",
        "duration": 3,
        "status": "active",
        "currency": "NGN",
        "plan_token": "rpp_70857e7790f7cbd0c0fe",
        "date_created": "2017-10-09T06:38:58.000Z"
      }
    ]
  }
}
```


## Query Parameters
| 				| 												   | 					|
| ------------- | ------------------------------------------------ | ------------------ |
| **seckey** <br />string | **REQUIRED** <br /> This is the secret key of the merchant. | Input TextBox Here |
| **id** <br /> string     | This is the payment plan ID                      | Input TextBox Here |
| **q** <br /> string      | This is the name of the payment plan.            | Input TextBox Here |



