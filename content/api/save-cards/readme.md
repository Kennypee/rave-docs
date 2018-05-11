# Save Cards 

This section shows you how to save a card using Rave.  To be able to save a card successfully using Rave, you need to perform an initial charge on the card. To see how to perform an initial charge visit the [Card Payments](/guides/api/card-payments) section.

After charging a card successfully on Rave, in your verify payment response you would find an object:


    "embedtoken" : "flw-t0-f6f915f53a094671d98560272572993e-m03k"

This is the token you would use for card tokenization.

Below is an example of a response  you will get when you charge a card successfully using Rave:

```

{
    "status": "success",
    "message": "Tx Fetched",
    "data": {
        "txid": 123976,
        "txref": "MC-1522866789642",
        "flwref": "FLW-MOCK-20bdec1097b925b9aa8224e06adb73d7",
        "devicefingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
        "cycle": "one-time",
        "amount": 10,
        "currency": "NGN",
        "chargedamount": 10,
        "appfee": 0,
        "merchantfee": 0,
        "merchantbearsfee": 1,
        "chargecode": "00",
        "chargemessage": "Approved. Successful",
        "authmodel": "VBVSECURECODE",
        "ip": "::ffff:127.0.0.1",
        "narration": "FLW-PBF CARD Transaction ",
        "status": "successful",
        "vbvcode": "00",
        "vbvmessage": "Approved. Successful",
        "authurl": "http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/mockvbvpage?ref=FLW-MOCK-20bdec1097b925b9aa8224e06adb73d7&code=00&message=Approved. Successful&receiptno=RN1522866810978",
        "acctcode": null,
        "acctmessage": null,
        "paymenttype": "card",
        "paymentid": "1450",
        "fraudstatus": "ok",
        "chargetype": "normal",
        "createdday": 3,
        "createddayname": "WEDNESDAY",
        "createdweek": 14,
        "createdmonth": 3,
        "createdmonthname": "APRIL",
        "createdquarter": 2,
        "createdyear": 2018,
        "createdyearisleap": false,
        "createddayispublicholiday": 0,
        "createdhour": 18,
        "createdminute": 33,
        "createdpmam": "pm",
        "created": "2018-04-04T18:33:30.000Z",
        "customerid": 22015,
        "custphone": "0902620185",
        "custnetworkprovider": "AIRTEL",
        "custname": "temi desola",
        "custemail": "user@gmail.com",
        "custemailprovider": "GMAIL",
        "custcreated": "2018-04-02T14:49:59.000Z",
        "accountid": 134,
        "acctbusinessname": "Synergy Group",
        "acctcontactperson": "Desola Ade",
        "acctcountry": "NG",
        "acctbearsfeeattransactiontime": 1,
        "acctparent": 1,
        "acctvpcmerchant": "N/A",
        "acctalias": "temi",
        "acctisliveapproved": 0,
        "orderref": "URF_1522866810933_7293235",
        "paymentplan": 16,
        "paymentpage": null,
        "raveref": "RV3152286680999275AD9704CC",
        "amountsettledforthistransaction": 10,
        "card": {
            "expirymonth": "12",
            "expiryyear": "20",
            "cardBIN": "475176",
            "last4digits": "9647",
            "brand": "VISA ACCESS BANK PLC CREDITPREMIER",
            "card_tokens": [
                {
                    "embedtoken": "flw-t1nf-16dead8e2217a10dccc8278b18dd5b71-m03k",
                    "shortcode": "61c4a",
                    "expiry": "9999999999999"
                }
            ],
            "life_time_token": "flw-t1nf-16dead8e2217a10dccc8278b18dd5b71-m03k"
        },
        "meta": [
            {
                "id": 25700,
                "metaname": "flightID",
                "metavalue": "123949494DC",
                "createdAt": "2018-04-04T18:33:32.000Z",
                "updatedAt": "2018-04-04T18:33:32.000Z",
                "deletedAt": null,
                "getpaidTransactionId": 123976
            }
        ]
    }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/3abb7c89b60212b4a9eafbf5f199c32c)

## Save a card using a token

Once the charge and validation are complete for the first charge on the card, you can make use of the token for subsequent charges.


> NB: You need to pass the same email used in the initial charge to the tokenized endpoint.


Endpoint  :   `https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/tokenized/charge`

Call the endpoint above using the sample payload:

```

///  cURL

curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/tokenized/charge \
  --header 'content-type: application/json' \
  --data '{"SECKEY":"FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X","token":"flw-t1nf-404dff6823ff91ce154f04dd40085b9e-m03k","currency":"NGN","country":"NG","amount":"100","email":"user@example.com","firstname":"Yemi","lastname":"Oyeleke","IP":"190.233.222.1","narration":"Internet Renewal","txRef":"MC_1522966555872","meta":""}
  
  /// JSON
  
  {
   "currency":"NGN",
   "SECKEY":"FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X",
   "token":"flw-t0876849e016386b2d-k3n-mock",
   "country":"NG",
   "amount":1000,
   "email":"desola.ade1@gmail.com",
   "firstname":"temi",
   "lastname":"Oyekole",
   "IP":"190.233.222.1",
   "txRef":"MC-7666-YU"
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/e7332da32e1e01258303b9e161463d4b)


