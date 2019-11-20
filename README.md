# Sonarqube Example with NodeJS

Here you will find an example of project configured to be analyzed with SonarQube

## Steps to follow to set up your project the same way
* Install [`sonarqube-scanner`]
```
npm install -D sonarqube-scanner
```

## Coverage
* In order to send coverage to your SonarQube first generate it. In the case of our example:
```
npm run test
```
* Then provide coverage report location as value of `sonar.typescript.lcov.reportPaths` property of your analysis
* Run analysis and find your coverage in SonarQube!
```
sonar-scanner
```
* This project also uses [`jest-sonar-reporter`](https://www.npmjs.com/package/jest-sonar-reporter) to generate 