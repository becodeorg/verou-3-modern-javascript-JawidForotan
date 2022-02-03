🌱 Must-have's
We have installed npm before: typing npm -v in the terminal should return the npm version.
In your project's folder you should see a file called package.json: this is called a Manifest file, something like a "setting" file.
Inside the package.json file you will see a lot of different properties. One of those properties is script.
Scripts can be used to create shortcuts in the command prompt/shell.
Remember before? We already used this to run a bundler.
"scripts": {
...
"build": "webpack"
},
Add a property build to your script (see above) and try to build and run your project in your terminal with the script shortcuts
npm run build
or
yarn build

- npm run start
  or
  yarn start
  In this exercise you we use images, charts and dates. Those can sometimes take a lot of our time to get it done.
  Replace the code that makes dates with a library such as Luxon. If this isn't useful for the kind of project your picked for this exercise, you may choose a different library that seems interesting.
  🌼 Nice-to-have's
  What other useful scripts could you add? What other helpful packages could you use?
  Most bundlers have the option of generating a bundle for the "development" environment (that is your local computer while you are developing your app) or for the "production" environment (that is the file that will actually be uploaded to the remote server). Read up on it and test it out on a deployment platform.
  Hint: When you install the first package via npm you will notice a new folder called node_modules. This is where all dependencies are saved. We don't want to commit the full node_modules folder since it's large (it can be several GBs, and thousands of files!) and its content can always be reproduced starting from a package-lock.json file.
  Add node_modules to your .gitignore file if you haven't already.
