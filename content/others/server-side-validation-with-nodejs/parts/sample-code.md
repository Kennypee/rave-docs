## Sample code

Below is a sample code of how to implement server side validation using Node JS:

```

const express = require("express");
const bodyParser = require("body-parser");
const multipart = require("connect-multiparty");
// unirest is an http request library so any other preferred library can be used.
const unirest = require("unirest");

const PORT = process.env.PORT || 3128;

let multipartMiddleware = multipart();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/verifyPayment", multipartMiddleware, function(req, res) {
  var payload = {
    SECKEY: "FLWSECK-d16b95d7b3ae47f5c43bd63b609ee8eb-X",
    flw_ref: req.body.flw_ref
  };

  // please make sure to change this to production url when you go live
  var server_url =
    "http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/verify";

  unirest
    .post(server_url)
    .headers({ "Content-Type": "application/json" })
    .send(payload)
    .end(function(response) {
      //check status is success.
      if (response.body.status === "success") {
        if (response.body.data.amount === req.body.amount) {
          console.log("Payment successful");
          return res.json({
            status: 200,
            verified: true,
            message: "Payment Verified"
          });
        } else {
          return res.json({
            status: 200,
            verified: false,
            message: "Payment validation failed"
          });
        }
      }
    });
});

app.listen(PORT, function(){
    console.log(`Server started on locahost:${PORT}`);
});
```

[Visit on github](https://github.com/flutterwave-dev/node-server-validation)