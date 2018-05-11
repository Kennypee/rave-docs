# Rave Errors
There are three major categories of RAVE API errors. They are: 


- Validation errors
- Rave errors
- Provider errors.

To easily identify these errors, they are often returned with the 400 http status code thus:


    {
      "status": "error",
      "message": "merchant secret key required",
      "data": null
    }



## VALIDATION ERRORS

Validation errors are returned when one or more validation rules fail. Instances where this may happen include but are not restricted to: not passing required parameters such as the transaction reference or provider reference during a re-query call. Below is an example of a validation error:


    {
      "status": "error",
      "message": "Cardno is required",
      "data": null
    }



## RAVE ERRORS

Rave errors are returned for one of two reasons:


1. An internal process error precluding a request from completing such as a server timeout.
2. Request from merchant keys that fail some limit / resource access / compliance checks.


  

The errors include:

### “You can only charge Nigerian Accounts in Naira”
You are most likely to come across this error if you try to charge a Nigerian bank account with a currency other than the Nigerian Naira.

### “USSD charges can only be done in Naira”
Attempting a USSD charge with a currency other than the Nigerian Naira is likely to lead to this error.

### “Invalid Auth model. Preauth can only be used with NOAUTH / BVN”
This error occurs when you attempt a PREAUTH charge passing an auth model other than NOAUTH / BVN.

### “Transaction with ref EXAMPLE-REF either does not exist or is not a valid preauth transaction”
This error occurs when you try to perform a capture on a transaction that either doesn't exist or belongs to your merchant. It also occurs when it is not as a result of an initial PREAUTH charge call.

### “Transaction has been flagged as fraudulent”
This error occurs when a transaction has been flagged by Rave’s fraud detection service following some irregularities defined as fraudulent.

### “Token not found”
This error occurs when an attempt is made to perform a tokenized charge with an invalid or non-existent token.

### “That token has expired”
This error occurs when an already used token is passed as the token value when performing a tokenized charge.

### “Transaction already complete”
This error occurs when you try to validate an already validated transaction. 

### “Transaction not found”
This error occurs when you try to validate a transaction with a non-existent reference.

### “Merchant limit is set at 3000 pending go live. Please contact support”
This error occurs when your account has not been approved by the compliance team.

### “Compliance Required. Please contact support”
This error occurs when your account is under compliance review.

### “Compliance status failure. Please contact support”
This error occurs when your account's compliance submission has been rejected by the compliance team.

### “Merchant over the allowed compliance value limit”
This error occurs when your account is under compliance review and you attempt a charge with an amount greater than the allowed in-review compliance limit.

### “You have exceeded your daily limit”
This error occurs when you attempt a charge with an amount greater than the daily transaction limit applicable to your merchant account.

### “Amount should be between xxxx and xxxxxxx”
This error occurs when you attempt a charge with an amount greater than the maximum transaction amount and lesser than the minimum transaction.

### “Sorry, that country does not exist. Please check and try again”
This error occurs when you pass a country code not currently supported by Rave.

### “Currency: XXX does not exist”
This error occurs when you pass a currency that is not currently supported by Rave for charge calls.

### “Merchant needs approval to make transactions”
This error occurs mostly on Sub-domain merchants that have not been approved by their parents for charge transactions.

### “Merchant is required to implement checksum. Please contact support”
This error occurs when you are making a charge request without passing the integrity hash parameter. 

### “Payment details mismatch. Please contact support”
This error occurs when the hash passed for checksum enabled API requests does not match the server generated hash.

### “An error occurred while attempting to decrypt some parameters”
This error occurs when request payload contains parameters encrypted wrongly.

### “Inactive public key passed”
This error occurs when a public key that has been deactivated is passed during a charge call.

## PROVIDER ERRORS
Provider errors are returned from the payment provider. A comprehensive list can be gotten here:


| ERROR NAME                    | ERROR DESCRIPTION                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| **UNSPECIFIED_FAILURE**           | Transaction could not be processed.                                                 |
| **DECLINED**                      | Transaction declined by issuer.                                                     |
| **TIMED_OUT**                     | Response timed out                                                                  |
| **EXPIRED_CARD**                  | Transaction declined due to expired card                                            |
| **INSUFFICIENT_FUNDS**            | Transaction declined due to insufficient funds                                      |
| **ACQUIRER_SYSTEM_ERROR**         | Acquirer system error occurred processing the transaction                           |
| **SYSTEM_ERROR**                  | Internal system error occurred processing the transaction                           |
| **NOT_SUPPORTED**                 | Transaction type not supported                                                      |
| **DECLINED_DO_NOT_CONTACT**       | Transaction declined - do not contact issuer                                        |
| **ABORTED**                       | Transaction aborted by payer                                                        |
| **BLOCKED**                       | Transaction blocked due to Risk or 3D Secure blocking rules                         |
| **CANCELLED**                     | Transaction cancelled by payer                                                      |
| **DEFERRED_TRANSACTION_RECEIVED** | Deferred transaction received and awaiting processing                               |
| **REFERRED**                      | Transaction declined - refer to issuer                                              |
| **AUTHENTICATION_FAILED**         | 3DS authentication failed                                                           |
| **INVALID_CSC**                   | Invalid card security code                                                          |
| **LOCK_FAILURE**                  | Order locked - another transaction is in progress for this order                    |
| **NOT_ENROLLED_3D_SECURE**        | Card holder is not enrolled in 3D Secure                                            |
| **EXCEEDED_RETRY_LIMIT**          | Transaction retry limit exceeded                                                    |
| **DECLINED_AVS**                  | Transaction declined due to address verification                                    |
| **DECLINED_CSC**                  | Transaction declined due to card security code                                      |
| **DECLINED_AVS_CSC**              | Transaction declined due to address verification and card security code             |
| **DECLINED_PAYMENT_PLAN**         | Transaction declined due to payment plan                                            |
| **UNKNOWN**                       | Response unknown                                                                    |
| **CARD_NOT_ENROLLED**             | The card is not enrolled for 3DS authentication                                     |
| **AUTHENTICATION_NOT_AVAILABLE**  | Authentication is not currently available                                           |
| **AUTHENTICATION_ATTEMPTED**      | Authentication was attempted but the card issuer did not perform the authentication |
| **CARD_DOES_NOT_SUPPORT_3DS**     | The card does not support 3DS authentication                                        |






> Please note that this is a non-exhaustive list and would keep getting updated as we update the error list.
