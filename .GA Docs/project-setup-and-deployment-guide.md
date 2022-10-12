# Project Set Up and Deployment Guide

Make sure to set up your project following the steps listed in this document.

- [Scaffold Your Project](#scaffold-your-project)
- [Storing API Keys Outside of Github](#storing-api-keys-outside-of-github)
  - [Creating Variables in .env Files](#creating-variables-in-env-files)
  - [Using an Environment Variable in JavaScript](#using-an-environment-variable-in-javascript)
- [Deploying React Apps on Netlify](#deploying-react-apps-on-netlify)

## Scaffold Your Project

1. Change into your `sei/projects` directory with:

  ```bash
  cd ~/sei/projects
  ```

2. Run Create React App to scaffold your project by typing the follow command in the Terminal and replacing where it reads `your-project-name` with your project name.  Use kebab-case (all lowercase with hyphens separating words) and make sure there are **no** spaces or special characters in the project name you choose.

  ```bash
  npx create-react-app your-project-name
  ```

3. Change directories into the newly created project directory, replacing where it reads `your-project-name` with your project name:

  ```bash
  cd ~/sei/projects/your-project-name
  ```

4. Create a new file named `.env.local` (the name of this file must be exactly as written here) to store your API keys using the `touch` command in the Terminal:

  ```bash
  touch .env.local
  ```

4. Create your project's code repository on [Github](https://github.com/).

5. Once you've created your repository, copy the code in the section that reads **"…or push an existing repository from the command line"** and paste it in the Terminal.

## Storing API Keys Outside of Github

As developers, we need to guard against our API keys being pushed to Github.  One way to ensure that this doesn't happen is to store them in a separate file that is not tracked in Git at all.

The way we tell Git to ignore certain files is through a special file that is named `.gitignore`. This file must be placed in the root directory of the git repository.   Conveniently, create-react-app automatically creates this file for us and adds a handful of files to it that are commonly excluded from Git.  The `.env.local` file is one example of a file that is ignored by default.

To use this file to store your API keys, you create your variables in it and then reference them anywhere in your JavaScript files via a special object named `process.env`.

### Creating Variables in .env Files

To create a variable in a .env file, you will:

1. Open the file with `code .env.local`. If you didn't previously create this file, create it with `touch .env.local` first.
2. Add a variable to the file. The variable must be named with the prefix `REACT_APP_`. By convention environment variables are named in all caps using snake case (underscores between words).
3. The variable name is followed by an equal sign with no spaces before or after it.
4. After the equal sign, add the variable value.  Do not use quotes with .env variable values.  Spaces are permitted in the value.  The variable is read up to the first line break.
5. You can add as many variables as you like separated by a line break in the file.

For example, if you had an API key for a stock API that you want to use in a Create React App, you could add it like this:

```
REACT_APP_STOCK_API_KEY=4j4584fds930g5437d89
```

### Using an Environment Variable in JavaScript

When your app loads, the environment variables are loaded into memory.  This means that _if your server is already running_, you'll need to stop it and restart it after adding or changing an environment variable.

In your code you can then reference the variable using `process.env.REACT_APP_YOUR_KEY_NAME`.

For example, assume that the API you're using requires your API key to be added to your request query parameters like so:

```md
https://fakestocks.com/q?apikey=4j4584fds930g5437d89&symbol=AAPL
```

To substitute the hardcoded key in the example above with an API key in your `.env.local` file that you named `REACT_APP_STOCK_API_KEY`, you would do the following:

```js
// Use string concatenation or interpolation to add the key
const url = `https://fakestocks.com/q?apikey=${process.env.REACT_APP_STOCK_API_KEY}&symbol=AAPL`

// Use the url as normal in your request
fetch(url)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error)
```

## Deploying React Apps on Netlify

Refer to the lecture [notes](../../../netlify-deploy-react) for a refresher on how to deploy your application to Netlify!
