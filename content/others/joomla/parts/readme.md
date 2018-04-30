# Integrating Rave With Joomla

[](https://flutterwavedevelopers.readme.io/docs/joomla)

[***Joomla***](https://www.joomla.org/) [](https://www.joomla.org/)is a free and open-source content management system (CMS) for publishing web content. It is the mobile-ready and user-friendly way to build your website. Rave provides a plugin for Joomla that can be integrated into your application to process payments. You can accept credit card, debit card and bank account payments directly on your Joomla site with the Rave payment gateway. You can also take donations and payments easily and directly on your site. In this section, we’ll walk you through the processes involved and the steps to completely integrate Rave into your Joomla site.


# Installation
## **Step** ******1: Download the** **P****lugin** **Z****ip** **F****ile**

Navigate to our [Joomla Rave Payment Forms](https://github.com/flutterwave/joomla-rave-payment-forms) repository and download the Rave zip file or simplify clone from the command line and extract on your local machine.


![Rave Joomla Payment Forms extension to take payments online through Rave Checkout](https://d2mxuefqeaa7sj.cloudfront.net/s_11DE8B6F02BB3D1FB024563129333DEA7763837783A0A381D64EEE161310A105_1522768281837_raveJoomla.jpg)



## **Step** ******2: Login to your Joomla** **A****dmin** **P****age and** **c****lick on** **P****lugins**

Log in to your administrator page on Joomla and click on plugins, follow the arrow on the image below if for site navigation directions.


![Joomla admin page](https://files.readme.io/9c90dc1-sc_2.png)



## **Step** ******3: Click on** **I****nstall** **E****xtensions**

Once you’ve clicked on Plugins, Navigate to `Extensions` therein, you’ll find an option to install extensions, click it as in the image below.


![Install extensions on Joomla](https://files.readme.io/218d41e-sc_10.2.png)



## **Step** ******4: Scroll** **D****own to the** **D****rag and** **D****rop** **W****indow then** **C****lick on** **B****rowse for file**

Upon clicking the install extensions button, scroll all the way down to the drag and drop window, click on browse for file to launch your file explorer

![](https://files.readme.io/bac5aaa-sc_4.png)



## **Step** ******5: Upload the .zip** **f****ile you** **d****ownloaded** **e****arlier for the** **J****oomla** **E****xten****s****ion**

The step above will launch the file explorer, navigate to the directory where you saved the zip file you downloaded (usually the download folder), select the file and double click to upload it to Joomla.


> 
> Note: The zip file installs automatically once successfully uploaded. Hence after uploading, it’ll be readily available in your extensions modules
> 


This installs a *Rave Payments Forms* ********Component** and a *Rave Payments Forms* **Module** to your Joomla website. The **Component** lets you set global configuration and provides a page that lists all transactions made through Rave Checkout. The Module lets you create payment forms.

Next we configure the Rave *Payments Forms* ******Component and then go ahead to create a payment form with the Module


## **Step** ******6: Components Configuration**

Click on **Components** and select **Rave Payments Forms** from the top menu. Then select the **Options** button at the top right side of the page.



![Configuration button](https://cloud.githubusercontent.com/assets/8383666/22316729/6bf3dbfc-e36f-11e6-9b65-eb590894231d.png)


This will open the Rave Payments Configuration Page where you then set the global configurations for your payment forms:

![Configuration page](https://cloud.githubusercontent.com/assets/8383666/22316744/87e788b8-e36f-11e6-998a-62f819728faf.png)


Here’s how you set up the configurations with the **Required** and **Optional** parameters:


- **Public Key** - (**Required**) Your Rave Checkout public key which can be retrieved from "Rave Checkout" page on your Rave account dashboard.
- **Secret Key** - (**Required**) Your Rave Checkout secret key which can be retrieved from "Rave Checkout" page on your Rave account dashboard.
- **Secret Key** - (**Optional**) Choose to use the live account when you are ready to go live (Must be set to Yes for Production). Default: NO.
- **Modal Title** - (**Optional**) Customize the title of the Pay Modal. Default is RAVE CHECKOUT.
- **Modal Description** - (**Optional**) Customize the description on the Pay Modal. Default is RAVE. 


**CHECKOUT MODAL**

****

- **Modal Logo** - (**Optional**) Customize the logo on the Pay Modal. Upload logo to media and select. Default is Rave logo.
- **Success Redirect URL** - (**Optional**) The URL the user should be redirected to after a successful payment. Enter a full url (with 'http'). Default: "".
- **Failed Redirect URL** - (**Optional**) The URL the user should be redirected to after a failed payment. Enter a full url (with 'http'). Default: "".
- **Charge Currency** - (**Optional**) The currency the user is charged. Default: "NGN".
- **Charge Country** - (**Optional**) The country the merchant is serving. Default: "NG: Nigeria".
- **Disable module style** - (**Optional**) Disables styles from the module and uses template's style instead.
- Click **Save & Close** to save your settings.

**Styling**
You can enable activated template's style to override the form's default style from the **Component Configuration** page. Or you can override the *form* class `.flw-simple-pay-now-form` in your stylesheet.


## **Step** ******7: Module Configuration**

**Create a payment form**

Now that we have the global configurations for the payment forms set, lets go ahead and create a payment form with the Rave Payment Forms Module:

Click on **Extensions** and select **Modules** from the top menu. From the list of created module instances, an unpublished form was created from the installation. This can be used or you can create another form by clicking the green **New** button at the top left of the page and selecting **Rave Payment Forms** from the list of module types


![](https://files.readme.io/83e3902-sc_6.png)


Click on Rave payment Forms to open the form for set up

![Article page](https://cloud.githubusercontent.com/assets/8383666/22317281/e7fdea32-e372-11e6-917c-1a4017c65a04.png)


**Form parameters**


- **Title** - (**Required**) The title of the form you want to create. The title can be hidden from the view by clicking hide button on the "Show Title" option on the right of the page.
- **Module**: tab contains form specific configuration:
  - **Amount**: The amount to charge the customer (if left blank, customer will be asked to enter amount).
  - **Use logged in user email**: Uses logged-in user's email as customer email when set to ‘YES’ (If set to 'No', customer will be asked to enter email).
  - **Button Text** - (**Optional**) The text to display on the form button. Default: "PAY NOW".
  - Other options (on the right):
    - **Position**: Set the position (place) to display the form on your site. This is dependent on the current template position. But, the module provides an extra position named **Rave In-Article**: and can be selected from the list. This lets you display the form on an article page (more below). Also, you can set (enter) a custom position.
    - **Status**: The status of the form. Set to **Published** to have the form available for display.
- **Menu Assignment**: tab lets you select the page(s) that will have access to the form. "No pages" means the form won't be available. Recommended is "On all pages". You can use "Only on the pages selected" to restrict the form to certain pages (pages need to exist).
- Click **Save & Close** to create (or save) the form.


**Complete** **F****orm** **C****reation** 

After configuring the settings above, navigate to the upper left side of the page and click the “Save” button to complete the payment form creation.


![](https://files.readme.io/2416809-sc_8.png)


Now your form is available to receive payment “on all pages” or on “selected pages” depending on what you set on the Menu Assignment tab in the Module. Next lets define how your payment form is displayed.


## **Step** ******8: Display** **F****orm in** **A****rticle** **B****ody**

To display the form within the article body, make sure you set the position for the form to **Rave In-Article** when creating the form (Module settings). This is a position provided by default by the module to avoid conflicts with template's positions.

Click on **Content** > **Articles** > **Add New Article** and give it a title and load the provided **Rave In-Article** position by putting this in the Content Editor:



    {loadposition Rave In-Article}

This will output all the content set to display at this position (Rave In-Article) here. This comes handy if you want to have multiple forms on the same page.
To have different forms on different pages, you should set a custom position for each of the forms and load the positions in their respective articles (pages).



    {loadposition name_of_custom_postion}

Note:    Replace `name_of_custom_postion` with the name of the different positions you created


![Article page](https://cloud.githubusercontent.com/assets/8383666/22317255/c2e1d4de-e372-11e6-979a-0ed773e71742.png)


Set **Status** to *Published* and click **Save & Close**. That's it, you have the form on the article page. Finally, just attach the article to a Menu so you can see it there.

## **Transaction List**

All the payments made through the forms to Rave can be accessed on **Components** > **Rave Payments Forms** > **Transaction List** page.


![Article page](https://cloud.githubusercontent.com/assets/8383666/22316675/1858ae8c-e36f-11e6-81fe-67679e7f70c1.png)



## **Suggestions/Contributions**

For issues, suggestions and contributions you could check out the GitHub repository for this integration [here](https://github.com/bosunolanrewaju/joomla-rave-payment-forms/issues). 

**License**
[**GNU GPLv2**](https://github.com/bosunolanrewaju/rave-payment-forms/blob/master/LICENSE)

