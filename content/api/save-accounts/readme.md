# Save Accounts
 
This section shows you how to save a customers bank account after an initial charge using Rave's APIs. Once you save the account token that represents the account, you would be able to charge the customer subsequently without need for OTP.

## Saving an account successfully

To save an account successfully, you need to perform an initial charge on the account. To see how to perform an initial charge visit the Bank Account payments section.
After charging an account successfully on Rave, in your verify payment response you would find an object:


    "account_token.token": "flw-t0cd8f7ac849807c50-k3n-mock"


This is the token you would use for card tokenization.

Below is an example of the response you will get when you charge a saved account successfully using Rave:

```
{
    "status": "success",
    "message": "Tx Fetched",
    "data": {
        "txid": 126414,
        "txref": "rave-checkout-1523236014737",
        "flwref": "ACHG-1523236034134",
        "devicefingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
        "cycle": "one-time",
        "amount": 20,
        "currency": "NGN",
        "chargedamount": 20,
        "appfee": 0,
        "merchantfee": 0,
        "merchantbearsfee": 1,
        "chargecode": "00",
        "chargemessage": "Pending OTP validation",
        "authmodel": "AUTH",
        "ip": "::ffff:127.0.0.1",
        "narration": "Synergy Group",
        "status": "successful",
        "vbvcode": "N/A",
        "vbvmessage": "N/A",
        "authurl": "NO-URL",
        "acctcode": "00",
        "acctmessage": "Approved Or Completed Successfully",
        "paymenttype": "account",
        "paymentid": "478",
        "fraudstatus": "ok",
        "chargetype": "normal",
        "createdday": 1,
        "createddayname": "MONDAY",
        "createdweek": 15,
        "createdmonth": 3,
        "createdmonthname": "APRIL",
        "createdquarter": 2,
        "createdyear": 2018,
        "createdyearisleap": false,
        "createddayispublicholiday": 0,
        "createdhour": 1,
        "createdminute": 7,
        "createdpmam": "am",
        "created": "2018-04-09T01:07:14.000Z",
        "customerid": 22892,
        "custphone": "0000000000",
        "custnetworkprovider": "N/A",
        "custname": "Temi Tester",
        "custemail": "user@example.com",
        "custemailprovider": "COMPANY EMAIL",
        "custcreated": "2018-04-09T01:07:13.000Z",
        "accountid": 134,
        "acctbusinessname": "Synergy Group",
        "acctcontactperson": "Desola Ade",
        "acctcountry": "NG",
        "acctbearsfeeattransactiontime": 1,
        "acctparent": 1,
        "acctvpcmerchant": "N/A",
        "acctalias": "temi",
        "acctisliveapproved": 0,
        "orderref": "URF_1523236034033_5134535",
        "paymentplan": null,
        "paymentpage": null,
        "raveref": "RV315232360334537A8077848F",
        "amountsettledforthistransaction": 20,
        "account": {
            "id": 478,
            "account_number": "0690000037",
            "account_bank": "044",
            "first_name": "Dele Moruf",
            "last_name": "Quadri",
            "account_is_blacklisted": 0,
            "createdAt": "2018-04-05T13:30:04.000Z",
            "updatedAt": "2018-04-09T01:07:53.000Z",
            "deletedAt": null,
            "account_token": {
                "token": "flw-t0cd8f7ac849807c50-k3n-mock"
            }
        },
        "meta": []
    }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/5605cf9ac23daf255bca80236e50acba)

## Charge a saved account using a token

Once the charge and validation leg is complete for the first charge on the account, you can make use of the token for subsequent charges.


> NB: You need to pass the same email used in the initial charge leg to the tokenised endpoint.


Endpoint:  `https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/tokenized/account/charge`


- Call the endpoint above using the sample payload.


Below is an example of a request to charge a saved account using a token:

```

///  cURL

curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/tokenized/account/charge \
  --header 'content-type: application/json' \
  --data '{"SECKEY":"FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X","token":"flw-t0cd8f7ac849807c50-k3n-mock","currency":"NGN","country":"NG","amount":"100","email":"user@example.com","firstname":"Yemi","lastname":"Oyeleke","IP":"190.233.222.1","narration":"Internet Renewal","txRef":"rave-checkout-15232000455285","meta":""}'
  

///  JSON

{
   "currency":"NGN",
   "SECKEY":"FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X",
   "token":"flw-t0cd8f7ac849807c50-k3n-mock",
   "country":"NG",
   "amount":1000,
   "email":"user@example.com",
   "firstname":"temi",
   "lastname":"Oyekole",
   "meta": [{"metaname": "Location", "metavalue": "Lagos"}],
   "IP":"190.233.222.1",
   "txRef":"rave-checkout-152302190393540"
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/1dba8cb91719a09f3bf29ea2c58974b0)


Should your request go through, below is an example of the response you’ll be getting when you successfully charge a saved account using a token:

