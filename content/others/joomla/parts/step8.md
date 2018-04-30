## Step 8: Display Form in Article Body

To display the form within the article body, make sure you set the position for the form to **Rave In-Article** when creating the form (Module settings). This is a position provided by default by the module to avoid conflicts with template's positions.

Click on **Content** > **Articles** > **Add New Article** and give it a title and load the provided **Rave In-Article** position by putting this in the Content Editor:

    {loadposition Rave In-Article}

This will output all the content set to display at this position (Rave In-Article) here. This comes handy if you want to have multiple forms on the same page.
To have different forms on different pages, you should set a custom position for each of the forms and load the positions in their respective articles (pages).

    {loadposition name_of_custom_postion}

> Note: Replace `name_of_custom_postion` with the name of the different positions you created

![Article page](https://cloud.githubusercontent.com/assets/8383666/22317255/c2e1d4de-e372-11e6-979a-0ed773e71742.png)

Set **Status** to *Published* and click **Save & Close**. That's it, you have the form on the article page. Finally, just attach the article to a Menu so you can see it there.
