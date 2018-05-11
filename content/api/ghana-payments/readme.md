# Ghana Payments

This section describes how to collect payments via Ghana mobile money.
 
Rave currently allows merchants use two payment methods in Ghana -  card and mobile money.
We would show you how to accept payments using the mobile money method.

## Prerequisites for accepting payments in Ghana.

1. Sign up for a live account here.
2. Set up a webhook to get notified on payments, to see more on webhooks check out the webhook section.
3. When trying to accept payment on a website you can use our inline js method and pass `currency` as `GHS` and `country` as `GH`, once you do this, the options for card and mobile money would come up.
4. After getting a response for the transaction call the verification endpoint to confirm the final status of the transaction.

## Accepting Mobile Money

Mobile money in Ghana can only be tested with Live credentials, please ensure you are using live credentials before attempting to test.

### Step 1: Encrypt your payload.

```

/// JSON

{
  "PBFPubKey": "FLWPUBK-4e581ebf8372cd691203b27227e2e3b8-X",
  "currency": "GHS",
  "payment_type": "mobilemoneygh",
  "country": "GH",
  "amount": "50",
  "email": "user@example.com",
  "phonenumber": "054709929220",
  "network": "MTN",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),
  "orderRef": "MC_" + Date.now(),
  "is_mobile_money_gh": 1,
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/4c0ce14937c5550a6355a29efdd28f29)


> To see a list of descriptions for the parameters listed here, please check the parameters section

Below is a sample encryption using PHP:

```


<?php
function getKey($seckey){
  $hashedkey = md5($seckey);
  $hashedkeylast12 = substr($hashedkey, -12);
  $seckeyadjusted = str_replace("FLWSECK-", "", $seckey);
  $seckeyadjustedfirst12 = substr($seckeyadjusted, 0, 12);
  $encryptionkey = $seckeyadjustedfirst12.$hashedkeylast12;
  return $encryptionkey;
}
function encrypt3Des($data, $key)
 {
  $encData = openssl_encrypt($data, 'DES-EDE3', $key, OPENSSL_RAW_DATA);
        return base64_encode($encData);
 }
function payviamobilemoneygh(){ // set up a function to test card payment.
    
    error_reporting(E_ALL);
    ini_set('display_errors',1);
    
    $data = array('PBFPubKey' => 'FLWPUBK-e634d14d9ded04eaf05d5b63a0a06d2f-X',
    'currency' => 'GHS',
    'country' => 'GH',
    'payment_type' => 'mobilemoneygh',
    'amount' => '30',
    'phonenumber' => '054709929300',
    'firstname' => 'Eddy',
    'lastname' => 'Kwame',
    'network' => 'MTN',
    'email' => 'tester@flutter.co',
    'IP' => '103.238.105.185',
    'txRef' => 'MXX-ASC-4578',
    'orderRef' => 'MXX-ASC-90929',
    'is_mobile_money_gh' => 1,
    'device_fingerprint' => '69e6b7f0sb72037aa8428b70fbe03986c');
    
    $SecKey = 'FLWSECK-bb971402072265fb156e90a3578fe5e6-X';
    
    $key = getKey($SecKey); 
    
    $dataReq = json_encode($data);
    
    $post_enc = encrypt3Des( $dataReq, $key );
    var_dump($dataReq);
    
    $postdata = array(
     'PBFPubKey' => 'FLWPUBK-e634d14d9ded04eaf05d5b63a0a06d2f-X',
     'client' => $post_enc,
     'alg' => '3DES-24');
    
    $ch = curl_init();
    
    curl_setopt($ch, CURLOPT_URL, "https://api.ravepay.co/flwv3-pug/getpaidx/api/charge");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postdata)); //Post Fields
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 200);
    curl_setopt($ch, CURLOPT_TIMEOUT, 200);
    
    
    $headers = array('Content-Type: application/json');
    
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    
    $request = curl_exec($ch);
    
    if ($request) {
        $result = json_decode($request, true);
        echo "<pre>";
        print_r($result);
    }else{
        if(curl_error($ch))
        {
            echo 'error:' . curl_error($ch);
        }
    }
    
    curl_close($ch);
}
payviamobilemoneygh();
```

View on [GitHub](https://gist.github.com/fullstackmafia/703921e613e8fa00147d437c523f85a3)


### Step 2: Call the charge endpoint with your encrypted data

Live endpoint: `Live endpoint: https://api.ravepay.co/flwv3-pug/getpaidx/api/charge`
Method: `POST`

```

$postdata = array(
     'PBFPubKey' => 'FLWPUBK-e634d14d9ded04eaf05d5b63a0a06d2f-X',
     'client' => $post_enc,
     'alg' => '3DES-24');
    
    $ch = curl_init();
    
    curl_setopt($ch, CURLOPT_URL, "http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/charge");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postdata)); //Post Fields
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 200);
    curl_setopt($ch, CURLOPT_TIMEOUT, 200);
    
    
    $headers = array('Content-Type: application/json');
    
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    
    $request = curl_exec($ch);
    
    if ($request) {
        $result = json_decode($request, true);
        echo "<pre>";
        print_r($result);
    }else{
        if(curl_error($ch))
        {
            echo 'error:' . curl_error($ch);
        }
    }
    
    curl_close($ch);
}

payviamobilemoneygh();
```

View on [GitHub](https://gist.github.com/fullstackmafia/ee20532a7875261b5aace14c5b203441)


### What happens after I call the charge endpoint ?

This triggers two things:

1. A request is sent to the phone number you passed to accept or decline the payment.
2. We call your webhook once the transaction has been completed with a successful or failed response.


Below is a sample of a response that indicates the transaction was successful:

```

{
  "status": "success",
  "message": "V-COMP",
  "data": {
    "id": 690055,
    "txRef": "MC-1520528216374",
    "orderRef": null,
    "flwRef": "FLWMM1522085245161",
    "redirectUrl": "http://127.0.0",
    "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
    "settlement_token": null,
    "cycle": "one-time",
    "amount": 3,
    "charged_amount": 3,
    "appfee": 0.037500000000000006,
    "merchantfee": 0,
    "merchantbearsfee": 1,
    "chargeResponseCode": "02",
    "raveRef": null,
    "chargeResponseMessage": "pending charge processing",
    "authModelUsed": "MOBILEMONEY",
    "currency": "GHS",
    "IP": "::ffff:10.5.186.67",
    "narration": "Raver",
    "status": "success-pending-validation",
    "vbvrespmessage": "N/A",
    "authurl": "NO-URL",
    "vbvrespcode": "N/A",
    "acctvalrespmsg": null,
    "acctvalrespcode": null,
    "paymentType": "mobilemoneygh",
    "paymentPlan": null,
    "paymentPage": null,
    "paymentId": "N/A",
    "fraud_status": "ok",
    "charge_type": "normal",
    "is_live": 0,
    "createdAt": "2018-03-08T16:57:23.000Z",
    "updatedAt": "2018-03-08T16:57:26.000Z",
    "deletedAt": null,
    "customerId": 437599,
    "AccountId": 48,
    "customer": {
      "id": 437599,
      "phone": "5475309092",
      "fullName": "temi desola",
      "customertoken": null,
      "email": "user@example.com",
      "createdAt": "2018-03-08T16:57:23.000Z",
      "updatedAt": "2018-03-08T16:57:23.000Z",
      "deletedAt": null,
      "AccountId": 48
    },
    "validateInstructions": "pending charge processing"
  }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/0bbb87a0be92968e9d74adbd1614732b)

> Great you are almost done, now you need to verify the transaction before giving value for this transaction.

To see how to verify the transaction, please visit the Xrequery Transaction verification
