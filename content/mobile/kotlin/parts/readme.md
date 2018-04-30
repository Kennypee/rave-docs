# Rave + Android Integration with Kotlin
Rave's Android Drop-In is a ready made customize-able UI that allows you to accept card and bank payments in your Android app. Rave supports transactions on all card types and it’s very easy to integrate.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_8FC0C205C6C6D156B3F75DD902F33C280A5115B9ABB240370D5D15C9E24E62A8_1521033427458_raveimage.png)


This section will walk you through the steps you can take to integrate Rave with your Android project with Kotlin. ***Kotlin*** is a statically typed programming language that runs on the Java virtual machine. Google has announced it as one of the official languages for Android Development and we’ll use it to quickly get you started. When you are through with this integration, you should be able to do the following:


1. Setup a test(sandbox) and live account on Rave.
2. Retrieve your public and secret key.
3. Successfully integrate Rave on any Kotlin project or application.
4. Successfully accept payments from your customers using Rave.
# **Requirements**

Before we proceed to integrate Rave, there are a few requirements and settings you should observe:

## The minimum supported SDK version is 15

When setting up your Android project, you should select and SDK version 15 and above otherwise you won’t be able to install the rave Android SDK. 


![](https://d2mxuefqeaa7sj.cloudfront.net/s_8FC0C205C6C6D156B3F75DD902F33C280A5115B9ABB240370D5D15C9E24E62A8_1521035695845_sdk15.jpg)


If you are adding Rave to an existing project, verify your minimum SDK version by opening your application `build.gradle` file and confirm the value of the `minSdkVersion`  inside the Android block:


    android {
        compileSdkVersion 26
        defaultConfig {
            applicationId "com.example.ekene.rave_android_demo"
            minSdkVersion 21
            targetSdkVersion 26
            versionCode 1
            versionName "1.0"
            testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
        }


## Create a Rave Account

The first step is to sign up with Flutterwave for a Rave account. Below are the two types of accounts on the Rave platform and their descriptions.

| RAVE ACCOUNT TYPE | LINK                                                         | DESCRIPTION                                                                                                                                                                                  | LINK                                                             |
| ----------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Sandbox Account   | https://ravesandbox.flutterwave.com/                         | Choose this account if you’re a developer and you need a testing environment that isolates untested code changes and outright experimentation from the production environment or repository. | [**http://rave.frontendpwc.com**](http://rave.frontendpwc.com)   |
| Live Account      | [https://rave.flutterwave.com](https://rave.flutterwave.com) | Choose this account if you’re a merchant and you want to accept payments directly to your bank account.                                                                                      | [**https://rave.flutterwave.com**](https://rave.flutterwave.com) |



# **Create Android Project**
## Android Studio

To add Rave to your project is seamless and very simple, takes less than 5 minutes on the average. You don’t have to clone any repo or install any external files, simply open Android Studio and create your project. Add this maven repository to your project level build.gradle file (Project Module):


    allprojects {
        repositories {
           .....
            maven { url 'https://jitpack.io' }
        }
    }

Then click sync. Next add this dependency to your app level build.gradle file (Application Module):


    
    compile 'com.github.Flutterwave:rave-android:1.0.16'
    

Again click the visible sync button and BOOOOM!!! you have Rave installed. 

## Permissions

Now that you have installed Rave, lets add its required permissions. This library requires the `READ_PHONE_STATE` to get the build number for fraud detection and flagging as recommended [here](https://developer.android.com/training/articles/user-data-ids.html#i_abuse_detection_detecting_high_value_stolen_credentials).
So open your `AndroidManifest.xml` file and add these permissions:


     
     <uses-permission android:name="android.permission.READ_PHONE_STATE" />
     
     <uses-permission android:name="android.Manifest.permission.READ_PHONE_STATE" />
     


## Setup Rave

Assuming you’ve signed up using a sandbox account, login to your **Ravepay** Dashboard and at the sidebar, click on **Setup Rave**.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1522280153710_Screenshot+from+2018-03-29+00-28-11.png)


When you click on **Setup Rave**,  you will be shown a options through which you can start collecting payments:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1522281473908_Screenshot+from+2018-03-29+00-57-40.png)



Since we are Integrating Rave with Kotlin, how to accept payments with Rave in our custom applications should be our concern here so select the Custom App and continue. 

## Use Case

Let’s get started by setting up a pay button on the Android project. The ideal scenario here is that you have a button in your project where you want users to click and make payments. So we’ll set an `onClickListener` on the button and pass an instance of the `RavePayManager` class. The class takes in a mandatory instance of the calling activity and provides you all the methods you’ll need to successfully set up the Rave modal. You have access to this class once you have successfully installed Rave :


    pay_button.setOnClickListener(View.OnClickListener {
    
    RavePayManager(this@MainActivity).setAmount(100)
                .setCountry("NG")
                .setCurrency("NGN")
                .setEmail("your_registered_email")
                .setfName("your_registered_fisrtName")
                .setlName("your_registered_lastName")
                .setNarration("narration_here")
                .setPublicKey("your_rave_publicKey")
                .setSecretKey("your_rave_secretKey")
                .setTxRef(Calendar.getInstance().timeInMillis.toString() + "")
                .acceptAccountPayments(true)
                .acceptCardPayments(true) 
                .onStagingEnv(true) 
                .allowSaveCardFeature(true)
                .withTheme(R.style.DefaultTheme)
                .initialize()
    
    })


## Rave Pay Manager Methods


- `setAmount()` - This is the amount to be charged from card/account. The data type is double - [Required]. If amount is not specified, the user is presented with a field in the UI to enter the amount. However if specified, the amount field is hidden
- `setCountry()` -This is the route country for the transaction with respect to the currency. The data type is String - [Required]
- `setCurrency()` -This is the specified currency to charge the card in. String - [Required]
- `setEmail()` - This is the email address of the customer. String - [Required]
- `setfName()` - This is the first name of the card holder or the customer. String - [Required]
- `setlName()` - This is the last name of the card holder or the customer. String - [Required]
- `setNarration()` - This is a custom description added by the merchant. String
- `setPublicKey()` - Merchant's public key String - [Required]
- `setSecretKey()` - Merchant's secret key String - [Required]
- `setTxRef()` - This is the unique reference, unique to the particular transaction being carried out. It is generated by the merchant for every transaction String - [Required]
- `acceptAccountPayments()` - Set to `true` if you want to accept payments via bank accounts, else set to false. boolean. Defaults to `true`
- `acceptCardPayments()` - Set to `true` if you want to accept payments via cards, else set to `false`. boolean. Defaults to `true`
- `onStagingEnv()` - Set to `true` if you want your transactions to run in the staging environment otherwise set to false. Defaults to `false`
- `allowSaveCardFeature()` - Set to `true` if you want your users to be able to save their cards for later reuse otherwise set to `false`. - [Required]
- `setMeta()` - Pass in any other custom data you wish to pass. It takes in a List of Metaobjects
- `withTheme()` - Sets the theme of the UI. int
- `initialize()` - Launch the Rave Payment UI

The `RavePayManager` class needs requires your public key and secret key. To view your public as well as secret key, on your Rave dashboard navigate to **Settings** >> **API** 



![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1524003443152_Screenshot+from+2018-04-17+23-16-54.png)

  > **CAUTION**: The **public key** is used when embedding the pay button, it can be used on the **client page**. The **secret key** is very sensitive to your Rave account and should not be exposed to your **client page**. Do not commit your **secret key** to GitHub or any other versioning system and ensure you only use your **secret key** on the **server side**. Kindly re-read this paragraph. 


# Payment Response

To handle the payment response, we simply override the `onActivityResult()` method in the calling activity and set it up like this:


    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == RaveConstants.RAVE_REQUEST_CODE && data != null) {
            val message = data.getStringExtra("response")
            if (resultCode == RavePayActivity.RESULT_SUCCESS) {
                Toast.makeText(this, "SUCCESS " + message, Toast.LENGTH_SHORT).show()
            } else if (resultCode == RavePayActivity.RESULT_ERROR) {
                Toast.makeText(this, "ERROR " + message, Toast.LENGTH_SHORT).show()
            } else if (resultCode == RavePayActivity.RESULT_CANCELLED) {
                Toast.makeText(this, "CANCELLED " + message, Toast.LENGTH_SHORT).show()
            }
        } else {
            super.onActivityResult(requestCode, resultCode, data)
        }
    }

