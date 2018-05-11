# Rave Encryption

This page describes how to encrypt charge requests when calling Rave's direct API's
 
Rave ensures complete security by using `3DES` military grade encryption. When performing a `card/account charge` and your request is sent from your server, you will need to use  `3DES` encryption and our  `getKey()`  function to generate an  `encryption key`.


> **Using your secret key in your application**
> Always store your `secret key` in an environment variable, don't expose it in your code, you would most likely commit it, and it would be exposed to the public. You can add it in your code using an environment variable.

### Rave encryption is broken down into two parts:


1. the `getKey()` function: - this helps generate the encryption key to be used by hashing the key (Secret Key) using an `md5` algorithm then picking a `substring`(last 12 digits) of the the hashed key.

On the other end, you would strip the original key of it's prefix (`FLWSECK-`), and get the `substring` (first 12 digits), combine them to create the encryption key.


2. Second part is the encryption function itself since it uses the `3DES` algorithm method. The `data` object to be passed along with the key is the payment request data in String format. Below is a code sample how you can encrypt your payment data using different languages:


```

///  JavaScript



// This is the getKey function that generates an encryption Key for you by passing your Secret Key as a parameter.


function getKey(seckey){
    var md5 = require('md5');
    var keymd5 = md5(seckey);
    var keymd5last12 = keymd5.substr(-12);

    var seckeyadjusted = seckey.replace('FLWSECK-', '');
    var seckeyadjustedfirst12 = seckeyadjusted.substr(0, 12);

    return seckeyadjustedfirst12 + keymd5last12;
}
// This is the encryption function that encrypts your payload by passing the stringified format and your encryption Key.

function encrypt(key, text){
    var CryptoJS = require('crypto-js');
    var forge    = require('node-forge');
    var utf8     = require('utf8');
    var cipher   = forge.cipher.createCipher('3DES-ECB', forge.util.createBuffer(key));
    
    cipher.start({iv:''});
    cipher.update(forge.util.createBuffer(text, 'utf-8'));
    cipher.finish();
    var encrypted = cipher.output;
    return ( forge.util.encode64(encrypted.getBytes()) );
}
/**** THIS ENCRYPTION SECTION IS FOR FRONT END ENCRYPTION***/
// Encryption can also be done at the front end using `RSA Encryption`:

function getPublicKey(){
  // write function to generate Public Key here using RSA Encryption
  // see cryptico docs on how to do that
}
chargeDataGlobal = { "// Enter your payload here" };
var newdata = {PBFPubKey:chargeDataGlobal.PBFPubKey, client:cryptico.encrypt(JSON.stringify(chargeDataGlobal),getPublicKey()).cipher};





///   PHP




<?php

// this is the getKey function that generates an encryption Key for you by passing your Secret Key as a parameter.
function getKey($seckey)
 {
  $hashedkey       = md5($seckey);
  $hashedkeylast12 = substr($hashedkey, -12);
  $seckeyadjusted        = str_replace("FLWSECK-", "", $seckey);
  $seckeyadjustedfirst12 = substr($seckeyadjusted, 0, 12); 
  $encryptionkey = $seckeyadjustedfirst12 . $hashedkeylast12;
  return $encryptionkey;
 }
// This is the encryption function that encrypts your payload by passing the stringified format and your encryption Key.
function encrypt3Des($data, $key)
 {
  $encData = openssl_encrypt($data, 'DES-EDE3', $key, OPENSSL_RAW_DATA);
        return base64_encode($encData);
 }
 
 
 
 
 ///   Python
 
 
 
import base64
from Crypto.Cipher import DES3
import hashlib

"""this is the getKey function that generates an encryption Key for you by passing your Secret Key as a parameter."""

def getKey():
  seckey = "FLWSECK-6b32914d4d60c10d0ef72bdad734134a-X"
  hashedseckey = hashlib.md5(seckey.encode("utf-8")).hexdigest()
  hashedseckeylast12 = hashedseckey[-12:]
  seckeyadjusted = seckey.replace('FLWSECK-', '')
  seckeyadjustedfirst12 = seckeyadjusted[:12]
  return seckeyadjustedfirst12 + hashedseckeylast12

 """This is the encryption function that encrypts your payload by passing the text and your encryption Key."""
 
def encryptData(key, plainText):
  blockSize = 8
  padDiff = blockSize - (len(plainText) % blockSize)
  cipher = DES3.new(key, DES3.MODE_ECB)
  plainText = "{}{}".format(plainText, "".join(chr(padDiff) * padDiff))
  encrypted = base64.b64encode(cipher.encrypt(plainText))
  return encrypted
  
  
  
  
  
///   Java



public class TripleDES{
  private String key;
// Method to turn bytes in hex
  public static String toHexStr(byte[] bytes){
       StringBuilder builder = new StringBuilder();
       for(int i = 0; i < bytes.length; i++ ){
           builder.append(String.format("%02x", bytes[i]));
       }
       return builder.toString();
   }
   // this is the getKey function that generates an encryption Key for you by passing your Secret Key as a parameter.
   
   public static String getKey(String seedKey) {
        try {
            MessageDigest md = MessageDigest.getInstance("md5");
            byte[] hashedString = md.digest(seedKey.getBytes("utf-8"));
            byte[] subHashString = toHexStr(Arrays.copyOfRange(hashedString, hashedString.length - 12, hashedString.length)).getBytes("utf-8");
            String subSeedKey = seedKey.replace("FLWSECK-", "");
            subSeedKey = subSeedKey.substring(0, 12);
            byte[] combineArray = new byte[24];
            System.arraycopy(subSeedKey.getBytes(), 0, combineArray, 0, 12);
            System.arraycopy(subHashString, subHashString.length - 12, combineArray, 12, 12);
            return new String(combineArray);
        } catch (NoSuchAlgorithmException ex) {
            Logger.getGlobal().log(Level.SEVERE, null, ex);
        } catch (UnsupportedEncodingException ex) {
            Logger.getGlobal().log(Level.SEVERE, null, ex);
        }
        return null;
    }
    // This is the encryption function that encrypts your payload by passing the stringified format and your encryption Key.

public static String encryptData(String message, String _encryptionKey)  {
        try {
            final byte[] digestOfPassword = _encryptionKey.getBytes("utf-8");
            final byte[] keyBytes = Arrays.copyOf(digestOfPassword, 24);
            final SecretKey key = new SecretKeySpec( keyBytes , "DESede");
            final Cipher cipher = Cipher.getInstance("DESede/ECB/PKCS5Padding");
            cipher.init(Cipher.ENCRYPT_MODE, key);
            final byte[] plainTextBytes = message.getBytes("utf-8");
            final byte[] cipherText = cipher.doFinal(plainTextBytes);
            return Base64.getEncoder().encodeToString(cipherText);
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
}



///   C#




// Authored by Tade samson find link to github here: https://github.com/TadeSamson/RavePaymentDataEncryption

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security.Cryptography;
namespace EncryptionService
{
    public class RavePaymentDataEncryption: IPaymentDataEncryption
    {
        /// <summary>
        /// Gets an encryption key from rave secret key.
        /// </summary>
        /// <param name="secretKey">The secret key generated from your rave dashboard</param>
        /// <returns>a string value encrypted</returns>
        public string GetEncryptionKey(string secretKey)
        {
            //MD5 is the hash algorithm expected by rave to generate encryption key
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            //MD5CryptoServiceProvider works with bytes so a conversion of plain secretKey to it bytes equivalent is required.
            //UTF8Encoding.UTF8.GetBytes(secretKey) can also be used.
            byte[] secretKeyBytes = ASCIIEncoding.UTF8.GetBytes(secretKey);            
            byte[] hashedSecret = md5.ComputeHash(secretKeyBytes,0,secretKeyBytes.Length);
            byte[] hashedSecretLast12Bytes=new byte[12];
            Array.Copy(hashedSecret, hashedSecret.Length - 12, hashedSecretLast12Bytes, 0, 12);
            String hashedSecretLast12HexString = BitConverter.ToString(hashedSecretLast12Bytes);
            hashedSecretLast12HexString = hashedSecretLast12HexString.ToLower().Replace("-", "");
            String secretKeyFirst12 = secretKey.Replace("FLWSECK-", "").Substring(0,12);
            byte[] hashedSecretLast12HexBytes = ASCIIEncoding.UTF8.GetBytes(hashedSecretLast12HexString);
            byte[] secretFirst12Bytes = ASCIIEncoding.UTF8.GetBytes(secretKeyFirst12);
            byte[] combineKey = new byte[24];
            Array.Copy(secretFirst12Bytes, 0, combineKey, 0, secretFirst12Bytes.Length);
            Array.Copy(hashedSecretLast12HexBytes, hashedSecretLast12HexBytes.Length-12, combineKey, 12, 12);
            return  ASCIIEncoding.UTF8.GetString(combineKey);
        }
      // This is the encryption function that encrypts your payload by passing the stringified format and your encryption Key.
        public string EncryptData(string encryptionKey, string data)
        {
            TripleDES des = new TripleDESCryptoServiceProvider();
            des.Mode = CipherMode.ECB;
            des.Padding = PaddingMode.PKCS7;
            des.Key = ASCIIEncoding.UTF8.GetBytes(encryptionKey);
            ICryptoTransform cryptoTransform = des.CreateEncryptor();
            byte[] dataBytes=ASCIIEncoding.UTF8.GetBytes(data);
            byte[] encryptedDataBytes= cryptoTransform.TransformFinalBlock(dataBytes, 0, dataBytes.Length);
            des.Clear();
            return Convert.ToBase64String(encryptedDataBytes);
        }
        public string DecryptData(string encryptedData,string encryptionKey)
        {
            TripleDESCryptoServiceProvider des = new TripleDESCryptoServiceProvider();
            des.Key = ASCIIEncoding.UTF8.GetBytes(encryptionKey);
            des.Mode = CipherMode.ECB;
            des.Padding = PaddingMode.PKCS7;
            ICryptoTransform cryptoTransform = des.CreateDecryptor();
            byte[] EncryptDataBytes=Convert.FromBase64String(encryptedData);
            byte[] plainDataBytes= cryptoTransform.TransformFinalBlock(EncryptDataBytes, 0, EncryptDataBytes.Length);
            des.Clear();
            return ASCIIEncoding.UTF8.GetString(plainDataBytes);
        }
    }
}
```

