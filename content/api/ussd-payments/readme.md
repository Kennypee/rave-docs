# USSD Payments

This section describes how to accept payments using USSD.
 
Rave allows you collect payments from your customers offline using USSD. With USSD payments, you call our APIs to create a charge, then give your customer instructions to complete the payment on their mobile phone. Once payment is completed we notify you on your webhook.
Rave currently has USSD options available for Zenith Bank and Guaranty Trust Bank customers.
The guide below would show you how to charge your customers with USSD on Rave using our APIs.

## Testing USSD Payments Successfuly

USSD payments can only be tested using **Live API Keys and credentials**, you would also need a live account and phone number enabled for USSD payments by the bank.

## Prerequisites for accepting USSD payments on rave.


1. Sign-up for a Rave account [here](https://rave.flutterwave.com).
2. You can use webhooks to get notified on transactions using the [webhook guide](/guides/api/events-webhooks), or use the response returned by the endpoint.
3. For all USSD payments you would need to implement three steps to the transactions:  `Initiate payment` , `Receive webhook response`  and   `Verify completed payment`.

## Step 1: Encrypt your request

To see how to encrypt using any of our encryption function copy the sample request below and visit the Rave Encryption section.

```

/// GT Bank

{
  "PBFPubKey": "FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X",
  "accountbank": "058",
  "accountnumber": "00000",// always use this default for GTB
  "currency": "NGN",
  "payment_type": "ussd",
  "country": "NG",
  "amount": "10",
  "email": "desola.ade1@gmail.com",
  "phonenumber": "0902620185",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(), // merchant unique reference
  "orderRef": "MC_" + Date.now(),
  "is_ussd": "true",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
}

/// Zenith Bank

{
  "PBFPubKey": "FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X",
  "accountbank": "057",
  "accountnumber": "0691008392",//collect the customers account number for Zenith
  "currency": "NGN",
  "payment_type": "ussd",
  "country": "NG",
  "amount": "10",
  "email": "desola.ade1@gmail.com",
  "phonenumber": "0902620185", 
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(), // merchant unique reference
  "orderRef": "MC_" + Date.now(),
  "is_ussd": "true",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/8ea69ddf9708cf1ff7920a053b38233f)

## Step 2: Initiate your payment.

After encryption the next step is to initiate your payment using the encrypted string by sending a request to the `/charge` endpoint. See how to do that below.

Sandbox Endpoint: `https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/charge`

Sample Request:

```

///  cURL

curl --request POST \
  --url https://api.ravepay.co/flwv3-pug/getpaidx/api/charge \
  --header 'content-type: application/json' \
  --data '{"client":"Hqj0LP5HNRNIthnOLqYjBwTIPizUp4PdiP7ZAKwqVz2RYtx5I0tcWurEVI40yXW9vyXa6Xxr9vhbmsTD8wE5B5ETm8i0H3s9zBFUiwosSmVsm+dh/NvVYzBIKaTvYW8qfmycnhf0WqFGCvNe95ArrW4p+QYDy7IpVui9f892l1IurQMyRZAZlYoW2L/6iX3WB0FYmm6bA8RFfqRoVNEJuI7STziZE/DdjjTKGwbcQO+QnnBv8Pp0rWwRNEwrb4RHYogfR06WsoGW0Vpl3EGlzMC0N/VudyGMFzkIrYdNE3DXjY9BcyXy1JYVU94lbYJXIouYfO/t5X2rCS6z0Ded8P2UIF4AJPFYDdytPJxwOUSt7DoU03S4AE3cl/9mdfsx0Di42KVIDfUwDTTf5cdl3i5S+V6Gcb8Mi8VnUyINsiW7FqnifgGSeAqxrV3+gaVS0YbLUWrRMhqIAE8pvdpLRq2SnO6wzhRVOO8JiMvCtGgNj7tSkgn/AJ7Lt+RAhdovMYmwhr4yXfKm7QCwkq5bP0mcaH/L+X7n6vS3k+XS4usbPgBdTuz3+Tsl/qhhDMRQDhOWYEgFSIOMZ9tBFiRD3VXiKRYQzq68QSG9VYbT8K2/W8NVH+1igCIEJxjsFHmcqkTmxeoxr7s=","PBFPubKey":"FLWPUBK-4e581ebf8372cd691203b27227e2e3b8-X","alg":"3DES-24"}'
  
///  JSON

{
  "client": "Hqj0LP5HNRNIthnOLqYjBwTIPizUp4PdiP7ZAKwqVz2RYtx5I0tcWurEVI40yXW9vyXa6Xxr9vhbmsTD8wE5B5ETm8i0H3s9zBFUiwosSmVsm+dh/NvVYzBIKaTvYW8qfmycnhf0WqFGCvNe95ArrW4p+QYDy7IpVui9f892l1IurQMyRZAZlYoW2L/6iX3WB0FYmm6bA8RFfqRoVNEJuI7STziZE/DdjjTKGwbcQO+QnnBv8Pp0rWwRNEwrb4RHYogfR06WsoGW0Vpl3EGlzMC0N/VudyGMFzkIrYdNE3DXjY9BcyXy1JYVU94lbYJXIouYfO/t5X2rCS6z0Ded8P2UIF4AJPFYDdytPJxwOUSt7DoU03S4AE3cl/9mdfsx0Di42KVIDfUwDTTf5cdl3i5S+V6Gcb8Mi8VnUyINsiW7FqnifgGSeAqxrV3+gaVS0YbLUWrRMhqIAE8pvdpLRq2SnO6wzhRVOO8JiMvCtGgNj7tSkgn/AJ7Lt+RAhdovMYmwhr4yXfKm7QCwkq5bP0mcaH/L+X7n6vS3k+XS4usbPgBdTuz3+Tsl/qhhDMRQDhOWYEgFSIOMZ9tBFiRD3VXiKRYQzq68QSG9VYbT8K2/W8NVH+1igCIEJxjsFHmcqkTmxeoxr7s=",
  "PBFPubKey": "FLWPUBK-4e581ebf8372cd691203b27227e2e3b8-X",
  "alg": "3DES-24"
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/b303996ded2b600d5a332ff18137f926)

`client` : This is the encrypted request parameters
`PBFPubKey` : This is your merchant public key
`alg` : must always be passed as `3DES-24`

When you initiate the payment you would get a response similar to the responses below:

```

///  GT Bank Response

{
  "status": "success",
  "message": "V-COMP",
  "data": {
    "id": 872026,
    "txRef": "MC-1522657714136",
    "orderRef": "MC_1522657714136",
    "flwRef": "19730",
    "redirectUrl": "http://127.0.0",
    "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
    "settlement_token": null,
    "cycle": "one-time",
    "amount": 10,
    "charged_amount": 10,
    "appfee": 0.125,
    "merchantfee": 0,
    "merchantbearsfee": 1,
    "chargeResponseCode": "02",
    "raveRef": null,
    "chargeResponseMessage": "Pending payment validation",
    "authModelUsed": "USSD",
    "currency": "NGN",
    "IP": "::ffff:10.165.112.254",
    "narration": "Raver",
    "status": "success-pending-validation",
    "vbvrespmessage": "N/A",
    "authurl": "NO-URL",
    "vbvrespcode": "N/A",
    "acctvalrespmsg": null,
    "acctvalrespcode": null,
    "paymentType": "ussd",
    "paymentPlan": null,
    "paymentPage": null,
    "paymentId": "10479",
    "fraud_status": "ok",
    "charge_type": "normal",
    "is_live": 0,
    "createdAt": "2018-04-02T08:30:11.000Z",
    "updatedAt": "2018-04-02T08:30:12.000Z",
    "deletedAt": null,
    "customerId": 556576,
    "AccountId": 48,
    "customer": {
      "id": 556576,
      "phone": "09026420185",
      "fullName": "temi desola",
      "customertoken": null,
      "email": "user@example.com",
      "createdAt": "2018-04-02T08:28:00.000Z",
      "updatedAt": "2018-04-02T08:28:00.000Z",
      "deletedAt": null,
      "AccountId": 48
    },
    "validateInstructions": "Pending payment validation"
  }
}

/// Zenith Bank Response

{
  "status": "success",
  "message": "V-COMP",
  "data": {
    "id": 875722,
    "txRef": "rave-pos-147999568555",
    "orderRef": "129574",
    "flwRef": "19846",
    "redirectUrl": "http://127.0.0",
    "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
    "settlement_token": null,
    "cycle": "one-time",
    "amount": 10,
    "charged_amount": 10.13,
    "appfee": 0.125,
    "merchantfee": 0,
    "merchantbearsfee": 0,
    "chargeResponseCode": "02",
    "raveRef": null,
    "chargeResponseMessage": "Kindly dial *966*6*035883*orderid# on your mobile to complete the transaction",
    "authModelUsed": "USSD",
    "currency": "NGN",
    "IP": "197.149.95.62",
    "narration": "Raver",
    "status": "success-pending-validation",
    "vbvrespmessage": "N/A",
    "authurl": "NO-URL",
    "vbvrespcode": "N/A",
    "acctvalrespmsg": null,
    "acctvalrespcode": null,
    "paymentType": "ussd",
    "paymentPlan": null,
    "paymentPage": null,
    "paymentId": "17822",
    "fraud_status": "ok",
    "charge_type": "normal",
    "is_live": 0,
    "createdAt": "2018-04-02T18:47:13.000Z",
    "updatedAt": "2018-04-02T18:47:15.000Z",
    "deletedAt": null,
    "customerId": 555880,
    "AccountId": 48,
    "customer": {
      "id": 555880,
      "phone": "09092928282",
      "fullName": "Anonymous Customer",
      "customertoken": null,
      "email": "salesmode@ravepay.co",
      "createdAt": "2018-04-01T23:31:32.000Z",
      "updatedAt": "2018-04-01T23:31:32.000Z",
      "deletedAt": null,
      "AccountId": 48
    },
    "validateInstructions": "Kindly dial *966*6*035883*129574# on your mobile to complete the transaction"
  }
}
```

View on GitHub(https://gist.github.com/fullstackmafia/bf08f719d57fc6124fa0d2fde138dadc)

### A couple of important responses you should know about are listed below:

`chargeResponseCode`   :  This is the response code of the transaction, it typically tells you when a transaction is successful with a response code `00` or when the transaction requires validation `02`.
`validateInstructions`  :  This object contains the instructions you are meant to show to the customer so they know the next step to take, it typically tells them how to validate the transaction.
`paymentType`  :  This shows you the payment instrument used i.e. if the customer used a `card`, `account` or  `USSD`  to complete the payment.
`charged_amount`  :  This is the amount that would be displayed as part of the USSD string, you would need to round up this amount, e.g. if your `charged_amount` is returned as `20.29` round it up to `21`
`flwRef`  :  You are to show this to the customer, as a `Transaction reference`, when they dial the USSD code on their screen, the prompt would ask them to input this reference.
`validateInstructions`  :  Display what is returned here to the customer when customer is paying with `Zenith USSD`.
`737*``50*charged_amount*159#`  :  When using `GTB` You need to display this as the USSD string the customer would dial. See a sample image below;



![The `flwRef` is shown as Transaction reference.](https://files.readme.io/322ec1b-Screenshot_2018-04-02_10.06.17.png)

## Step 3: Receive webhook response

Rave allows you configure Webhooks so you can get notified when actions like payment have been completed, it is a seamless way to handle offline transactions. Webhooks are returned in `application/x-www-form-urlencoded` . Check out the sample of a webhook response below:

```

///  HTTP

id=873293&txRef=rave-pos-380128206115&flwRef=19778&orderRef=568192&paymentPlan=&createdAt=2018-04-02T11%3A38%3A31.000Z&amount=10&charged_amount=10.13&status=successful&IP=197.149.95.62&currency=NGN&customer%5Bid%5D=557049&customer%5Bphone%5D=08166018693&customer%5BfullName%5D=Anonymous%20Customer&customer%5Bcustomertoken%5D=&customer%5Bemail%5D=salesmode%40ravepay.co&customer%5BcreatedAt%5D=2018-04-02T10%3A45%3A31.000Z&customer%5BupdatedAt%5D=2018-04-02T10%3A45%3A31.000Z&customer%5BdeletedAt%5D=&customer%5BAccountId%5D=48&entity%5Baccount_number%5D=1938833&entity%5Bfirst_name%5D=Joshua&entity%5Blast_name%5D=Akeredolu
```

View on [GitHub](https://gist.github.com/fullstackmafia/dbecb2875d1a0236d78ec6dcb24ad715)

Once this response has been received, it can be converted to JSON so as to make better use of it. 

## Step 4: Verify the payment.

After charging a customer via USSD successfully, you need to verify that the payment was successful with Rave before giving value to your customers. Although Rave inline does quite a good job of verifying the payment from the client side, we strongly recommend that you still perform a server side verification to further enhance and authenticate your payment flow. Below are the important things to check for when validating the payment:


- Verify the transaction reference.
- Verify the `data.status` of the transaction to be `successful`.
- Verify the `chargecode` returned in the response to be `00`.
- Verify the currency to be the expected currency
- Most importantly validate the amount paid to be equal to the amount of value to be given.

Below is sample code of how to implement server side validation in different programming languages:

```
///  cURL

curl --request POST \
  --url https://api.ravepay.co/flwv3-pug/getpaidx/api/xrequery \
  --header 'content-type: application/json' \
  --data '{"txref":"<Your live reference>","SECKEY":"<Your live secret key>", "include_payment_entity": 1}'
```

View on [GitHub](https://gist.github.com/fullstackmafia/0b04476dfac0e00f4c88426fdca3336b)

When you successfully verify a completed payment you should see a response similar to the one below:

```

{
    "status": "success",
    "message": "Tx Fetched",
    "data": {
        "txid": 873293,
        "txref": "rave-pos-380128206115",
        "flwref": "19778",
        "devicefingerprint": "69e6b7f0b72037aa8428b70fbe03986c",
        "cycle": "one-time",
        "amount": 10,
        "currency": "NGN",
        "chargedamount": 10.13,
        "appfee": 0.125,
        "merchantfee": 0,
        "merchantbearsfee": 0,
        "chargecode": "00",
        "chargemessage": "Pending payment validation",
        "authmodel": "USSD",
        "ip": "197.149.95.62",
        "narration": "Raver",
        "status": "successful",
        "vbvcode": "N/A",
        "vbvmessage": "N/A",
        "authurl": "NO-URL",
        "acctcode": "00",
        "acctmessage": "Successful",
        "paymenttype": "ussd",
        "paymentid": "9584",
        "fraudstatus": "ok",
        "chargetype": "normal",
        "createdday": 1,
        "createddayname": "MONDAY",
        "createdweek": 14,
        "createdmonth": 3,
        "createdmonthname": "APRIL",
        "createdquarter": 2,
        "createdyear": 2018,
        "createdyearisleap": false,
        "createddayispublicholiday": 0,
        "createdhour": 11,
        "createdminute": 38,
        "createdpmam": "am",
        "created": "2018-04-02T11:38:31.000Z",
        "customerid": 557049,
        "custphone": "08166018693",
        "custnetworkprovider": "MTN",
        "custname": "Anonymous Customer",
        "custemail": "salesmode@ravepay.co",
        "custemailprovider": "COMPANY EMAIL",
        "custcreated": "2018-04-02T10:45:31.000Z",
        "accountid": 48,
        "acctbusinessname": "Raver",
        "acctcontactperson": "Desola Adesina",
        "acctcountry": "NG",
        "acctbearsfeeattransactiontime": 0,
        "acctparent": 1,
        "acctvpcmerchant": "N/A",
        "acctalias": "raver",
        "acctisliveapproved": 0,
        "orderref": "568192",
        "paymentplan": null,
        "paymentpage": null,
        "raveref": null,
        "amountsettledforthistransaction": 10.005
    }
}
```

View on [GitHub](https://gist.github.com/fullstackmafia/3d676a8fe602ab2324e47ce36b24e169)



