# Recurring Billing

With Rave, you can collect payments from your customers recurringly. To get started with billing your customers recurringly, follow these steps:


1. Login into your Rave dashboard, on the sidebar navigate to Collect payments.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_F8C2AD5CA0C5CA5F5413227792A3F70DB4762D502B98E36E8B5F1D0D93B1E1FF_1522794111600_Screenshot+from+2018-03-29+00-28-11.png)


2. In the Collect Payments section, click on the  `Create Payment page`  button.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_F8C2AD5CA0C5CA5F5413227792A3F70DB4762D502B98E36E8B5F1D0D93B1E1FF_1522794334021_Screenshot+from+2018-04-03+23-25-18.png)


3. Select  `Recurring Charge`  in the modal that pops up.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F8C2AD5CA0C5CA5F5413227792A3F70DB4762D502B98E36E8B5F1D0D93B1E1FF_1522794422834_Screenshot+from+2018-03-29+14-17-08.png)


4. Input the necessary information where required. You can now share your recurring payment link to accept recurring charges.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F8C2AD5CA0C5CA5F5413227792A3F70DB4762D502B98E36E8B5F1D0D93B1E1FF_1522794716308_Screenshot+from+2018-04-03+23-31-44.png)

## Enable Recurring Billing using the Javascript Payment Modal

To enable recurring billing using JavaScript’s payment modal, follow these steps:

1. On your dashboard, navigate to Collect Payments.
2. Click on `Payment Plans`, and create a new payment plan.
3. Fill in the payment plan details and proceed.
4. Once the payment plan is created click on it to retrieve the `plan ID`.
5. Once you retrieve the plan ID, add it to the `payment_plan`  key to enable recurring payments.

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
          payment_plan: *YOUR PLAN ID HERE*,
          meta: [{metaname:"flightID", metavalue: "AP1234"}],
          onclose: function() {},
          callback: function(response) {
            var flw_ref = response.tx.flwRef; // collect flwRef returned and pass to a                                         server page to complete status check.
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
      

Should you wish to make use of our API instead, you can check out how to get started on Rave’s API documentation section that covers how to create a payment plan here.

```

