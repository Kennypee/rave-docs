# Multicurrency Payments

This section will guide you on how to accept payments in multiple currencies in Rave. With Rave, merchants and businesses can accept payments globally. Currently, payments can be accepted in the following currencies:


| Country           | Currency                                      |
| ----------------- | --------------------------------------------- |
| Nigeria (NG)      | <ul><li>NGN</li> <li>USD</li> <li>EUR</li> <li>GBP</li> <li>KES (Card Payments)</li> </ul>	|
| Ghana (GH)        | <ul><li>GHS</li> <li>USD</li></ul>                                   	|
| Kenya (KE)        | <ul><li>KES (Mpesa Payments)</li> <li>USD</li></ul>                  	|
| South Africa (ZA) | ZAR                                         	|



To accept payments in the currency you desire, navigate to your `getpaidSetup` function and pass the country and its respective currency that you want to accept payments in. For example, if you want to accept USD in Kenya, your `getpaidSetup` function would have its `country` and `currency` keys in this format:


    getpaidSetup({
      //...,
      country: "KE",
      currency: "USD",
      //...
    })

If you don’t pass the  `country` and `currency` keys into the `getpaidSetup` function, the default values of `NG`  and  `NGN`  respectively will be used instead.


