## Step 4:     Create a full string to be hashed by concatenating the result from Step 3 with your secret key

```
// This creates the full string to be hashed:

hashString = hashedPayload + "FLWSECK-bb971402072265fb156e90a3578fe5e6-X";
```

```
// This creates the full string to be hashed:

$completeHash = $hashedPayload.$seckey;
echo "$completeHash\n";
```

> **CAUTION:** When you use the secret key in your application, ensure that you always store it in an environment variable. Take great care not  to expose it in your code, you would most likely commit it, and it would be exposed to the public. Your secret key can be added to your code using an environment variable.