```

{
  "status": "success",
  "message": "Charge success",
  "data": {
    "id": 126416,
    "txRef": "rave-checkout-15232000455285",
    "orderRef": null,
    "flwRef": "FLW-M03K-bd7d0443d818ec7dca99ff3db8159492",
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
    "paymentType": "account",
    "paymentPlan": null,
    "paymentPage": null,
    "paymentId": "478",
    "fraud_status": "ok",
    "charge_type": "normal",
    "is_live": 0,
    "createdAt": "2018-04-09T01:17:07.000Z",
    "updatedAt": "2018-04-09T01:17:08.000Z",
    "deletedAt": null,
    "customerId": 22894,
    "AccountId": 134,
    "customer": {
      "id": 22894,
      "phone": null,
      "fullName": "Yemi Oyeleke",
      "customertoken": null,
      "email": "user@example.com",
      "createdAt": "2018-04-09T01:17:06.000Z",
      "updatedAt": "2018-04-09T01:17:06.000Z",
      "deletedAt": null,
      "AccountId": 134
    },
    "chargeToken": {
      "user_token": "flw-t0cd8f7ac849807c50-k3n-mock",
      "embed_token": "flw-t0cd8f7ac849807c50-k3n-mock"
    }
  }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/20a17fa2f737c14f581c9df8214c3516)

Great you are done charging a saved account without the user needing to enter the card details again. Now you need to verify the transaction before giving value to the customer.


## Verify the payment.

After charging a saved account successfully, you need to verify that the payment was successful with Rave before giving value to your customers. Although Rave inline does quite a good job of verifying the payment from the client side, we strongly recommend that you still perform a server side verification to further enhance and authenticate your payment flow. Below are the important things to check for when validating the payment:


- Verify the transaction reference.
- Verify the `data.status` of the transaction to be `successful`.
- Verify the `chargecode` returned in the response to be `00`.
- Verify the currency to be the expected currency
- Most importantly validate the amount paid to be equal to the amount of value to be given.

Below is sample code of how to implement server side validation when you charge a saved account, in different programming languages:

```

///  cURL

curl --request POST \
  --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery \
  --header 'content-type: application/json' \
  --data '{"txref":"rave-checkout-15232000455285","SECKEY":"FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X", "include_payment_entity": 1}'
  
///  PHP

<?php 

$result = array();

$postdata =  array( 
  'txref' => 'rave-checkout-15232000455285',
  'SECKEY' => 'FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X',
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

///   Java

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
    
///   C#

var data = new {txref = "rave-checkout-15232000455285", SECKEY = "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X", include_payment_entity = 1};
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

View on [GitHub](https://gist.github.com/fullstackmafia/e8e9b9c1e73522667670c0631e2b82e7)


When you successfully verify a completed payment, here’s an example of the response you’ll receive below:

```

{
  "status": "success",
  "message": "Tx Fetched",
  "data": {
    "txid": 126416,
    "txref": "rave-checkout-15232000455285",
    "flwref": "FLW-M03K-bd7d0443d818ec7dca99ff3db8159492",
    "devicefingerprint": "N/A",
    "cycle": "one-time",
    "amount": 100,
    "currency": "NGN",
    "chargedamount": 100,
    "appfee": 0,
    "merchantfee": 0,
    "merchantbearsfee": 1,
    "chargecode": "00",
    "chargemessage": "Approved",
    "authmodel": "noauth",
    "ip": "190.233.222.1",
    "narration": "Internet Renewal",
    "status": "successful",
    "vbvcode": "00",
    "vbvmessage": "Approved",
    "authurl": "N/A",
    "acctcode": null,
    "acctmessage": null,
    "paymenttype": "account",
    "paymentid": "478",
    "fraudstatus": "ok",
    "chargetype": "normal",
    "createdday": 1,
    "createddayname": "MONDAY",
    "createdweek": 15,
    "createdmonth": 3,
    "createdmonthname": "APRIL",
    "createdquarter": 2,
    "createdyear": 2018,
    "createdyearisleap": false,
    "createddayispublicholiday": 0,
    "createdhour": 1,
    "createdminute": 17,
    "createdpmam": "am",
    "created": "2018-04-09T01:17:07.000Z",
    "customerid": 22894,
    "custphone": null,
    "custnetworkprovider": "N/A",
    "custname": "Yemi Oyeleke",
    "custemail": "user@example.com",
    "custemailprovider": "COMPANY EMAIL",
    "custcreated": "2018-04-09T01:17:06.000Z",
    "accountid": 134,
    "acctbusinessname": "Synergy Group",
    "acctcontactperson": "Desola Ade",
    "acctcountry": "NG",
    "acctbearsfeeattransactiontime": 1,
    "acctparent": 1,
    "acctvpcmerchant": "N/A",
    "acctalias": "temi",
    "acctisliveapproved": 0,
    "orderref": null,
    "paymentplan": null,
    "paymentpage": null,
    "raveref": null,
    "amountsettledforthistransaction": 100,
    "account": {
      "id": 478,
      "account_number": "0690000037",
      "account_bank": "044",
      "first_name": "Dele Moruf",
      "last_name": "Quadri",
      "account_is_blacklisted": 0,
      "createdAt": "2018-04-05T13:30:04.000Z",
      "updatedAt": "2018-04-09T01:07:53.000Z",
      "deletedAt": null,
      "account_token": {
        "token": "flw-t0cd8f7ac849807c50-k3n-mock"
      }
    },
    "meta": []
  }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/13fc73def0087787f64f58f3c9eff0a1)
