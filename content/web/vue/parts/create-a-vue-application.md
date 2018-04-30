## Create a Vue Application

The best way to integrate Vue to your Rave application would be to use Vue’s command line interface (CLI). To carry this out, navigate to your terminal and enter the following commands:

> CAUTION: This procedure assumes you are familiar with and have installed the following:

> 1. NodeJS
> 2. Webpack or Browserify

    # install Vue globally
    $ npm install -g vue-cli  
    
    # create a new project using the Webpack template
    $ vue init webpack my-rave-project
    
    # or if you prefer using the Browserify template
    $ vue init browserify my-rave-project
    
    # install the dependencies in the local node_modules folder
    $ cd my-rave-project
    $ npm install
    
    # Start the app
    $ npm run dev

In creating this project, Webpack was used.  When initializing your project using the Webpack template, you will have to answer a few questions. Use the image below as a guide:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1522276033818_rave-install.png)

When you are done, your application folder should have a structure similar to this:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8CA58C87BD82C742CD0884051C7ADAB3BACA5DC2CB44CB404AA1A0C3C4832142_1522275925725_Screenshot+from+2018-03-28+23-17-29.png)

Your `package.json` file should  include `vue`  and  `vue-router`  as dependencies. You may install other dependencies that you may need with `NPM`:

    $ npm install --save <NAME OF DEPENDENCY>

Alternatively,  you may use Yarn:

    $ yarn add <NAME OF DEPENDENCY>
