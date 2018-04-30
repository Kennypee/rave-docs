# Enhancing Security with Integrity Hashes

This page describes how to implement Rave’s integrity hash. It also discusses how to add it to any JavaScript Framework you are integrating Rave with. An integrity hash helps you enhance security while working with Rave. It also helps keep your payments invulnerable on the client side. We would explain how integrity hash works:

In making use of an integrity hash, you are meant to sort the payment request parameters you send in your `getpaidSetup` function on your server. Example of such parameters include:

    [ 'PBFPubKey',
      'amount',
      'country',
      'currency',
      'custom_description',
      'custom_logo',
      'custom_title',
      'customer_email',
      'customer_firstname',
      'customer_lastname',
      'customer_phone',
      'payment_method',
      'txref' ]

What happens when you hash the values attached to the parameters in your `getpaidSetup`  function is that Rave’s engine picks them up, sorts them, computes the hash and compares it with the value of `integrity_hash` to make sure they match. This implies that the values you hash must match the values you pass to Rave in your `getpaidSetup` function.  

## Integrity Hash Rules

This is a higher security protocol that Rave offers to enhance the security of your transactions however, there are certain rules you must follow  while creating an integrity hash:

  - Make sure you send your `integrity_hash` value in lower case. This is because the server computes the hash in lowercase so they need to match.
  - Make sure your values are sorted and hashed using the same letter cases as what you input in your `getpaidSetup` function, if you’ve hashed `customer_firstname: CHRIS`, then you need to pass it to the client as  `customer_firstname: CHRIS`  and vice-versa.
  - For amount with decimal places, if decimal places have trailing zero's e.g. 100.000, be sure to remove all trailing zeros.

Always create the values you are passing to your inline js script on your server. After creating the value, hash it using a hashing algorithm called SHA 256. Once the value is hashed, send it to your client and add it as a parameter to your inline script. Below are the steps to properly hash a value:


## Step 1:     Create payment request parameters and values on your server


https://gist.github.com/fullstackmafia/47199693bda70cc29822f410da47d92d

https://gist.github.com/fullstackmafia/47199693bda70cc29822f410da47d92d

https://gist.github.com/fullstackmafia/8f7d22a449fdbe1d67912da323ba97cf

https://gist.github.com/fullstackmafia/8f7d22a449fdbe1d67912da323ba97cf


## Step 2:     Sort all parameters using their ASCII value

https://gist.github.com/fullstackmafia/bf6a2df1714efa8082c9aa1b72620aee

https://gist.github.com/fullstackmafia/bf6a2df1714efa8082c9aa1b72620aee

https://gist.github.com/fullstackmafia/29da4eee53b63d00eb98352967fcf488

https://gist.github.com/fullstackmafia/29da4eee53b63d00eb98352967fcf488

## Step 3:     Concatenate the values in order of your sorted keys

https://gist.github.com/fullstackmafia/dea1ba326b3928fbfbf6836f159b517e

https://gist.github.com/fullstackmafia/dea1ba326b3928fbfbf6836f159b517e

https://gist.github.com/fullstackmafia/6c3d60813d9865b890d3f7add75dd49b

https://gist.github.com/fullstackmafia/6c3d60813d9865b890d3f7add75dd49b

## Step 4:     Create a full string to be hashed by concatenating the result from Step 3 with your secret key

https://gist.github.com/fullstackmafia/4aa31131a5c1f69243d775cf07598c7f

https://gist.github.com/fullstackmafia/4aa31131a5c1f69243d775cf07598c7f

https://gist.github.com/fullstackmafia/f0c1225d594ab6feb12bb052911141a6

https://gist.github.com/fullstackmafia/f0c1225d594ab6feb12bb052911141a6


> **CAUTION:** When you use the secret key in your application, ensure that you always store it in an environment variable. Take great care not  to expose it in your code, you would most likely commit it, and it would be exposed to the public. Your secret key can be added to your code using an environment variable.


## Step 5:    Generate a sha256 hash of the hashstring and send to your Client page.

https://gist.github.com/fullstackmafia/fc46f06ff4a7cdc1fbd6caa02039effa

https://gist.github.com/fullstackmafia/fc46f06ff4a7cdc1fbd6caa02039effa

https://gist.github.com/fullstackmafia/7cce0f45d7e1cf490c29897665b5312a

https://gist.github.com/fullstackmafia/7cce0f45d7e1cf490c29897665b5312a


## Error returned for a bad Integrity Hash

Sometimes an integrity hash goes wrong. This  happens when a user clicks on the button for the modal to open up and then change any parameter value that was previously inputed, the modal would not be opened and an error would be returned.

![Error message returned for a bad integrity hash](https://d2mxuefqeaa7sj.cloudfront.net/s_6CB14F5D3B7F0E705F6D5191D818010FE6930A0E588137C84D8C3412A062E960_1521574513017_407f3a9-Screen_Shot_2017-08-01_at_4.06.15_PM.png)


