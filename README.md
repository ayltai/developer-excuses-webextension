# Developer Excuses WebExtension
Overrides your new tabs with a random developer excuse over a beautiful photo background. Made with ❤

| Category      | Measurement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pipeline      | [![CircleCI](https://img.shields.io/circleci/project/github/ayltai/developer-excuses-webextension/master.svg?style=flat)](https://circleci.com/gh/ayltai/developer-excuses-webextension)                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Quality       | [![Code Quality](https://img.shields.io/codacy/grade/0be24969a0de422db4c1debbbd91e02b.svg?style=flat)](https://app.codacy.com/app/AlanTai/developer-excuses-webextension/dashboard) [![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/ayltai_developer-excuses-webextension?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_developer-excuses-webextension) [![Sonar Violations (short format)](https://img.shields.io/sonar/violations/ayltai_developer-excuses-webextension?format=short&server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_developer-excuses-webextension)               |
| Coverage      | [![Code Coverage](https://img.shields.io/codecov/c/github/ayltai/developer-excuses-webextension.svg?style=flat)](https://codecov.io/gh/ayltai/developer-excuses-webextension) [![Sonar Coverage](https://img.shields.io/sonar/coverage/ayltai_developer-excuses-webextension?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_developer-excuses-webextension)                                                                                                                                                                                                                                                                           |
| Rating        | [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_developer-excuses-webextension&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=ayltai_developer-excuses-webextension) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_developer-excuses-webextension&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=ayltai_developer-excuses-webextension) [![Sonar Tech Debt](https://img.shields.io/sonar/tech_debt/ayltai_developer-excuses-webextension?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_developer-excuses-webextension) |
| Security      | [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_developer-excuses-webextension&metric=security_rating)](https://sonarcloud.io/dashboard?id=ayltai_developer-excuses-webextension) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ayltai_developer-excuses-webextension&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=ayltai_developer-excuses-webextension)                                                                                                                                                                                                                           |
| Miscellaneous | ![Maintenance](https://img.shields.io/maintenance/yes/2020) [![Release](https://img.shields.io/github/release/ayltai/developer-excuses-webextension.svg?style=flat)](https://github.com/ayltai/developer-excuses-webextension/releases) [![License](https://img.shields.io/github/license/ayltai/developer-excuses-webextension.svg?style=flat)](https://github.com/ayltai/developer-excuses-webextension/blob/master/LICENSE)                                                                                                                                                                                                                                        |

A Firefox/Chrome/Edge extension that overrides your new tabs with a random developer excuse over a beautiful photo background.

Available at: https://addons.mozilla.org/addon/animated-developer-excuses/

![Screenshot 1](design/screenshot-1.png)

![Screenshot 2](design/screenshot-2.png)

![Screenshot 3](design/screenshot-3.png)

![Screenshot 4](design/screenshot-4.png)

![Screenshot 5](design/screenshot-5.png)

![Screenshot 6](design/screenshot-6.png)

## Features
* Periodically refresh the background image from [Unsplash](https://unsplash.com/)
* Periodically refresh the quote from [Developer Excuses](http://www.devexcuses.com/)
* Animate the background image with [Ken Burns effect](https://en.wikipedia.org/wiki/Ken_Burns_effect)

## Getting started
You can build this project using macOS or Linux.

### Install
1. Install [NodeJS](https://nodejs.org)
2. Install dependencies
   ```sh
   npm i -D
   ```

### Configure
Specify the URL of your Unsplash API proxy:
```sh
export REACT_APP_UNSPLASH_API_ENDPOINT=https://unsplash-api-proxy.appspot.com
```

### Build
```sh
npm run build
```

### Run
```sh
npm start
```

## Acknowledgements
This software is made with the support of open source projects:
* [NodeJS](https://nodejs.org)
* [React](https://github.com/facebook/react)
* [Create React App](https://github.com/facebook/create-react-app)
* [Material UI](https://material-ui.com)
* [Unsplash](https://github.com/unsplash/unsplash-js)
* [kenburns](https://github.com/gre/kenburns)
* [rect-crop](https://github.com/gre/rect-crop)
* [ESLint](https://eslint.org)
* [Stylelint](https://stylelint.io)
* [Enzyme](https://airbnb.io/enzyme)
* [web-ext](https://github.com/mozilla/web-ext)

... and closed source services:
* [CircleCI](https://circleci.com)
* [SonarCloud](https://sonarcloud.io)
