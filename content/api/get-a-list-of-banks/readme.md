# Get A List of Banks

In this section you will discover a list of Banks that can be charged using Rave. 

Endpoint:  https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-banks.js?json=1

Below is a code sample of how to get a breakdown of the list of banks that can be charged using Rave in different programming languages:

```

///  cURL

curl --request GET \
  --url 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-banks.js?json=1' \
  --header 'content-type: application/json'
  
  
  
///  Node


var request = require("request");

var options = { method: 'GET',
  url: 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-banks.js',
  qs: { json: '1' },
  headers: { 'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



///  Ruby


require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-banks.js?json=1")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
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

xhr.open("GET", "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-banks.js?json=1");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);



///   Python


import requests

url = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-banks.js"

headers = {'content-type': 'application/json'}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/4584df23252aab699be362a7feb135e4)



Should your request go through, below is a format of the response you’ll be getting:


```


[
  {
    "bankname": "ACCESS BANK NIGERIA",
    "bankcode": "044",
    "internetbanking": false
  },
  {
    "bankname": "ECOBANK NIGERIA PLC",
    "bankcode": "050",
    "internetbanking": false
  },
  {
    "bankname": "STERLING BANK PLC",
    "bankcode": "232",
    "internetbanking": false
  },
  {
    "bankname": "ZENITH BANK PLC",
    "bankcode": "057",
    "internetbanking": false
  },
  {
    "bankname": "FIRST CITY MONUMENT BANK PLC",
    "bankcode": "214",
    "internetbanking": false
  },
  {
    "bankname": "SKYE BANK PLC",
    "bankcode": "076",
    "internetbanking": false
  },
  {
    "bankname": "FSDH Merchant Bank Limited",
    "bankcode": "601",
    "internetbanking": false
  }
]
```


Headers

|		|		|		|
|--- 	| --- 	| --- 	|
| Content-Type <br />string | **REQUIRED** | Input TextBox Here |



This endpoint provides a list of banks that can be `charged` on Rave. It returns a key/value pair `internetbanking` in the response, if set to `false` it means the account can be charged using the direct account method, if set to `true` it means the account would be charged using the internet banking flow
