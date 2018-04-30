## Step 1:     Create payment request parameters and values on your server


```
integrityValue: (req, res) => {
    const hashedPayload = '';
    const payload = {
        "PBFPubKey"			: 'FLWPUBK-e634d14d9ded04eaf05d5b63a0a06d2f-X',
        "amount"			: 20,
        "payment_method"	: "both",
        "custom_description": "Pay Internet",
        "custom_logo"		: "http://localhost/payporte-3/skin/frontend/ultimo/shoppy/custom/images/logo.svg",
        "custom_title"		: "Shoppy Global systems",
        "country"			: "GH",
        "currency"			: "GHC",
        "customer_email"	: 'user@example.com',
        "customer_firstname": 'Raphael',
        "customer_lastname"	: "Ugwu",
        "customer_phone"	: "233099940409",
        "txref"				: "MG-" + Date.now()
    };
}
```

```
$pb_key 			= "FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X"; 
$amount_in_cedis 	= 900; 
$customer_email 	= "user@example.com"; 
$customer_firstname = "Raphael"; 
$customer_lastname 	= "Ugwu"; 
$txref 				= "MV-1838383-JH"; 
$pmethod 			= "both"; 
$seckey 			= "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X"; 
$country 			= "GH"; 
$currency 			= "GHC"; 
$custom_description = "Hey Rave"; 
$custom_logo 		= "http://logo.com"; 
$custom_title 		= "Ravepay"; 
$customer_phone 	= "+2338185615980"; 

$options = array( 
    "PBFPubKey" 			=> $pb_key, 
    "amount" 				=> $amount_in_cedis, 
    "customer_email" 		=> $customer_email, 
    "customer_firstname" 	=> $customer_firstname, 
    "txref" 				=> $txref, 
    "payment_method" 		=> $pmethod, 
    "customer_lastname" 	=> $customer_lastname, 
    "country" 				=> $country, 
    "currency" 				=> $currency, 
    "custom_description" 	=> $custom_description, 
    "custom_logo" 			=> $custom_logo, 
    "custom_title" 			=> $custom_title, 
    "customer_phone" 		=> $customer_phone 
);
```