> Wiew on [GitHub](https://gist.github.com/fullstackmafia/dc47fefffa9877a92de543f5ed969a6a)


Should you also need to carry out encryption on your mobile interface, we’ve got encryption models on our Android and iOS platforms to the rescue.

Rave Encryption with Android:


```


The `getEncryptedData` method needs to be called first to clean the secret key, all other methods are used inside it.

private static String encrypt(String data, String key) throws Exception {
        byte[] keyBytes = key.getBytes(UTF_8);
        SecretKeySpec skey = new SecretKeySpec(keyBytes, ALGORITHM);
        Cipher cipher = Cipher.getInstance(TRANSFORMATION);

        cipher.init(Cipher.ENCRYPT_MODE, skey);
        byte[] plainTextBytes = data.getBytes(UTF_8);
        byte[] buf = cipher.doFinal(plainTextBytes);
        return Base64.encodeToString(buf, Base64.DEFAULT);
    }
    private static String getMd5(String md5) throws Exception {
        MessageDigest md = MessageDigest.getInstance(MD5);
        byte[] array = md.digest(md5.getBytes(CHARSET_NAME));
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < array.length; ++i) {
            sb.append(Integer.toHexString((array[i] & 0xFF) | 0x100).substring(1, 3));
        }
        return sb.toString();
    }
    
    public static String getEncryptedData(String unEncryptedString, String secret) {
        try {
            // hash the secret
            String md5Hash = getMd5(secret);
            String cleanSecret = secret.replace(TARGET, "");
            int hashLength = md5Hash.length();
            String encryptionKey = cleanSecret.substring(0, 12).concat(md5Hash.substring(hashLength - 12, hashLength));


            return encrypt(unEncryptedString, encryptionKey);
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
```

View on [GitHub](https://gist.github.com/fullstackmafia/0daf8511edbf5e62263d143f775703b2)

Rave Encryption with iOS:

```


// Encrypting the secret key

func MD5(string: String) -> Data? {
    guard let messageData = string.data(using:String.Encoding.utf8) else { return nil }
    var digestData = Data(count: Int(CC_MD5_DIGEST_LENGTH))
    
    _ = digestData.withUnsafeMutableBytes {digestBytes in
        messageData.withUnsafeBytes {messageBytes in
            CC_MD5(messageBytes, CC_LONG(messageData.count), digestBytes)
        }
    }    
    return digestData
}
func getEncryptionKey(_ secretKey:String)->String {
    let md5Data = MD5(string:secretKey)
    let md5Hex =  md5Data!.map { String(format: "%02hhx", $0) }.joined()
  
    var secretKeyHex = ""  
    if secretKey.contains("FLWSECK-") {
        secretKeyHex = secretKey.replacingOccurrences(of: "FLWSECK-", with: "")
    }
    if secretKey.contains("-X") {
        secretKeyHex = secretKeyHex.replacingOccurrences(of: "-X", with: "")
    }
    let index = secretKeyHex.index(secretKeyHex.startIndex, offsetBy: 12)
    let first12 = secretKeyHex.substring(to: index)
    let last12 = md5Hex.substring(from:md5Hex.index(md5Hex.endIndex, offsetBy: -12))
    return first12 + last12
}

// Encrypting the payload

static func encrypt(string:String, key:String) -> NSData? {        
        let keyData: NSData! = (key as NSString).data(using: String.Encoding.utf8.rawValue) as NSData!
        let keyBytes         = keyData.bytes
        
        let data: NSData! = (string as NSString).data(using: String.Encoding.utf8.rawValue) as NSData!
        let dataLength    = UInt(data.length)
        let dataBytes     = data.bytes
        let cryptData    = NSMutableData(length: Int(dataLength) + kCCBlockSize3DES)!
        let cryptPointer = cryptData.mutableBytes
        let cryptLength  = size_t(cryptData.length)
        let keyLength              = size_t(kCCKeySize3DES)
        let operation: CCOperation = UInt32(kCCEncrypt)
        let algoritm:  CCAlgorithm = UInt32(kCCAlgorithm3DES)
        let options:   CCOptions   = UInt32(kCCOptionPKCS7Padding+kCCOptionECBMode)
        
        var numBytesEncrypted :Int = 0
        let cryptStatus = CCCrypt(operation,
                                  algoritm,
                                  options,
                                  keyBytes, keyLength,
                                  nil,
                                  dataBytes, Int(dataLength),
                                  cryptPointer, cryptLength,
                                  &numBytesEncrypted)
        if UInt32(cryptStatus) == UInt32(kCCSuccess) {
            let _: Int = numBytesEncrypted
            cryptData.length = Int(numBytesEncrypted)
            return cryptData
        } else {
            print("Error: \(cryptStatus)")
        }
        return nil
    }

// USAGE
let secret = getEncryptionKey("FLWSECK-045c2e4312c965eefc9c7c62f0a4762c-X")
            let data =  encrypt(string: payloadJson, key:secret)
```

View on [GitHub](https://gist.github.com/fullstackmafia/c2e1da828685a17236ca82d450e757a1)


Below is a full example of implementing Rave’s encryption using PHP:

```


<?php
function getKey($seckey){
  $hashedkey = md5($seckey);
  $hashedkeylast12 = substr($hashedkey, -12);
  $seckeyadjusted = str_replace("FLWSECK-", "", $seckey);
  $seckeyadjustedfirst12 = substr($seckeyadjusted, 0, 12);
  $encryptionkey = $seckeyadjustedfirst12.$hashedkeylast12;
  return $encryptionkey;
}
function encrypt3Des($data, $key){ 
    //Pad for PKCS7
    $blockSize = mcrypt_get_block_size('tripledes', 'ecb');
    $len = strlen($data);
    $pad = $blockSize - ($len % $blockSize);
    $data = $data.str_repeat(chr($pad), $pad);
    //Encrypt data
    $encData = mcrypt_encrypt('tripledes', $key, $data, 'ecb');
    return base64_encode($encData);
}
function payviacard(){ // set up a function to test card payment.   
    error_reporting(E_ALL);
    ini_set('display_errors',1);
    $data = array('PBFPubKey' => 'FLWPUBK-e634d14d9ded04eaf05d5b63a0a06d2f-X',
    'cardno' => '5438898014560229',
    'currency' => 'NGN',
    'country' => 'NG',
    'cvv' => '789',
    'amount' => '300',
    'expiryyear' => '19',
    'expirymonth' => '09',
    'suggested_auth' => 'pin',
    'pin' => '3310',
    'email' => 'tester@flutter.co',
    'IP' => '103.238.105.185',
    'txRef' => 'MXX-ASC-4578',
    'device_fingerprint' => '69e6b7f0sb72037aa8428b70fbe03986c');
    $SecKey = 'FLWSECK-bb971402072265fb156e90a3578fe5e6-X';
    $key = getKey($SecKey); 
    $dataReq = json_encode($data);
    $post_enc = encrypt3Des( $dataReq, $key )
    var_dump($dataReq);
    $postdata = array(
     'PBFPubKey' => 'FLWPUBK-e634d14d9ded04eaf05d5b63a0a06d2f-X',
     'client' => $post_enc,
     'alg' => '3DES-24');
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/charge");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postdata)); //Post Fields
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 200);
    curl_setopt($ch, CURLOPT_TIMEOUT, 200);
    
    $headers = array('Content-Type: application/json');
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    $request = curl_exec($ch);
    if ($request) {
        $result = json_decode($request, true);
        echo "<pre>";
        print_r($result);
    }else{
        if(curl_error($ch))
        {
            echo 'error:' . curl_error($ch);
        }
    }
    
    curl_close($ch);
}
payviacard();
```

View on [GitHub](https://gist.github.com/fullstackmafia/36c52587edf1afb2037e1d32fcf9e76b)

