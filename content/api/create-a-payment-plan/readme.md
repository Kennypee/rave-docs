# Create a Payment Plan

This section describes how to create a payment plan.  

With Rave, you can collect payments recurrently from your customers using a payment plan. Payment plans allow you create a subscription for your customers.
When you have created a payment plan you can subscribe a customer to it by simply passing the `plan ID` in your request to charge the customers card.


## Payment plan endpoint


| 		  |  																  |
| ------- | ----------------------------------------------------------------- |
| Staging | https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/create |
| Live    | https://api.ravepay.co/v2/gpx/paymentplans/create                 |



| Parameter   | Required | Description                                                                                                                                                                                                                     |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `amount`    | true     | This is the amount for the plan.                                                                                                                                                                                                     |
| `name`      | true     | This is what would appear on the subscription reminder email                                                                                                                                                                         |
| `Intervals` | true     | This are the charge intervals possible values are: <br />`daily;` <br />`weekly;` <br />`monthly;` <br />`yearly;` <br />`quarterly;` <br />`bi-anually;` <br />`every 2 days;` <br />`every 90 days;` <br />`every 5 weeks;` <br />`every 12 months;` <br />`every 6 years;` <br /> e.g. `interval: "daily"` |
| `Duration`  | false    | This is the frequency, it is numeric, e.g. if set to `5` and intervals is set to `monthly` you would be charged `5 months`, and then the subscription stops.                                                                         |
| seckey      | true     | This is the secret key of the account creating the payment plan.                                                                                                                                                                     |

## Handling amount when creating a payment plan

`Case 1 :`  If amount is not set, the amount that would be used for the plan is the amount charged from the customer when you start the subscription.

`Case 2 :`  If amount is set when creating plan, and an amount is passed when doing the sub i.e. payment via the pay-button or via API calling charge endpoint. Then we charge the customer amount you passed at sub as initial charge, and for subsequent charges use the amount set when creating the plan.

`Case 3 :`  If amount is not set when creating plan, and an amount is passed when doing the sub i.e. payment via the pay-button or via API calling charge endpoint. Then we use the amount you passed as the amount for the plan.


Below is a code sample detailing the request you should make when creating a payment plan:

```
///  cURL

curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/create \
  --data '{"amount":"100","name":"Gate Waters","intervals":"monthly","duration":3,"seckey":"FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X"}'
  


///   JSON

{
	"amount": "2000",
  "name": "The Premium Plan",
  "intervals": "monthly",
  "duration": "12",
  "seckey": "FLWSECK-xxxx929292929292929-X"
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/4b0ac753e0e08090e7ff3fe5453d70b8)

Here’s an example of the response you will get should your request go through:

```
{
    "status": "success",
    "message": "CREATED-PAYMENTPLAN",
    "data": {
        "id": 13,
        "name": "N/A",
        "amount": 0,
        "interval": "daily",
        "duration": 0,
        "status": "active",
        "plan_token": "rpp_2691c2319b943d39e4b5",
        "date_created": "2018-02-21T15:34:13.000Z"
    }
}
```


### Retrieving the payment plan ID

The parameter you need when you create a payment plan is the payment plan ID, this can be found in the creation response, as `data.id` in the example response above the value we get would be the numeric number `13`

## How to charge your customer for a subscription after creating a payment plan.

You can charge your customer for a subscription after creating a payment plan via two ways:

### Option 1:
You can now use the payment plan ID, to perform subscription payments via the inline Javascript method. see an example using the [Recurring billing](/guides/api/recurring-billing) Javascript function:

```
// Sample showing how to add a plan ID to your javascript embed function

var x = getpaidSetup({
      PBFPubKey: API_publicKey,
      customer_email: "user@example.com",
      amount: 2000,
      customer_phone: "234099940409",
      currency: "NGN",
      payment_method: "both",
      txref: "rave-123456",
      payment_plan: 13,
      meta: [{metaname:"flightID", metavalue: "AP1234"}],
      onclose: function() {},
      callback: function(response) {
        var flw_ref = response.tx.flwRef; // collect flwRef returned and pass to a server page to complete status check.
        console.log("This is the response returned after a charge", response);
        if (
          response.tx.chargeResponseCode == "00" ||
          response.tx.chargeResponseCode == "0"
        ) {
          // redirect to a success page
        } else {
          // redirect to a failure page.
        }
        
        x.close(); // use this to close the modal immediately after payment.
      }
    });
  });
