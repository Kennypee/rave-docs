# Bank Account Payments

This section shows you how to charge bank accounts on Rave.
 
Rave allows you charge local bank accounts in Nigeria. Your customers can input their account number, an OTP is sent to their phone and the charge is authorized.


## Prerequisites for accepting account payments on Rave.


1. Sign-up for a Rave account [here](https://rave.flutterwave.com).
2. You can use webhooks to get notified on transactions using the [webhook guide](/guides/api/events-webhooks), or use the response returned by the endpoint.
3. For all account payments you would need to implement three steps to the transactions:  `Initiate payment` , `Validate payment`  and  `Verify completed payment`.


## Step 1: Encrypt your request

To see how to encrypt using any of our encryption function copy the sample request below and visit the [Rave Encryption](/guides/api/rave-encryption) section.

```
{
  "PBFPubKey": "FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X",
  "accountbank": "232",
  "accountnumber": "0061333471",
  "currency": "NGN",
  "payment_type": "account",
  "country": "NG",
  "amount": "10",
  "email": "desola.ade1@gmail.com",
  "passcode": "DDMMYYYY", // this is required for Zenith bank account payment.
  "phonenumber": "0902620185",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-0292920", // merchant unique reference
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/1f67b9b7ba5a35ffae652c1fb54fadd1)

 `passcode`   :  This is required for Zenith bank account payments, you are required to collect the customer's date of birth and pass it in this format  `DDMMYYYY`.

> NOTE :  Be sure to get a list of banks that are available for this payment method. You can make use of the [List of Banks API](https://flutterwavedevelopers.readme.io/reference#list-of-banks) to show your customers what banks are available.

## Step 2: Initiate your payment.

After encryption the next step is to initiate your payment using the encrypted string by sending a request to the `/charge` endpoint. See how to do that below.
Sandbox Endpoint: `https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/charge`

Below is a sample request for initiating a payment:

```

{
  "status": "success",
  "message": "V-COMP",
  "data": {
    "id": 13644,
    "txRef": "MC-7663-YU",
    "orderRef": null,
    "flwRef": "ACHG-1501266637278",
    "redirectUrl": "http://127.0.0",
    "device_fingerprint": "N/A",
    "settlement_token": null,
    "cycle": "one-time",
    "amount": 1000,
    "charged_amount": 1000,
    "appfee": 0,
    "merchantfee": 0,
    "merchantbearsfee": 0,
    "chargeResponseCode": "02",
    "chargeResponseMessage": "Pending OTP validation",
    "authModelUsed": "AUTH",
    "currency": "NGN",
    "IP": "::ffff:127.0.0.1",
    "narration": "Synergy Group",
    "status": "success-pending-validation",
    "vbvrespmessage": "N/A",
    "authurl": "NO-URL",
    "vbvrespcode": "N/A",
    "acctvalrespmsg": null,
    "acctvalrespcode": null,
    "paymentType": "account",
    "paymentId": "16",
    "fraud_status": "ok",
    "charge_type": "normal",
    "is_live": 0,
    "createdAt": "2017-07-28T18:30:37.000Z",
    "updatedAt": "2017-07-28T18:30:48.000Z",
    "deletedAt": null,
    "customerId": 85,
    "AccountId": 134,
    "customer": {
      "id": 85,
      "phone": null,
      "fullName": "Anonymous customer",
      "customertoken": null,
      "email": "user@example.com",
      "createdAt": "2017-01-24T08:09:05.000Z",
      "updatedAt": "2017-01-24T08:09:05.000Z",
      "deletedAt": null,
      "AccountId": 134
    },
    "validateInstructions": {
      "valparams": [
        "OTP"
      ],
      "instruction": "Please validate with the OTP sent to your mobile or email"
    }
  }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/f108dcc701fcb9e97e2cdcf86249e1f7)

`client`  :  This is the encrypted request parameters.
`PBFPubKey`  :  This is your merchant public key.
`alg`  :  This must always be passed as `3DES-24`.

When you initiate the payment you would get a response that looks like responses below:


https://gist.github.com/fullstackmafia/9b047173ac1787fda3d473813695174c


https://gist.github.com/fullstackmafia/9b047173ac1787fda3d473813695174c

Some of the important responses you should know about are broken down below:

`data.status` :  The status object inside the data object is the right status to check for. Possible values are `successful`, `failed`, `pending`, `success-pending-validation` and `pending-validation`.

`chargeResponseCode` :  This is the response code of the transaction, it typically tells you when a transaction is successful with a response code `00` or when the transaction requires validation `02`.

`validateInstructions`  :  This object contains the instructions you are meant to show to the customer so they know the next step to take, it typically tells them how to validate the transaction.

`paymentType`  :  This shows you the payment instrument used i.e. if the customer used a `card`, `account` or `ussd` to complete the payment.


## Step 3: Validate the payment.

After initiating the payment you would need to validate the transaction. Validation is like authentication, the customer is required to validate that they have the appropriate permission to carry out the payment.

To validate a transaction, see how below:

Sandbox Endpoint: `https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/validate`

Here’s the sample request for validating a transaction:

```
///   cURL

url --request POST \
  --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/validate \
  --data '{"PBFPubKey":"FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X","transactionreference":"ACHG
  
///  JSON

{
  "PBFPubKey": "FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X",
  "transactionreference": "ACHG-1501266637278", 
  "otp": "12345"
}
```


https://gist.github.com/fullstackmafia/2e7517964d9ab064e885124aa8fa0dda


`PBFPubKey`  :  This is your merchant public key.
`transactionreference`  :  This is the `flwRef` returned in the initiate payment response.
`OTP` : This is the one time pin inputed by the customer.

When you validate a payment you would get a response that looks like response below:

```

/// 200 OK

{
  "status": "success",
  "message": "Charge Complete",
  "data": {
    "id": 13644,
    "txRef": "MC-7663-YU",
    "orderRef": null,
    "flwRef": "ACHG-1501266637278",
    "redirectUrl": "http://127.0.0",
    "device_fingerprint": "N/A",
    "settlement_token": null,
    "cycle": "one-time",
    "amount": 1000,
    "charged_amount": 1000,
    "appfee": 0,
    "merchantfee": 0,
    "merchantbearsfee": 0,
    "chargeResponseCode": "00",
    "chargeResponseMessage": "Pending OTP validation",
    "authModelUsed": "AUTH",
    "currency": "NGN",
    "IP": "::ffff:127.0.0.1",
    "narration": "Synergy Group",
    "status": "successful",
    "vbvrespmessage": "N/A",
    "authurl": "NO-URL",
    "vbvrespcode": "N/A",
    "acctvalrespmsg": "Approved Or Completed Successfully",
    "acctvalrespcode": "00",
    "paymentType": "account",
    "paymentId": "16",
    "fraud_status": "ok",
    "charge_type": "normal",
    "is_live": 0,
    "createdAt": "2017-07-28T18:30:37.000Z",
    "updatedAt": "2017-07-28T18:33:10.000Z",
    "deletedAt": null,
    "customerId": 85,
    "AccountId": 134,
    "customer": {
      "id": 85,
      "phone": null,
      "fullName": "Anonymous customer",
      "customertoken": null,
      "email": "user@example.com",
      "createdAt": "2017-01-24T08:09:05.000Z",
      "updatedAt": "2017-01-24T08:09:05.000Z",
      "deletedAt": null,
      "AccountId": 134
    }
  }
}

///  Duplicate Transaction Reference

{
  "status": "error",
  "message": "Transaction already complete",
  "data": {
    "code": "SYSERR",
    "message": "Transaction already complete"
  }
}

///  OTP is required

{
  "status": "error",
  "message": "otp is required",
  "data": {}
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/9a4d8420f224f39e8d9865f411c9260c)


## Step 4: Verify the payment.

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
  --data '{"txref":"MC-09182829","SECKEY":"FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X", "include_payment_entity": 1}'
  
///  PHP

<?php 

$result = array();

$postdata =  array( 
  'txref' => 'MC-09182829',
  'SECKEY' => 'FLWSECK-bb971402072265fb156e90a3578fe5e6-X',
  'include_payment_entity' => 1
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

///  JAVA

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

var data = new {txref = "OH-AAED44", SECKEY = "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X", include_payment_entity = 1};
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

View on [GitHub](https://gist.github.com/fullstackmafia/84084363bf6353f04ab82d41b5d9964f)

When you successfully verify a completed payment you should see a response similar to the one below:

```

{
    "status": "success",
    "message": "Tx Fetched",
    "data": {
        "txid": 120552,
        "txref": "Sk6h9L95z",
        "flwref": "ACHG-1522326198714",
        "devicefingerprint": "justanydevicefingerprint",
        "cycle": "one-time",
        "amount": 300,
        "currency": "NGN",
        "chargedamount": 300,
        "appfee": 0,
        "merchantfee": 0,
        "merchantbearsfee": 1,
        "chargecode": "00",
        "chargemessage": "Pending OTP validation",
        "authmodel": "AUTH",
        "ip": "::ffff:127.0.0.1",
        "narration": "MFW|2323|Bylph5LqcM",
        "status": "successful",
        "vbvcode": "N/A",
        "vbvmessage": "N/A",
        "authurl": "NO-URL",
        "acctcode": "00",
        "acctmessage": "Approved Or Completed Successfully",
        "paymenttype": "account",
        "paymentid": "2",
        "fraudstatus": "ok",
        "chargetype": "normal",
        "createdday": 4,
        "createddayname": "THURSDAY",
        "createdweek": 13,
        "createdmonth": 2,
        "createdmonthname": "MARCH",
        "createdquarter": 1,
        "createdyear": 2018,
        "createdyearisleap": false,
        "createddayispublicholiday": 0,
        "createdhour": 12,
        "createdminute": 23,
        "createdpmam": "pm",
        "created": "2018-03-29T12:23:18.000Z",
        "customerid": 20379,
        "custphone": "0504705864",
        "custnetworkprovider": "UNKNOWN PROVIDER",
        "custname": "Giggs Matts",
        "custemail": "giggs.matts@gmail.com",
        "custemailprovider": "GMAIL",
        "custcreated": "2018-03-18T16:03:36.000Z",
        "accountid": 134,
        "acctbusinessname": "Synergy Group",
        "acctcontactperson": "Desola Ade",
        "acctcountry": "NG",
        "acctbearsfeeattransactiontime": 1,
        "acctparent": 1,
        "acctvpcmerchant": "N/A",
        "acctalias": "temi",
        "acctisliveapproved": 0,
        "orderref": "URF_1522326198142_165535",
        "paymentplan": null,
        "paymentpage": null,
        "raveref": "RV31522326197985C69CDBBF1C",
        "amountsettledforthistransaction": 300,
        "account": {
            "id": 2,
            "account_number": "0690000031",
            "account_bank": "044",
            "first_name": "NO-NAME",
            "last_name": "NO-LNAME",
            "account_is_blacklisted": 0,
            "createdAt": "2016-12-31T04:09:24.000Z",
            "updatedAt": "2018-04-01T18:01:53.000Z",
            "deletedAt": null,
            "account_token": {
                "token": "flw-t0e1bb79f967612fc1-k3n-mock"
            }
        }
    }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/b2ba77e779a96bf79139878c1f58ac72)
