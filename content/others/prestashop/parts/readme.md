# Integrating Rave With PrestaShop
[***PrestaShop***](https://www.prestashop.com/en) [](https://www.prestashop.com/en)is a premium, open source e-commerce solution where merchants create online stores with free shopping cart software
Rave provides a payment gateway for PrestaShop that can be seamlessly integrated into the store to process payments. You can accept credit card, debit card and bank account payments directly on your PrestaShop store with the Rave payment gateway. In this section, we’ll walk you through the processes involved and the steps to completely integrate Rave into your PrestaShop store.

If you do not have a  Rave account yet, now would be a good time to Sign-up [here](https://flutterwave.com/)

Rave is available in:

- **Nigeria**
- **Ghana**
- **Kenya**


# Installation
## Step 1: Download the Prestashop .zip file

Navigate to our PrestaShop Rave Payment Module repository and download the zip file or simplify clone from the command line and extract on your local machine.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_7B4FADCEA7353EB0E8DF4811786FC656188EB519B2F6ED6E39E747859748C72E_1522836140098_prestashop.jpg)


When you are done downloading, extract the content of the zip file.


## Step 2: Add  `**ravepaymentgateway**` **** ****to PrestaShop modules


![Prestashop Dashboard](https://d2mxuefqeaa7sj.cloudfront.net/s_7B4FADCEA7353EB0E8DF4811786FC656188EB519B2F6ED6E39E747859748C72E_1522836278976_prestDashboard.PNG)


In the zip file you just downloaded and unzipped, open the document and copy the `**ravepaymentgateway**` **** ****folder. Afterwards, log in to your PrestaShop dashboard, navigate to  `**Presta**``**S**``**hop**` `>` `**modules**`  folder and paste the  `**ravepaymentgateway**` **** ****folder.


## **Step3: Install Rave Payment Gateway**

First log in to your PrestaShop Back Office, In your Back Office, navigate to  `**Modules and Services**`  in the menu and search for Rave Payment Gateway module.


![click install](https://d2mxuefqeaa7sj.cloudfront.net/s_7B4FADCEA7353EB0E8DF4811786FC656188EB519B2F6ED6E39E747859748C72E_1522836901840_prestaModules.png)


Finally click the install button on the right to complete installation. You may get a warning prompt to confirm installation.



![proceed with installation](https://d2mxuefqeaa7sj.cloudfront.net/s_7B4FADCEA7353EB0E8DF4811786FC656188EB519B2F6ED6E39E747859748C72E_1522837109960_prestaInstall2.png)


**Click proceed with installation to complete the process.**


# Module Configuration

Now that the Rave payment gateway is successfully installed, click the Configure button next to the **Rave Payment Gateway** module to configure the module and fill the settings form appropriately.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_7B4FADCEA7353EB0E8DF4811786FC656188EB519B2F6ED6E39E747859748C72E_1522837384235_prestaConfigModule.png)


**Configuration Parameters :**

- **Pay Button Public Key** - (**Required**) Enter your public key which can be retrieved from "Pay Buttons" page on your Rave account dashboard.
- **Pay Button Secret Key** - (**Required**) Enter your secret key which can be retrieved from "Pay Buttons" page on your Rave account dashboard.
- **Go live** - Switch to live account (Must be set for production).
- **Modal Title** - (**Optional**) customize the title of the Pay Modal. Default is FLW PAY.
- **Modal Description** - (**Optional**) customize the description on the Pay Modal. Default is FLW PAY MODAL.
- **Modal Logo** - (**Optional**) customize the logo on the Pay Modal. Enter a full url (with 'http'). Default is Rave logo.
- **Pay Button Text** - (**Optional**) The text to display on the button. Default: "PAY NOW".
- Click **Save** to save the settings.


# Usage

After installation and configuration, the module should appear under the list of payment options the customer can choose to pay with.

![Rave Payment Gateway](https://cloud.githubusercontent.com/assets/8383666/21759955/b040c326-d648-11e6-99d5-47800e5a55df.png)

![Rave Payment Modal](https://cloud.githubusercontent.com/assets/8383666/21759970/ca35882a-d648-11e6-9a5a-333be0760a60.png)



# Suggestions/Contributions

For issues, suggestions and contributions you could check out the GitHub repository for this integration [here](https://github.com/bosunolanrewaju/prestashop-rave-payment-module/issues). 

