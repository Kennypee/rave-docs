## Integrity Hash Rules

This is a higher security protocol that Rave offers to enhance the security of your transactions however, there are certain rules you must follow  while creating an integrity hash:

  - Make sure you send your `integrity_hash` value in lower case. This is because the server computes the hash in lowercase so they need to match.
  - Make sure your values are sorted and hashed using the same letter cases as what you input in your `getpaidSetup` function, if you’ve hashed `customer_firstname: CHRIS`, then you need to pass it to the client as  `customer_firstname: CHRIS`  and vice-versa.
  - For amount with decimal places, if decimal places have trailing zero's e.g. 100.000, be sure to remove all trailing zeros.

Always create the values you are passing to your inline js script on your server. After creating the value, hash it using a hashing algorithm called SHA 256. Once the value is hashed, send it to your client and add it as a parameter to your inline script. 

Let's examine steps to properly hash values: