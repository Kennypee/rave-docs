# Initiate a Refund on Rave

Rave allows you initiate refunds for Successful transactions, there are two ways this can be achieved using the rave dashboard by:

- Navigating to **Transaction History > Click on the Refund Action button**.
- Initiating refunds via API, so you can send a request to refund a transaction or extend the ability to refund outside the Rave dashboard.

On Rave, only successful transactions can be refunded.

SandBox Endpoint :  `https://ravesandboxapi.flutterwave.com/gpx/merchant/transactions/refund`

Below is a code sample for initiating a refund in different programming languages:

```

///  cURL

curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/gpx/merchant/transactions/refund \
  --header 'content-type: application/json'
  
/// Node

var request = require("request");

var options = { method: 'POST',
  url: 'https://ravesandboxapi.flutterwave.com/gpx/merchant/transactions/refund',
  headers: { 'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

/// Ruby

require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/gpx/merchant/transactions/refund")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)
request["content-type"] = 'application/json'

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

xhr.open("POST", "https://ravesandboxapi.flutterwave.com/gpx/merchant/transactions/refund");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);

///  Python

import requests

url = "https://ravesandboxapi.flutterwave.com/gpx/merchant/transactions/refund"

headers = {'content-type': 'application/json'}

response = requests.request("POST", url, headers=headers)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/e975a204c41aecfe77521b77997f5774)


When you initiate the refund, you would either a successful response (200 OK) or a failed response (400 Bad Request).  Below is the sample of a successful response:

```
{
  "data": {
    "AmountRefunded": 15,
    "walletId": 976,
    "createdAt": "2017-12-18T11:19:15.000Z",
    "AccountId": 832,
    "id": 76,
    "FlwRef": "FLW-MOCK-f129ce9ac1fe993091795ce08c43fb9b",
    "TransactionId": 57898,
    "status": "completed",
    "updatedAt": "2017-12-18T11:19:15.000Z"
  },
  "message": "Refunded",
  "status": "success"
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/1b83545678877ad17c3bdb001df51dcf)


Below is the sample of a failed response:

```

{
  "status": "error",
  "message": "No transaction found",
  "data": {
    "code": "NO_TX",
    "message": "No transaction found"
  }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/de7babe24896bf73ec7c16bd7be9581b)


## Body Parameters
| 				|										|						|
| ------------- | --------------------------------------| --------------------- |
| **ref** <br />string    | **REQUIRED** <br />This is the `flwRef` returned in the `charge response`.                                                                                 | Input TextBox Here |
| **seckey** <br />string | **REQUIRED** <br />This is a unique key generated for each button created on Rave’s dashboard. It starts with a prefix `FLWSECK` and ends with suffix `X`. | Input TextBox Here |
| **amount** <br />string | This is an optional parameter and should be sent if you would like to refund a partial amount.                                                   | Input TextBox Here |





## Headers

| 							|			|						|
| ------------------------- | ----------| --------------------- |
| Content-Type <br />string | REQUIRED | Input TextBox Here |



