# Integrating Rave with WooCommerce
[](https://flutterwavedevelopers.readme.io/v2.0/docs/woocommerce)

[WooCommerce](https://woocommerce.com/) is a customizable open source e-commerce plugin for WordPress.  In this section you will be guided on how to receive payments using Rave on the WooCommerce platform. 

## Integration 

To integrate Rave on your WooCommerce  platform, kindly follow these steps:

1.  Download Rave’s WooCommerce plugin from [Flutterwave’s Github repository](https://github.com/Flutterwave/WooCommerce-Rave-Payment-Gateway)


![](https://files.readme.io/4f74e57-sc_1.png)



2.  On your dashboard, navigate to the sidebar and click on  `Plugins` ,  click on  `Add New`  and then click on `Upload Plugin`.


![](https://files.readme.io/7d306ba-sc_3.png)



3. After clicking the `Upload` option, then click `Choose File` to select the  `zip`  file you downloaded. Proceed to install it by clicking `OK` and `Install Now`  


4. Activate the plugin.


5. Navigate to  `WooCommerce > Settings`   from the left menu and click the  `Checkout`  tab.


6. Click on the Rave link from the available Checkout Options.


7. Configure your Rave Payment Gateway settings accordingly.


# Configuring Your Plugin

To configure your plugin, navigate to  `WooCommerce > Settings` from the sidebar, click the `Checkout`  tab then click on Rave. Below are a few configuration options you can choose from:


| CONFIGURATION OPTION      | DESCRIPTION                                                                                              | IMPORTANCE |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ---------- |
| **Enable/Disable**        | Check the box to enable Rave Payment Gateway.                                                            | REQUIRED   |
| **Pay Button Public Key** | Enter your public key which can be retrieved from the `Pay Buttons` page on your Rave account dashboard. | REQUIRED   |
| **Modal Title**           | Customize the title of the Pay Modal. Default is `FLW PAY`.                                              | OPTIONAL   |
| **Modal Description**     | Customize the description on the Pay Modal. Default is `FLW PAY MODAL`.                                  | OPTIONAL   |



When you are done, click on  `Save Changes`  to save your changes.

And that's it.

