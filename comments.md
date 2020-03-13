## Package.json 

    npm init -y

## Jasmine mit Karma

Bei vorhandener package.json: ```npm install```

    npm i -D jasmine-core karma karma-cli karma-jasmine karma-chrome-launcher karma-ie-launcher karma-mocha-repoter
    npx karma init
    (anstatt, bei globaler Installation) karma init
    karma start karma.conf.js
    
Komplette Skripte in package.json

      "scripts": {
        "test": "karma start karma.conf.js", 
        "lint": "eslint --fix ./src/**/*.js ./test/**/*.js",
        "build": "karma start karma.conf.build.js",
        "prebuild": "npm run lint"
      },

    > npm test
    > npm run lint
    > npm run build
  
## Statische Code-Analyse mit eslint 

    npm i -D eslint

    npx eslint --init
    ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
    ? What type of modules does your project use? None of these
    ? Which framework does your project use? None of these
    ? Does your project use TypeScript? No
    ? Where does your code run? Browser, Node
    ? How would you like to define a style for your project? Answer questions about your style
    ? What format do you want your config file to be in? JavaScript
    ? What style of indentation do you use? Spaces
    ? What quotes do you use for strings? Single
    ? What line endings do you use? Windows
    ? Do you require semicolons? Yes
