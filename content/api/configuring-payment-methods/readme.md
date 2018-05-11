# Configuring Payment Methods

With Rave, you have access to multiple payment methods including `card payments`, `account payments` , and `USSD` payments. The Rave checkout modal provides all methods at once, but based on your preference you can configure only certain payment methods to be shown to your users. This section will show you how to achieve exactly that.

To select a particular type of payment method you would need to pass the  `payment_method` key in your `getpaidSetup` function with either of the following values: `card`, `account`, `ussd`, `noussd`, `card_ussd`, and `account_ussd`


## Implementing Card Only Payments

You can implement card only payments by passing the  `payment_method: "card"`  key - value pair in your `getpaidSetup` function just like in the code sample below:

```
    //   Rave Inline Card Payment
    
    <form>
      <button type="button" style="cursor:pointer;" value="Pay Now" id="submit">Pay Now</button>
    </form>
    
    
    <script type="text/javascript" src="http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
    <script>
             document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById("submit").addEventListener("click", function() {
         
              trxref = "FDKHGK" + Math.random(),# add your transaction ref here
              pubkey = "FLWPUBK-e634d14d9ded04eaf05d5b63a0a06d2f-X"; # Add public keys generated on your dashboard here
          getpaidSetup({
            customer_email: "user@example.com",
            amount: 1000,
            currency: "NGN",
            country: "NG",
            payment_method: "card",
            custom_logo: "http://imgur.com/uuRnkV9",
            custom_description:"",
            custom_title: "The Start",
            txref: trxref,
            integrity_hash: "<PASS YOUR GENERATED INTEGRITY HASH HERE>",
            PBFPubKey: pubkey,
            onclose: function(response) {},
            callback: function(response) {
              var flw_ref = response.tx.flwRef;// collect flwRef returned and pass to a                                         server page to complete status check.
              console.log("This is the response returned after a charge", response);
              if(response.tx.chargeResponse =='00' || response.tx.chargeResponse == '0') {
                # redirect to a success page
              } else {
                # redirect to a failure page.
              }
            }
          });
        });
      });
    
    
    </script>
```


    //  Rave Embed Card Payment
    
    <html>
    
    <head>
      <title>Rave Inline Demo</title>
      <link rel='stylesheet' href='/stylesheets/style.css' />
    </head>
    
    <body>
      <h1>Pay with Rave</h1>
      <div class="container" id="ravepay">
        <row>
          <div class="col-md-6 col-md-offset-4">
            <form>
              <div class="row">
                <div class="col-md-8">
                  <label for="">Email address</label>
                  <input type="text" name="email" id="email" class="form-control border-input" value="user@example.com" placeholder="Enter email address" style="margin-bottom: 30px;">
                </div>
              </div>
                                            <!--<PASS YOUR GENERATED INTEGRITY HASH HERE>-->
               <a class="flwpug_getpaid" data-PBFPubKey="FLWPUBK-cba53ee1341aba1ec03fcee26568ae0d-X" data-txref="rave-checkout-1500826869" data-amount="1000" data-customer_email="user@example.com" data-integrity_hash="<PASS YOUR GENERATED INTEGRITY HASH HERE>" data-payment_method="card" data-currency="NGN" data-pay_button_text="Pay Now" data-country="NG" data-custom_title="Demo" data-custom_description="" data-redirect_url="" data-custom_logo=""></a>                
    
    <script type="text/javascript" src="https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
              <div class="clearfix"></div>
          </div>
          </form>
    
      </div>
      </row>
      </div>
     
    </body>
    
    </html>


