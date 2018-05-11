# Xrequery Transaction Verification

Rave provides you with an easy way to verify transactions using your own transaction reference. In this section, we’ll show you how to to this in various programming languages.
 
Here’s the cURL for making your POST requests for this purpose. 

    
    https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery
    

### Ruby

    
    require 'uri'
    require 'net/http'
    
    url = URI("https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery")
    
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    
    request = Net::HTTP::Post.new(url)
    request["content-type"] = 'application/json'
    
    response = http.request(request)
    puts response.read_body

### Node

    var request = require("request");
    
    var options = { method: 'POST',
      url: 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery',
      headers: { 'content-type': 'application/json' } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
    });
    

### JavaScript

    var data = JSON.stringify(false);
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("POST", "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery");
    xhr.setRequestHeader("content-type", "application/json");
    
    xhr.send(data);

### Python

    import requests
    
    url = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/xrequery"
    
    headers = {'content-type': 'application/json'}
    
    response = requests.request("POST", url, headers=headers)
    
    print(response.text)


## Sample Success Responses

### 200 Account Transaction Response:
 

        "status": "success",
        "message": "Tx Fetched",
        "data": {
            "txid": 124161,
            "txref": "MC-1522914089167",
            "flwref": "ACHG-1522914115739",
            "devicefingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
            "cycle": "one-time",
            "amount": 10,
            "currency": "NGN",
            "chargedamount": 10,
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
            "paymentid": "2",
            "fraudstatus": "ok",
            "chargetype": "normal",
            "createdday": 4,
            "createddayname": "THURSDAY",
            "createdweek": 14,
            "createdmonth": 3,
            "createdmonthname": "APRIL",
            "createdquarter": 2,
            "createdyear": 2018,
            "createdyearisleap": false,
            "createddayispublicholiday": 0,
            "createdhour": 7,
            "createdminute": 41,
            "createdpmam": "am",
            "created": "2018-04-05T07:41:53.000Z",
            "customerid": 22536,
            "custphone": "09026420185",
            "custnetworkprovider": "AIRTEL",
            "custname": "temi desola",
            "custemail": "user@example.com",
            "custemailprovider": "COMPANY EMAIL",
            "custcreated": "2018-04-05T07:38:39.000Z",
            "accountid": 134,
            "acctbusinessname": "Synergy Group",
            "acctcontactperson": "Desola Ade",
            "acctcountry": "NG",
            "acctbearsfeeattransactiontime": 1,
            "acctparent": 1,
            "acctvpcmerchant": "N/A",
            "acctalias": "temi",
            "acctisliveapproved": 0,
            "orderref": "URF_1522914113761_6077035",
            "paymentplan": null,
            "paymentpage": null,
            "raveref": "RV31522914113478DA28603ABF",
            "amountsettledforthistransaction": 10,
            "account": {
                "id": 2,
                "account_number": "0690000031",
                "account_bank": "044",
                "first_name": "NO-NAME",
                "last_name": "NO-LNAME",
                "account_is_blacklisted": 0,
                "createdAt": "2016-12-31T04:09:24.000Z",
                "updatedAt": "2018-04-05T07:42:28.000Z",
                "deletedAt": null,
                "account_token": {
                    "token": "flw-t0e1bb79f967612fc1-k3n-mock"
                }
            },
            "meta": []
        }
    }

### 200 Card Transaction Response:

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

## Body Params
| Body Parameters                 | Description                                                                                                                                        | Value            |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| txRef (string)                  | **REQUIRED** <br />This is the merchant's unique transaction reference.                                                                                      |                  |
| SECRET (string)                 | **REQUIRED** <br />This is a unique key generated for each button created on Rave’s dashboard. It starts with a prefix; `FLWSECK` and ends with suffix; `X`. |                  |
| include_payment_entity (string) | **REQUIRED**                                                                                                                                           | 1                |
| HEADERS (string)                | **REQUIRED**                                                                                                                                           | application/json |

 
After integrating Rave checkout button and a user has successfully paid, you need to verify that the payment was successful with Rave, before giving value to your customer on your website.
Although the `Rave` `inline` already verifies the payment from the client side, we strongly recommend you still do a server side verification to be double sure that no foul play occurred during the payment flow.

Below are the important things to check for when validating the payment:

- Verify the transaction reference.
- Verify the `data.status` of the transaction to be `successful`.
- Verify the `chargecode` returned in the response to be `00`.
- Verify the currency to be the expected currency.

Most importantly, validate the `amount` paid to be equal to or at least greater than the `amount` of the value to be given. 

## Server Side Validation

Below is sample code of how to implement server side validation in different programming languages:

### PHP

    <?php 
    
    $result = array();
    
    $postdata =  array( 
      'txref' => 'OH-AAED44',
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

### C#

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

