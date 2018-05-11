# Get Fees

Rave allows you to access a breakdown of the fees you are being charged per transaction. In this section, you will learn how to view the fees you are being charged per transaction.

Endpoint :  https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/fee

Below is a code sample of how to get a breakdown of the fees you are being charged in different programming languages:

```

///  cURL

curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/fee \
  --header 'content-type: application/json'
  
  
///  Node


var request = require("request");

var options = { method: 'POST',
  url: 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/fee',
  headers: { 'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



///  Ruby


require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/fee")

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

xhr.open("POST", "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/fee");
xhr.setRequestHeader("content-type", "application/json");

xhr.send(data);



///  Python


import requests

url = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/fee"

headers = {'content-type': 'application/json'}

response = requests.request("POST", url, headers=headers)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/db14323528c88efa6573e6ba03b93193)

Should your request go through, below is a format of the response you’ll be getting:

```
{
  "status": "success",
  "message": "Charged fee",
  "data": {
    "charge_amount": "1052.50",
    "fee": 52.5,
    "merchantfee": "0",
    "ravefee": "52.5"
  }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/980c184066123fca495a7d1096b0c34c)

## Body Parameters

| 				|										|						|
| ------------- | --------------------------------------| --------------------- |
| **amount** <br />string    | **REQUIRED** <br />This is the amount of the product or service to charged from the customer                                                                                                                  | Input TextBox Here |
| **PBFPubKey** <br />string | **REQUIRED** <br />This is a unique key generated for each button created on Rave’s dashboard. It starts with a prefix ‘FLWPUBK’ and ends with suffix ‘X’.                                                    | Input TextBox Here |
| **currency** <br />string  | **REQUIRED** <br />This is the specified currency to charge the card in.                                                                                                                                      | Input TextBox Here |
| **ptype** <br />string     | This is an `optional` parameter to be used when the payment type is account payment. A value of `2` is to be passed to the endpoint.                                                                | Input TextBox Here |
| **card6** <br />string     | This can be used only when the user has entered `first 6digits` of their card number, it also helps determine international fees on the transaction if the card being used is an international card | Input TextBox Here |



## Headers

| 							|			|						|
| ------------------------- | ----------| --------------------- |
| Content-Type <br />string | REQUIRED | Input TextBox Here |



The successful response for get fees endpoint is broken down this way:


`data.charge.amount`  :  This the total amount to be charged, total amount = amount + fee

`data.fee`  :  This is a cumulative of the merchant fee (if applicable) `+` ravefee

`data.merchantfee`  :  This is the merchant fee on the transaction, it is applicable when using a subdomain. Subdomains allow you white-label Rave, and offer it as a customized service to your merchant, we allow you set a markup fee on it and earn `transaction fees`. In this scenario the `merchant-fee` would be the `subdomain markup fee` if applicable.

`data.ravefee`  :  This is the fee charged per transaction by Rave.
