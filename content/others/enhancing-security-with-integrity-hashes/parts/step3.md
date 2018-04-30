## Step 3:     Concatenate the values in order of your sorted keys

```
// The payload is rearranged and the values concatenated in the order of the sorted keys.

        for(var index in keys){
            const key = keys[index];
            hashedPayload += payload[key];
        }

// The above sample would output a string that looks like this:

"FLWPUBK-e634d14d9ded04eaf05d5b63a0a06d2f-X20NGNGNPay Internethttp://localhost/payporte-3/skin/frontend/ultimo/shoppy/custom/images/logo.svgShoppy Global systemsuser@example.comRaphaelUgwu234099940409bothMG-1500041286295"
```

```
// The payload is rearranged and the values concatenated in the order of the sorted keys.

$hashedPayload = '';

foreach($options as $key => $value){

    $hashedPayload .= $value;
}

// The above sample would output a string that looks like this:

FLWPUBK-7adb6177bd71dd43c2efa3f1229e3b7f-X900NGNGNHey Ravehttp://logo.comRavepayuser@example.comuserexample+2348185615980bothMV-1838383-JHFLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X
```