```

View on [GitHub](https://gist.github.com/fullstackmafia/1a3f7f6466150d1c50feec1f03186b92)

### Option 2

You can can use the [Card Payments API](/guides/api/card-payments) to charge the customer by simply adding the `payment_plan ID` to your request.

```
///   cURL

curl --request POST \
  --url http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/charge \
  --header 'content-type: application/json' \
  --data '{"client":"VodhvFFsni0CBeieHPq9HTuG5lbNPgmD5rbEw6Uxb0TD9eD9B3VM5uZ1B5lC3thQMbPypNBCAYxaW2W21VnGuznMPf1G1digsU8jFKbZgAXhI6ljhoWPIuk8O3fiFIQkKfyJmWOSPBvQifHMXZz2M73i6bU2bssV8Be54Xz7vUxfTaS32IQ7bd5gTnuiluBcSDSmnpj/d1qDtcEOP/sQD+AGJQq63FA+D5pmI/+nN3uDhj7prXqeduYVoyQiQ1gN3JyXXduWlE4Oz5/rm6R588NWPOjVfJE2DcGqp0TeCmzg64ikTwn3ag/4KMTk9exXUlkCaQAkasajno4cgFm4GR/6c4GYlkRdkX1soITGyMoETqwduBd9V7TozK0EzGvUr1/c0zFRDDmtSGqWx2T7fvZe+AxA41y6K0bxIdnWPaEj4JwnGaPOJ0pXdlU2kSZ13jBMsXnsJZHsSMaiD8e7dM9S6G8vTsLOINQFCl8SmTydTcoUJFjf5LbJ6yzt8Sj6VBqUS9NjERXutAnbVW2YD5iafEVTOiA59SEgfD41nLYtRUfBQpRAhXPF5IknVv0DZmsQRUIck90fp7Mw81dH28JtanEmb06wIhZkCq4LILkCX4Y/JRFCMiUIG4ex7P2+1a2tvuWQe4hbKuGmnTQibnNS1TSK+ktygHqkl6IaI6I1SKIPjUh4GH5sYgByaDSY51BGtsSUalStuh01E2kGdNCMkh5sxDzpDFdEqjSE/DU=","PBFPubKey":"FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X","alg":"3DES-24"}'
  
  
  
  ///  JSON
  
  {
  "PBFPubKey": "FLWPUBK-4e581ebf8372cd691203b27227e2e3b8-X",
  "cardno": "5399830240760817",
  "cvv": "473",
  "expirymonth": "12",
  "expiryyear": "20",
  "currency": "NGN",
  "country": "NG",
  "payment_plan": 13,
  "amount": "10",
  "email": "user@gmail.com",
  "phonenumber": "0902620185",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),// your unique merchant reference
  "meta": [{metaname: "flightID", metavalue: "123949494DC"}],
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/79daa8ddff2c9b14666ad65ffb00e802)


Below is the sample request for creating a payment plan in different programming languages

```

///   cURL


curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/create
  


///   Node


var request = require("request");

var options = { method: 'POST',
  url: 'https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/create' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});




///   Ruby


require 'uri'
require 'net/http'

url = URI("https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/create")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Post.new(url)

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

xhr.open("POST", "https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/create");

xhr.send(data);




///   Python


import requests

url = "https://ravesandboxapi.flutterwave.com/v2/gpx/paymentplans/create"

response = requests.request("POST", url)

print(response.text)
```

View on [GitHub](https://gist.github.com/fullstackmafia/dc62a615bff6055de49eb695dd9321bf)


## Body Parameters


| 					| 										  |					   |
| ----------------- | ----------------------------------------| ------------------ |
| **amount** <br />mixed type | **REQUIRED** <br />the amount for the plan.                                                                                                                            | Input TextBox here |
| **name** <br />string       | **REQUIRED** <br />what will appear on the subscription reminder email                                                                                                 | Input TextBox here |
| **intervals** <br />string  | **REQUIRED** <br />This is the charge interval e.g `intervals: "daily"`                                                                                                | Input TextBox here |
| **duration** <br />int32    | This is the frequency, it is numeric, e.g. if set to `5` and intervals is set to `monthly` you would be charged `5 months`, and then the subscription stops. | Input TextBox here |
| **seckey** <br />string     | **REQUIRED** <br />The secret key of the account creating the plan.                                                                                                    | Input TextBox here |

