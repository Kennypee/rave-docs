## Step 5:    Generate a sha256 hash of the hashstring and send to your Client page

```
// Generate the sha256 hash of the concatenated strings
const sha256Hash = createHash('sha256').update(hashString, 'utf8').digest('hex');

// Send the hash and any dynamic value to your client.
res.json({hash: sha256Hash, txref: payload.txref});
```

```

// Generate the sha256 hash of the concatenated strings

$hash = hash('sha256', $completeHash);
echo "$hash";
```
