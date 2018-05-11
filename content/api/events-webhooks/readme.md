# Events (Webhooks)


## What are Webhooks?

A Webhook is a HTTP callback.  A HTTP POST that occurs when something happens; a simple event-notification via HTTP POST. A web application implementing Webhooks will POST a message to a URL when certain things happen.
Rave sends webhooks events that notify your application any time a payment event happens on your account. This is very useful for events - like getting paid via mobile money or USSD where the transaction is completed outside your application- Recurring billing where an API call is not needed for subsequent billings.
In Rave you can setup Webhooks that would let us notify you anytime events- A user on a subscription is charged, a customer completes a payment, we update a pending payment to failed or successful- happen in your account.

## When to use Webhooks

Webhooks can be used for all kinds of payment methods, card, account, USSD, Mpesa, and Ghana Mobile money.
If you use Rave to accept alternate payment methods like USSD, Mpesa, and Ghana mobile money, it is best practice to use Webhooks so that your integration can be notified about changes the status of the payment once it is completed. This is because these payment methods are asynchronous and responses only come once the customer has completed the payment on their device.

You might also use Webhooks to:

- Update a customer's membership record in your database when a subscription payment succeeds.
- Email a customer when a subscription payment fails.
- Update your database when the status of a pending payment is updated to successful or failed.

> **NOTE:**  Not in all cases would you be able to rely completely on Webhooks to get notified, an example is if your server is experiencing a downtime and your hook endpoints are affected, some customers might still be transacting independently of that and the hook call triggered would fail because your server was unreachable. In such cases we advice that developers set up a requery service that goes to poll for the transaction status at regular intervals e.g. `every hour` using the [Verify Payment](https://flutterwavedevelopers.readme.io/docs/status-check) endpoint, till a successful or failed response is returned.

## Sample Transaction Payload

On Rave, Webhooks can be configured for transactions. When a transaction is completed, a POST HTTP request is sent to the URL you have configured. The HTTP payload will contain


    // Card Transaction End Webhook Payload
    
    {
                "entity" : {
                    "card_last4" : "4242", 
                    "card6" : "424242"
                }, 
                "customer" : {
                    "AccountId" : 735, 
                    "deletedAt" : null, 
                    "updatedAt" : "2017-12-26T09:33:36.000Z", 
                    "createdAt" : "2017-12-26T09:33:36.000Z", 
                    "email" : "MAISHD@gmail.com", 
                    "customertoken" : null, 
                    "fullName" : "Anonymous customer", 
                    "phone" : null, 
                    "id" : 179602ß
                }, 
                "currency" : "NGN", 
                "IP" : "197.211.56.131", 
                "status" : "successful", 
                "charged_amount" : 19000ß, 
                "amount" : 19000ß, 
                "createdAt" : "2017-12-26T09:33:37.000Z", 
                "paymentPlan" : null, 
                "flwRef" : "FLWREF2839", 
                "txRef" : "SOMEREF92039", 
                "id" : 291689ß
            }


    // Account Transaction End Webhook Payload
    {
                "entity" : {
                    "last_name" : "NO-LNAME", 
                    "first_name" : "NO-NAME", 
                    "account_number" : "0717714000"
                }, 
                "customer" : {
                    "AccountId" : 623, 
                    "deletedAt" : null, 
                    "updatedAt" : "2018-01-19T06:18:41.000Z", 
                    "createdAt" : "2018-01-19T06:18:41.000Z", 
                    "email" : "user@example.com", 
                    "customertoken" : null, 
                    "fullName" : "Anonymous customer", 
                    "phone" : "N/A", 
                    "id" : 247224
                }, 
                "currency" : "NGN", 
                "IP" : "129.56.12.122", 
                "status" : "successful", 
                "charged_amount" : 38075, 
                "amount" : 37500, 
                "createdAt" : "2018-01-19T06:26:38.000Z", 
                "paymentPlan" : null, 
                "flwRef" : "ACHG-15063931900234", 
                "txRef" : "MC-1234444", 
                "id" : 391738
            }


## How to Setup Webhooks on your Rave Dashboard

On your Rave dashboard, navigate to the sidebar and click on `Settings`.  On the settings page, navigate to  `Webhooks`  to add a Webhook then click on  `Save`  to save it.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_87696F1118B80529CA6A8094A910C473FCB01EE992B3002726AB52354804F624_1522796355834_Screenshot+from+2018-04-03+23-59-05.png)


## Webhook Parameter Description

| PARAMETER               |DESCRIPTION                               |
| ----------------------- | -------------------------------------------------------------------- |
| **id**                     | This is the transaction ID.                                          |
| **flwRef**                  | Unique reference generated by the payment gateway (rave).            |
| **txRef**                   | Unique transaction reference provided by the merchant.               |
| **createdAt**               | This is the date the transaction was created.                        |
| **amount**                  | Amount sent by the merchant to be charged on the gateway.            |
| **charged_amount**          | Total amount charged from the customer (might include gateway fees). |
| **currency**                | defaults to NGN currency to charge the card in.                      |
| **country**                 | defaults to NG route country.                                        |
| **status**                  | The status of the transaction.                                       |
| **IP**                      | IP address of the customer performing the transaction.               |
| **customer[id]**            | ID of the customer making payment.                                   |
| **customer[email]**         | Email of the customer.                                               |
| **customer[phone]**         | phone number of the customer.                                        |
| **customer[fullName]**      | A combination of the firstname and lastname of the customer.         |
| **customer[customertoken]** | customer token                                                       |
| **customer[createdAt]**     | Date the customer was created.                                       |
| **customer[updatedAt]**     | Date the customer was updated.                                       |
| **customer[deletedAt]**     | Date customer was deleted.                                           |
| **customer[AccountId]**     | customer account ID.                                                 |
| **entity[card6]**           | The `First 6 digits` of the card used.                               |
| **entity[card_last4]**      | The `Last 4 digits` of the card used                                 |

