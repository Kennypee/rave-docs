## Create a Flask Application

The first step to building a Flask application is to check if you have Python installed in your system. You can do this by navigating to your terminal and typing the following command:

```
$ python
```

It should show you the python version you are using. Python 2 or 3 will work just fine. If you don’t have Python on your system, you can download it [here](https://www.python.org/downloads/). Install it when it is done downloading

Once python is confirmed, create a directory for you Rave project:
```
$ mkdir rave-project-python
$ cd rave-project-python
```

After creating the directory, install Flask and other libraries:
```
$ pip install flask json requests
```

Installing Flask also installs a few dependencies which you can view when you run the following command:

```
$ pip freeze
```

The dependencies listed above can be saved in a file. This is good practice because anyone who wants to work on or run your project will need to know the dependencies to install. The following command will save the dependencies in a `requirements.txt` file:

```
$ pip freeze requirements.txt
```

When you’re done installing the required libraries, navigate to your project folder. Here we’ll proceed to arrange our project’s sub-folders and files in the following format:

`/app` : This is a directory within your project folder. Here we’ll put all or code and leave out other files such as the `requirements.txt` file outside.

`/app/templates` : This is where we’ll put our HTML files.

`/app/static` : This is where we’ll put static files such as CSS and JavaScript files as well as images.