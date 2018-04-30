## Create a React Application

To create a React application, navigate to your terminal and input the following commands:

> CAUTION: This procedure assumes you are familiar with and have installed the following:

>1. NodeJS
>2. NPM

```
# install the create-react-app cli globally
$ npm install -g create-react-app
    
# create a new project by running the create-react-app command
$ create-react-app my-rave-project
```
When you are done, your application’s folder should have a structure similar to this:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_72C78DFCECD70752D9EB2B769AB2A3DF54C2EC61A7F52C8F89E488217CFC798B_1522784450953_Screenshot+from+2018-04-02+17-02-25.png)

Your `package.json` file should  include `react` , `react-dom`,  `react-scripts`  and  `react-toastify` as dependencies. You may install other dependencies that you may need with `NPM`:

```
$ npm install --save <NAME OF DEPENDENCY>
```

Alternatively,  you may use Yarn:

``` 
$ yarn add <NAME OF DEPENDENCY>
```
