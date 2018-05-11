# Refund or Void

This section shows you how to refund or void a card for preauthorization

**Endpoint** :  https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/refundorvoid


Below is a sample code of how to refund or void a card in different programming languages:

```

///   cURL


curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/refundorvoid \
  --header 'content-type: application/json'
  
  
  
///  Node


var request = require("request");

var options = { method: 'POST',
  url: 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/refundorvoid',
  headers: { 'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



///   Ruby


require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/refundorvoid")

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

xhr.open("POST", "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/refundorvoid");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);



///   Python


import requests

url = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/refundorvoid"

headers = {'content-type': 'application/json'}

response = requests.request("POST", url, headers=headers)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/4efbb76125ecd849082f03be9c184708)



Should your request go through, here is an example of the response you’ll be receiving:


```
{
    "status": "success",
    "message": "Refund or void complete",
    "data": {
        "data": {
            "responsecode": "00",
            "redirecturl": null,
            "avsresponsemessage": null,
            "avsresponsecode": null,
            "authorizeId": "",
            "responsemessage": "Approved",
            "otptransactionidentifier": null,
            "transactionreference": "FLW59293657",
            "responsehtml": null,
            "responsetoken": null
        },
        "status": "success"
    }
}
```



## Body Parameters

| 				| 		   | 					|
| ------------- | -------- | ------------------ |
| **ref** <br /> string    | This is the `flwRef` returned in the `capture response`.        | Input Textbox Here |
| **action** <br /> string | **REQUIRED** <br /> This is the action to be taken i.e. `refund` or `void` | Input Textbox Here |
| **SECKEY** <br /> string | **REQUIRED**          | Input Textbox Here |





## Headers

| 				| 		   | 					|
| ------------- | -------- | ------------------ |
| **Content-Type** <br />string | **REQUIRED** | Input Textbox Here <br />*placeholder : "application/json"* |