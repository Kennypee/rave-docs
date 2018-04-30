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