Below is an example of the response you will get when you call the endpoint:

```

{
  "status": "success",
  "message": "Charge success",
  "data": {
    "id": 124983,
    "txRef": "MC_1522966555872",
    "orderRef": null,
    "flwRef": "FLW-M03K-3705232bce4536328b24d03579365e9f",
    "redirectUrl": "http://127.0.0",
    "device_fingerprint": "N/A",
    "settlement_token": null,
    "cycle": "one-time",
    "amount": 100,
    "charged_amount": 100,
    "appfee": 0,
    "merchantfee": 0,
    "merchantbearsfee": 1,
    "chargeResponseCode": "00",
    "raveRef": null,
    "chargeResponseMessage": "Approved",
    "authModelUsed": "noauth",
    "currency": "NGN",
    "IP": "190.233.222.1",
    "narration": "Internet Renewal",
    "status": "successful",
    "vbvrespmessage": "Approved",
    "authurl": "N/A",
    "vbvrespcode": "00",
    "acctvalrespmsg": null,
    "acctvalrespcode": null,
    "paymentType": "card",
    "paymentPlan": null,
    "paymentPage": null,
    "paymentId": "1057",
    "fraud_status": "ok",
    "charge_type": "normal",
    "is_live": 0,
    "createdAt": "2018-04-05T22:30:43.000Z",
    "updatedAt": "2018-04-05T22:30:43.000Z",
    "deletedAt": null,
    "customerId": 22536,
    "AccountId": 134,
    "customer": {
      "id": 22536,
      "phone": "09026420185",
      "fullName": "temi desola",
      "customertoken": null,
      "email": "user@example.com",
      "createdAt": "2018-04-05T07:38:39.000Z",
      "updatedAt": "2018-04-05T07:38:39.000Z",
      "deletedAt": null,
      "AccountId": 134
    },
    "chargeToken": {
      "user_token": "d843b",
      "embed_token": "flw-t0-953c59a47e4a98ad1f4dee7096c81d02-m03k"
    }
  }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/a26235ed04865771898fb6a7355754a8)

Great you are done charging a card without the user needing to verify the card details repeatedly. Now let’s head unto the next step: verifying the transaction before giving value to the customer.


## Verifying the payment

After charging an account successfully, you need to verify that the payment was successful with Rave before giving value to your customers. Although Rave inline does quite a good job of verifying the payment from the client side, we strongly recommend that you still perform a server side verification to further enhance and authenticate your payment flow. Below are the important things to check for when validating the payment:


- Verify the transaction reference.
- Verify the `data.status` of the transaction to be `successful`.
- Verify the `chargecode` returned in the response to be `00`.
- Verify the currency to be the expected currency
- Most importantly validate the amount paid to be equal to the amount of value to be given.

Below is sample code of how to implement server side validation in different programming languages:

```

///  cURL

curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery \
  --header 'content-type: application/json' \
  --data '{"txref":"MC_1522966555872","SECKEY":"FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X", "include_payment_entity": 1}'
  

///  PHP

<?php 

$result = array();

$postdata =  array( 
  'txref' => 'MC_1522966555872',
  'SECKEY' => 'FLWSECK-bb971402072265fb156e90a3578fe5e6-X',
  'inlcude_payment_entity' => 1
  );

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,json_encode($postdata));  //Post Fields
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$headers = [
  'Content-Type: application/json',
];

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$request = curl_exec ($ch);
$err = curl_error($ch);

if($err){
	// there was an error contacting rave
  die('Curl returned error: ' . $err);
}


curl_close ($ch);

$result = json_decode($request, true);

if('error' == $result->status){
  // there was an error from the API
  die('API returned error: ' . $result->message);
}

if('successful' == $result->data->status && '00' == $result->data->chargecode){
  // transaction was successful...
  // please check other things like whether you already gave value for this ref
  // If the amount and currency matches the expected amount and currency etc.
  // if the email matches the customer who owns the product etc
  // Give value
}


///  Java

