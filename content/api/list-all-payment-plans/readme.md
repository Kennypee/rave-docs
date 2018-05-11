# List All Payment Plans

This section shows you how to list all payment plans on a merchant account.

**Endpoint** :  https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/query

Below is a sample code of how to list all payment plans in different programming languages:

```
///  cURL

curl --request GET \
  --url https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/query
  
  
  
///   Node


var request = require("request");

var options = { method: 'GET',
  url: 'https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/query' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



///   Ruby


require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/query")

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

xhr.open("GET", "https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/query");

xhr.send(data);



///   Python


import requests

url = "https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/query"

response = requests.request("GET", url)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/c409d25263e7fccd658393fd5fe3ca8a)


Should  your request go through, below is a sample of the response you’ll get:

```
{
    "status": "success",
    "message": "QUERIED-PAYMENTPLANS",
    "data": {
        "page_info": {
            "total": 8,
            "current_page": 1,
            "total_pages": 1
        },
        "paymentplans": [
            {
                "id": 13,
                "name": "N/A",
                "amount": 0,
                "interval": "daily",
                "duration": 0,
                "status": "active",
                "plan_token": "rpp_2691c2319b943d39e4b5",
                "date_created": "2018-02-21T15:34:13.000Z"
            },
            {
                "id": 12,
                "name": "ALOMANDE-DELOVIS",
                "amount": 433,
                "interval": "weekly",
                "duration": 3,
                "status": "canceled",
                "plan_token": "rpp_cd130ca78659a7781125",
                "date_created": "2017-10-13T16:05:39.000Z"
            },
            {
                "id": 6,
                "name": "ALOMANDE-DELOVIS",
                "amount": 433,
                "interval": "weekly",
                "duration": 3,
                "status": "active",
                "plan_token": "rpp_c5f36ea0247757ca85cd",
                "date_created": "2017-10-06T12:21:49.000Z"
            },
            {
                "id": 5,
                "name": "ALOMANDE-DELOVIS",
                "amount": 433,
                "interval": "weekly",
                "duration": 3,
                "status": "active",
                "plan_token": "rpp_1f23cc94db0a871c27ff",
                "date_created": "2017-10-06T12:21:07.000Z"
            },
            {
                "id": 4,
                "name": "ALOMANDE",
                "amount": 433,
                "interval": "weekly",
                "duration": 3,
                "status": "active",
                "plan_token": "rpp_b1c7a7bbc88f15ffb87e",
                "date_created": "2017-10-06T12:20:07.000Z"
            },
            {
                "id": 3,
                "name": "08012993302",
                "amount": 0,
                "interval": "weekly",
                "duration": 3,
                "status": "active",
                "plan_token": "rpp_0fb96ec00631842dfb79",
                "date_created": "2017-10-06T12:16:20.000Z"
            },
            {
                "id": 2,
                "name": "Airtime Monthly",
                "amount": 10000,
                "interval": "weekly",
                "duration": 4,
                "status": "active",
                "plan_token": "rpp_81c5852a4b6edf22ce26",
                "date_created": "2017-10-06T06:28:50.000Z"
            },
            {
                "id": 1,
                "name": "Airtime Monthly",
                "amount": 10000,
                "interval": "weekly",
                "duration": 4,
                "status": "inactive",
                "plan_token": "rpp_ab0456860d031334cc50",
                "date_created": "2017-10-06T06:28:19.000Z"
            }
        ]
    }
}
```

## Query Parameters


| 				|  | 					|
| ------------- |  | ------------------ |
| **seckey** <br />string |  | Input TextBox Here |

