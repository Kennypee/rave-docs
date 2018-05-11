# API Response
This page describes the Response format for calling Rave API’s
 
Rave API calls return HTTP status codes in the response headers. API calls also return `JSON` response bodies that include information about the resource.

## HTTP Status Codes
Each REST API request returns a success or error HTTP status code:

### Success
In the response headers, Rave returns these HTTP status codes for successful requests:

| Status Code | Description                |
| ----------- | -------------------------- |
| 200 OK      | The request was successful |


### Error

In the responses for failed requests, Rave returns HTTP `400` status codes.
RAVE API errors can be grouped into three main categories. The validation errors, rave errors and provider errors.
They are usually returned in this format with the HTTP `400` status code:



    ///  JSON
    
    {
        "status": "error",
        "message": "Merchant not enabled for API Disburse",
        "data": null
    }

Or with a `Data` Object:



    ///  JSON
    
    {
      "status": "error",
      "message": "No transaction found",
      "data": {
        "code": "NO TX",
        "message": "No transaction found"
      }
    }


| **HTTP status code**          | **Typical error code and error message**           | **Cause**                                                                                                                                                                                |
| ------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 400 Bad Request           | `VV_TX`. TRANSACTION ALREADY VERIFIED          | The transaction was already verified with the same reference                                                                                                                         |
| 404 Not Found             | `NO TX`. The specified resource does not exist | The server did not find anything that matches the request URI. Either the URI is incorrect or the resource is not available. For example, no data exists in the database at that key |
| 500 Internal Server Error | An internal server error has occurred.         | A system or application error occurred. Although the client appears to provide a correct request, something unexpected occurred on the server                                        |
| 503 Service Unavailable   | Service Unavailable.                           | The server cannot handle the request for a service due to temporary maintenance                                                                                                      |

You can find out more about Rave errors [here](/guides/api/rave-errors)
