$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Fb.feature");
formatter.feature({
  "name": "To validate the FB application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To verify login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is in home page",
  "keyword": "Given "
});
formatter.step({
  "name": "when user  enters \"\u003cuserName\u003e\",\"\u003cpassword\u003e\" and click login button",
  "keyword": "When "
});
formatter.step({
  "name": "User should be navigated to the hotel page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "Farith",
        "Vel"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "FBLoginPageSteps.user_is_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "when user  enters \"Farith\",\"Vel\" and click login button",
  "keyword": "When "
});
formatter.match({
  "location": "FBLoginPageSteps.when_user_enters_and_click_login_button(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#email\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9E4C2GM4\u0027, ip: \u0027192.168.43.224\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.25 (a0c95f440512e..., userDataDir: C:\\Users\\Vel\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:62690}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9eb7a685784982436aa7b869121e243c\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat org.stepdefinition.FunctionalLibrary.fill(FunctionalLibrary.java:19)\r\n\tat org.stepdefinition.FBLoginPageSteps.when_user_enters_and_click_login_button(FBLoginPageSteps.java:30)\r\n\tat ✽.when user  enters \"Farith\",\"Vel\" and click login button(src/test/resources/Features/Fb.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should be navigated to the hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginPageSteps.user_should_be_navigated_to_the_hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});