[SEE A DEMO ON CODEPEN](https://codepen.io/temiadesina/pen/LjGJyB/)


## Implementing Account Only Payments

You can implement account only payments by passing the  `payment_method: "account"`  key - value pair in your `getpaidSetup` function just like in the code sample below:


    // Rave Inline Account Payment
    <form>
      <button type="button" style="cursor:pointer;" value="Pay Now" id="submit">Pay Now</button>
    </form>
    
```    
    <script type="text/javascript" src="http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
    <script>
             document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById("submit").addEventListener("click", function() {
         
              trxref = "FDKHGK" + Math.random(),// add your transaction ref here
              pubkey = "FLWPUBK-e634d14d9ded04eaf05d5b63a0a06d2f-X"; // Add public keys generated on your dashboard here
          getpaidSetup({
            customer_email: "user@example.com",
            amount: 1000,
            currency: "NGN",
            country: "NG",
            payment_method: "account",
            custom_logo: "http://imgur.com/uuRnkV9",
            custom_description:"",
            custom_title: "The Start",
            txref: trxref,
            integrity_hash: "<PASS YOUR GENERATED INTEGRITY HASH HERE>",//
            PBFPubKey: pubkey,
            onclose: function(response) {},
            callback: function(response) {
              var flw_ref = response.tx.flwRef;// collect flwRef returned and pass to a                                         server page to complete status check.
              console.log("This is the response returned after a charge", response);
              if(response.tx.chargeResponse =='00' || response.tx.chargeResponse == '0') {
                // redirect to a success page
              } else {
                // redirect to a failure page.
              }
            }
          });
        });
      });
    
    
    </script>
```


    //   Rave Embed Account Payment
    
    <html>
    
    <head>
      <title>Rave Inline Demo</title>
      <link rel='stylesheet' href='/stylesheets/style.css' />
    </head>
    
    <body>
      <h1>Pay with Rave</h1>
      <div class="container" id="ravepay">
        <row>
          <div class="col-md-6 col-md-offset-4">
            <form>
              <div class="row">
                <div class="col-md-8">
                  <label for="">Email address</label>
                  <input type="text" name="email" id="email" class="form-control border-input" value="user@example.com" placeholder="Enter email address" style="margin-bottom: 30px;">
                </div>
              </div>
                                            <!--<PASS YOUR GENERATED INTEGRITY HASH HERE>-->
              <a class="flwpug_getpaid" data-PBFPubKey="FLWPUBK-cba53ee1341aba1ec03fcee26568ae0d-X" data-txref="rave-checkout-1500826869" data-amount="1000" data-customer_email="user@example.com" data-integrity_hash="<PASS YOUR GENERATED INTEGRITY HASH HERE>" data-payment_method="account" data-currency="NGN" data-pay_button_text="Pay Now" data-country="NG" data-custom_title="Demo" data-custom_description="" data-redirect_url="" data-custom_logo=""></a>        
    
    <script type="text/javascript" src="https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
              <div class="clearfix"></div>
          </div>
          </form>
    
      </div>
      </row>
      </div>
     
    </body>
    
    </html>


[SEE A DEMO ON CODEPEN](https://codepen.io/temiadesina/pen/KvVxXN/)


## Implementing USSD only Payments

You can implement USSD only payments by passing the  `payment_method: "ussd"`  key - value pair in your `getpaidSetup` function just like in the code sample below:


```
    //    Rave Inline USSD Payments
    
    <form>
      <button type="button" style="cursor:pointer;" value="Pay Now" id="submit">Pay Now</button>
    </form>
    
    
    <script type="text/javascript" src="http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
    <script>
             document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById("submit").addEventListener("click", function() {
         
              trxref = "FDKHGK" + Math.random(),// add your transaction ref here
              pubkey = "FLWPUBK-e634d14d9ded04eaf05d5b63a0a06d2f-X"; // Add public keys generated on your dashboard here
          getpaidSetup({
            customer_email: "user@example.com",
            amount: 1000,
            currency: "NGN",
            country: "NG",
            payment_method: "ussd",
            custom_logo: "http://imgur.com/uuRnkV9",
            custom_description:"",
            custom_title: "The Start",
            txref: trxref,
            integrity_hash: "<PASS YOUR GENERATED INTEGRITY HASH HERE>",//
            PBFPubKey: pubkey,
            onclose: function(response) {},
            callback: function(response) {
              var flw_ref = response.tx.flwRef;// collect flwRef returned and pass to a                                         server page to complete status check.
              console.log("This is the response returned after a charge", response);
              if(response.tx.chargeResponse =='00' || response.tx.chargeResponse == '0') {
                // redirect to a success page
              } else {
                // redirect to a failure page.
              }
            }
          });
        });
      });
    
    
    </script>
```


    //   Rave Embed USSD Payment
    
    <html>
    
    <head>
      <title>Rave Inline Demo</title>
      <link rel='stylesheet' href='/stylesheets/style.css' />
    </head>
    
    <body>
      <h1>Pay with Rave</h1>
      <div class="container" id="ravepay">
        <row>
          <div class="col-md-6 col-md-offset-4">
            <form>
              <div class="row">
                <div class="col-md-8">
                  <label for="">Email address</label>
                  <input type="text" name="email" id="email" class="form-control border-input" value="user@example.com" placeholder="Enter email address" style="margin-bottom: 30px;">
                </div>
              </div>
                                            <!--<PASS YOUR GENERATED INTEGRITY HASH HERE>-->
              <a class="flwpug_getpaid" data-PBFPubKey="FLWPUBK-cba53ee1341aba1ec03fcee26568ae0d-X" data-txref="rave-checkout-1500826869" data-amount="1000" data-customer_email="user@example.com" data-integrity_hash="<PASS YOUR GENERATED INTEGRITY HASH HERE>" data-payment_method="account" data-currency="NGN" data-pay_button_text="Pay Now" data-country="NG" data-custom_title="Demo" data-custom_description="" data-redirect_url="" data-custom_logo=""></a>        
    
    <script type="text/javascript" src="https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
              <div class="clearfix"></div>
          </div>
          </form>
    
      </div>
      </row>
      </div>
     
    </body>
    
    </html>


[SEE A DEMO ON CODEPEN](https://codepen.io/temiadesina/pen/QMyVzd/)

  