The intent's `message` object contains the raw JSON response from the Rave API. This can be parsed to retrieve any additional payment information needed.

## Customize the UI

We understand the need for brand consistency so we are providing the  `xml`  style files for you to customize to match your brand or suit your taste:


    <style name="DefaultTheme" parent="AppTheme.NoActionBar">
        <item name="colorPrimary">@color/colorPrimary</item>
        <item name="colorPrimaryDark">@color/colorPrimaryDark</item>
        <item name="colorAccent">@color/colorAccent</item>
        <item name="OTPButtonStyle">@style/otpBtnStyle</item>
        <item name="PayButtonStyle">@style/payBtnStyle</item>
        <item name="PinButtonStyle">@style/pinButtonStyle</item>
        <item name="OTPHeaderStyle">@style/otpHeaderStyle</item>
        <item name="TabLayoutStyle">@style/tabLayoutStyle</item>
        <item name="PinHeaderStyle">@style/pinHeaderStyle</item>
        <item name="SavedCardButtonStyle">@style/svdCardsBtnStyle</item>
    </style>

If however you’d like to use our style, in the `withTheme()` method of the `RavePayManager` class, set it to default: `.withTheme(R.style.``*DefaultTheme*``)`


## Get Paid (Same Page Modal)

Now that the project is set up, you can start receiving payments from your customers. Once the pay button is clicked, it launches our Rave modal where your customers can input their card details or account details to make payments and you’ll receive their payments instantly:

![card payment modal](https://d2mxuefqeaa7sj.cloudfront.net/s_9D0026E694B60C6DF96437635F37B9AD6E81A69AC49840A6FA476A3E0D3ACAD4_1521455669419_rave+card.png)
![account payment modal](https://d2mxuefqeaa7sj.cloudfront.net/s_9D0026E694B60C6DF96437635F37B9AD6E81A69AC49840A6FA476A3E0D3ACAD4_1521455669470_rave+account.png)

# Testing

Testing is a crucial part of setting up integrations. You’ll want to be certain that you don’t misguide your customers or have them make payments to the wrong account. Most importantly, testing helps you verify that our modal supports all the cards your users could be paying with. 

To this effect, we have set up [test cards](https://flutterwavedevelopers.readme.io/docs/test-cards) that’ll help you try out varying card types on your modal and confirm payments before deployment of your app. To test these cards on the project we’ve set up above, you’ll need to do a few things:



First sign up on the rave sandbox environment here to get your test keys (public and secret). Next, update the Rave Pay Manager `.setSecretKey()` and `.setPublicKey()` methods with the new test keys. Finally upadate the  `onStagingEnv()` method and set it to true:


    
    .setPublicKey("your_publicKey -from_sandbox")
    .setSecretKey("your_secretKey -from_sandbox")
    .onStagingEnv(true)
    

Now to test it out, visit our [Test Card](https://flutterwavedevelopers.readme.io/docs/test-cards) section and input the provided card details when you run your app


# You’ve gotten paid, now what?

Yaay!  You just completed integration. Complete some test transactions too and guess what, on Rave you are live when you sign up, the only steps we need you to complete are these:
Back on your Rave Dashboard,


  1. Click on the `Add account` notification to add a bank account we can settle your funds into, along with a few other details that are required.
  2. Once you complete this, you would see Live badge on your dashboard, hover over it, to see the limits set on your account.
  
# What’s next ?

There are two (2) states your account is in:

  
1. **Pending**:  During this period you are allowed to start transacting with the limits given below. Your account is not ready to receive payments till you fill/add a bank account and the details submitted are reviewed and approved.
| INDIVIDUALS                                                                                                                  | BUSINESS (SOLE PROPRIETOR AND CORPORATE)                                                                                         | NGOs                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| - 50k per transactions and 200k daily cumulative upon go-live
- 500k per transaction and 500k daily cumulative upon approval | - 200k per transaction and 1mm daily cumulative upon go-live
- 500k per transaction and unlimited daily cumulative upon approval | - 50k per transactions and 200k daily cumulative upon go-live
- 500k per transaction and 500k daily cumulative upon approval |

  
2.  **Approved** :  Great your documents were approved. Your limits would be raised too, now it is time to start making the money. You can always email  `hi@flutterwavego.com`  requesting that your limit be raised if your business use case absolutely requires it. When sending an email be sure to include your account name on Rave and use case for raising limits. Thanks!

Now that you are done integrating, to finesse that Integration and show your user's they can now pay with whatever they have literally `(card, account, USSD)`. You can add Rave’s image to your page as a branding asset to your payment options section.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1522338738016_8948ce7-Badge_1.png)

# Help
- Have issues integrating? Join our [Slack community](https://join.slack.com/t/flutterwavedevelopers/shared_invite/enQtMjU2MjkyNDM5MTcxLWFlOWNlYmE5MTIxNjAwYzc5MDVjZjNhYTJjNTA0ZTQyNDJlMDhhZjJkN2QwZGJmNWMyODhlYjMwNGUyZDQxNTE) for support
- Find a bug? [Open an issue](https://github.com/Flutterwave/rave-android/issues)
- Want to contribute? [Check out contributing guidelines](https://github.com/Flutterwave/rave-android/blob/master) and [submit a pull request](https://help.github.com/articles/creating-a-pull-request).
