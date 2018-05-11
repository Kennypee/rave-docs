# API Request

This section describes the request format for calling Rave  API’s.

To construct a REST API request, you’ll need to combine a few components together as in the table below

| **Component**                       | **Description**                                                                                                                                                                                  |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTTP methods                    | <ul><li> `GET`. Requests data from a resource.</li><li>`POST`. Submits data to a resource to process.</li><li>`PUT`. Updates a resource.</li><li>`PATCH`. Partially updates a resource.</li><li>`DELETE`. Deletes a resource</li> </ul>|
| The Base URL to the API service | <ul><li>Sandbox (Test Environment) : https://ravesandboxapi.flutterwave.com</li> <li>Live (Live Environment): https://api.ravepay.co</li></ul>                                                                       |
| The URI to the resource         | The resource to query, submit data to, update, or delete. For example, `flwv3-pug/getpaidx/api/validatecharge`.                                                                               |
| HTTP request headers            | Includes the `Content-Type` header with the value `application/json`.                                                                                                                         |
| A JSON request body             | Required for most `GET`, `POST`, `PUT`, and `PATCH` calls.                                                                                                                                    |


This is a sample request that verifies a completed transaction:



    ///  cURL
    
    curl --request POST \
      --url https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/verify \
      --data '{"flw_ref":"FLW-MOCK-6f52518a2ecca2b6b090f9593eb390ce","normalize":"1","SECKEY":"FLWPUBK-e634d14d9ded04eaf05d5b63a0a06d2f-X"}'

HTTP Request Headers

The following table describes the commonly used HTTP request headers:

| Header         | Description                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `Accept`       | The response format: <br /> Required for operations with a response body. The syntax is: <br /> Accept:  `application/format` <br /> Where  `format` is `json`. |
| `Content-Type` | The request format: <br/> Required for operations with a request body. The syntax is: <br/> Content-Type: `application/format`                        |

