# Get Paid using a Hosted Page

With a hosted payment page, you can load Rave’s modal on a different page. This is particularly useful for people who don’t want the modal to load on their site. One notable difference to include in the `getpaidSetup`  function when implementing a hosted payment page is the `redirect_url` object  —  which stores the URL for redirecting a user to Rave’s modal:  

    // REDIRECTING TO A HOSTED PAGE      
    <script>  
          getpaidSetup({
          PBFPubKey: "YOUR PUBLIC KEY",
          customer_email: "user@example.com",
          custom_title: "OGTECH",
          amount: 500,
          customer_phone: "233546744623",
          payment_method: "both",
          txref: "rave-123456",
          redirect_url: "https://rave-webhook.herokuapp.com/receivepayment",
          hosted_payment: 1,
          onclose: function() {},
          callback: function(response) {
            var flw_ref = response.tx.flwRef;
            console.log("This is the response returned after a charge", response);
            if (
              response.tx.chargeResponseCode == "00" ||
              response.tx.chargeResponseCode == "0"
            ) {
              // redirect to a success page
              console.log('Payment Successful')
            } else {
              // redirect to a failure page
              console.log('Error! Issue with Payment')
            }
          }
        });
      </script>  

The  `hosted_payment: 1`  allows your payment modal to load on a new page.