//Endpoint to verify transaction
    private final String VERIFY_ENDPOINT = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery"; 
    
    /**
     * 
     * Method to 
     * 
     * @param paymententity - <b>paymententity - set as a constant with default value as 1</b>
     * @param txref - <b>txref - is the unique payment reference generated by the merchant.</b>
     * @param secret - <b>secret - is the merchant secret key</b>
     * @return
     * @throws UnirestException 
     */
    public JSONObject verify(String flwRef, String secret, double amount, int paymententity) throws UnirestException, Exception {
        
        // This packages the payload
        JSONObject data = new JSONObject();
        data.put("txref", txref);
        data.put("SECKEY", secret);
      	data.put("include_payment_entity", paymententity)
        
        // end of payload
        
        // This sends the request to server with payload
        HttpResponse<JsonNode> response = Unirest.post(VERIFY_ENDPOINT)
                .header("Content-Type", "application/json")
                .body(data)
                .asJson();
        
        // This get the response from payload
        JsonNode jsonNode = response.getBody();
        
        // This get the json object from payload
        JSONObject responseObject = jsonNode.getObject();
        
        // check of no object is returned
        if(responseObject == null)
            throw new Exception("No response from server");
        
        // This get status from returned payload
        String status = responseObject.optString("status", null);
        
        // this ensures that status is not null
        if(status == null)
            throw new Exception("Transaction status unknown");
        
        // This confirms the transaction exist on rave
        if(!"success".equalsIgnoreCase(status)){
            
            String message = responseObject.optString("message", null);
            
            throw new Exception(message);
        }
        
        data = responseObject.getJSONObject("data");
        
        // This get the amount stored on server
        double actualAmount = data.getDouble("amount");
        
        // This validates that the amount stored on client is same returned
        if(actualAmount != amount)
            throw new Exception("Amount does not match");
        
        
        // now you can give value for payment.
       
    }
    
///  C#

var data = new {txref = "MC_1522966555872", SECKEY = "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X", include_payment_entity = 1};
            var client = new HttpClient();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            var responseMessage = client.PostAsJsonAsync("https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery", data).Result;
            var responseStr = responseMessage.Content.ReadAsStringAsync().Result;
            var response = Newtonsoft.Json.JsonConvert.DeserializeObject<ResponseData>(responseStr);
            if (response.data.status == "successful" && response.data.amount == amount && response.data.chargecode == "00")
            {
              
              System.Console.WriteLine("Payment Successful then give value");
               
            }
```

View on [GitHub](https://gist.github.com/fullstackmafia/23f1707f81be220ee864f4835ea29153)

When you successfully verify a completed payment here’s what the response should look like:

```

{
    "status": "success",
    "message": "Tx Fetched",
    "data": {
        "txid": 121257,
        "txref": "MC-1522438968515",
        "flwref": "FLW-MOCK-5e52517f0b314c73c56992dc620d8998",
        "devicefingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
        "cycle": "one-time",
        "amount": 10,
        "currency": "NGN",
        "chargedamount": 10,
        "appfee": 0,
        "merchantfee": 0,
        "merchantbearsfee": 1,
        "chargecode": "00",
        "chargemessage": "Charge successful. Please enter the OTP sent to your mobile number 080****** and email te**@rave**.com",
        "authmodel": "VBVSECURECODE",
        "ip": "::ffff:127.0.0.1",
        "narration": "FLW-PBF CARD Transaction ",
        "status": "successful",
        "vbvcode": "00",
        "vbvmessage": "successful",
        "authurl": "http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/mockvbvpage?ref=FLW-MOCK-5e52517f0b314c73c56992dc620d8998&code=00&message=Approved. Successful&receiptno=RN1522438999815",
        "acctcode": null,
        "acctmessage": null,
        "paymenttype": "card",
        "paymentid": "1057",
        "fraudstatus": "ok",
        "chargetype": "normal",
        "createdday": 5,
        "createddayname": "FRIDAY",
        "createdweek": 13,
        "createdmonth": 2,
        "createdmonthname": "MARCH",
        "createdquarter": 1,
        "createdyear": 2018,
        "createdyearisleap": false,
        "createddayispublicholiday": 0,
        "createdhour": 19,
        "createdminute": 43,
        "createdpmam": "pm",
        "created": "2018-03-30T19:43:19.000Z",
        "customerid": 21887,
        "custphone": "0902620185",
        "custnetworkprovider": "AIRTEL",
        "custname": "temi desola",
        "custemail": "desola.ade1@gmail.com",
        "custemailprovider": "GMAIL",
        "custcreated": "2018-03-30T19:43:19.000Z",
        "accountid": 134,
        "acctbusinessname": "Synergy Group",
        "acctcontactperson": "Desola Ade",
        "acctcountry": "NG",
        "acctbearsfeeattransactiontime": 1,
        "acctparent": 1,
        "acctvpcmerchant": "N/A",
        "acctalias": "temi",
        "acctisliveapproved": 0,
        "orderref": "URF_1522438999774_1285835",
        "paymentplan": null,
        "paymentpage": null,
        "raveref": "RV31522438998679C0566DED05",
        "amountsettledforthistransaction": 10,
        "card": {
            "expirymonth": "12",
            "expiryyear": "20",
            "cardBIN": "543889",
            "last4digits": "0229",
            "brand": "MASTERCARD MASHREQ BANK CREDITSTANDARD",
            "card_tokens": [
                {
                    "embedtoken": "flw-t1nf-4877921998c0d784bbaf3949d23647a5-m03k",
                    "shortcode": "6a50e",
                    "expiry": "9999999999999"
                }
            ],
            "life_time_token": "flw-t1nf-4877921998c0d784bbaf3949d23647a5-m03k"
        }
    }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/853ecbab7d3d01c79eb8e65ce4210df2)


