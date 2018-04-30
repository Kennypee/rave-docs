## Step 2:     Sort all parameters using their ASCII value

```
// The keys in step 1 above are sorted by their ASCII value

const keys =  Object.keys(payload).sort();

// The sorted keys would be outputed in this format:

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
view raw
```

```
// The keys in step 1 above are sorted by their ASCII value

ksort($options);

var_dump($options); // check the order of the keys in the array.

// The sorted keys would be outputed in this format:

array(13) {
  ["PBFPubKey"]=>
  string(42) "FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X"
  ["amount"]=>
  int(900)
  ["country"]=>
  string(2) "GH"
  ["currency"]=>
  string(3) "GHC"
  ["custom_description"]=>
  string(8) "Hey Rave"
  ["custom_logo"]=>
  string(15) "http://logo.com"
  ["custom_title"]=>
  string(7) "Ravepay"
  ["customer_email"]=>
  string(16) "user@example.com"
  ["customer_firstname"]=>
  string(4) "Raphael"
  ["customer_lastname"]=>
  string(7) "Ugwu"
  ["customer_phone"]=>
  string(14) "+2338185615980"
  ["payment_method"]=>
  string(4) "both"
  ["txref"]=>
  string(13) "MV-1838383-JH"
}
```
