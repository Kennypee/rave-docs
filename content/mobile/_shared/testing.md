## Testing

Testing is a crucial part of setting up integrations. You’ll want to be certain that you don’t misguide your customers or have them make payments to the wrong account. Most importantly, testing helps you verify that our modal supports all the cards your users could be paying with. 

To this effect, we have set up [test cards](https://flutterwavedevelopers.readme.io/docs/test-cards) that’ll help you try out varying card types on your modal and confirm payments before deployment of your app. To test these cards on the project we’ve set up above, you’ll need to do a few things:

First sign up on the rave sandbox environment here to get your test keys (public and secret). Next, update the Rave Pay Manager `.setSecretKey()` and `.setPublicKey()` methods with the new test keys. Finally upadate the  `onStagingEnv()` method and set it to true:

    .setPublicKey("your_publicKey -from_sandbox")
    .setSecretKey("your_secretKey -from_sandbox")
    .onStagingEnv(true)
    
Now to test it out, visit our [Test Card](https://flutterwavedevelopers.readme.io/docs/test-cards) section and input the provided card details when you run your app

### You’ve gotten paid, now what?

Yaay!  You just completed integration. Complete some test transactions too and guess what, on Rave you are live when you sign up, the only steps we need you to complete are these:
Back on your Rave Dashboard,

1. Click on the `Add account` notification to add a bank account we can settle your funds into, along with a few other details that are required.
2. Once you complete this, you would see Live badge on your dashboard, hover over it, to see the limits set on your account.