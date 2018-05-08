# API Keys
This section describes what API keys are and how to obtain them.

Rave authenticates your API requests using your account’s API keys. If you do not include your key when making an API request, or use one that is incorrect or outdated, Rave returns an error.
All API requests exist in either test or live mode, and one mode cannot be manipulated by data in the other. To get your  API keys you need to sign up for Rave [here](https://ravesandbox.flutterwave.com).


There are two types of API keys: publishable and secret.


- **Publishable API** keys are meant solely to identify your account with Rave, they aren’t secret. In other words, they can safely be published in places like your Rave JavaScript code, or in an Android or iPhone app. Publishable keys only have the power to create a transaction. An example of a publishable API Key can be seen below:


    FLWPUBK-b7c15gf7421a93fb53913bc4e42b560d-X


- **Secret API** keys should be kept confidential and only stored on your own servers. Your account’s secret API key can perform any API request to Rave without restriction. An example of a secret API key can be seen below:


    FLWSECK-e8fe16hs116ebd505adcd19428dde81c-X
## Obtaining your API Keys

Your API keys are available in the Dashboard by navigating to `Settings - > API`.
**Only use your test API keys for testing and development.**
This ensures you don't accidentally modify your live customers or transactions.
If you cannot see your API keys in the Dashboard, this means you do not have access to them. Contact your Rave account’s owner and ask to be added to their team as an admin.

## Test and Live modes

The test and live modes function almost identically, with a few necessary differences:

- In test mode, payments are not processed by card networks or payment providers, and only our [test payment information](https://flutterwavedevelopers.readme.io/v2.0/docs/test-cards) when testing cards can be used.
- In live mode, payments are processed by card networks or payment providers. Here your information, such as your account details and your card details can be used to process payments.

