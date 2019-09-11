package org.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks  extends FunctionalLibrary{
	@Before
	public static void launchbrowser() {

	getdriver();
	loadurl("https://ww.facebook.com");
	}
	
	@After
	
	public static  void quitBrowser() {
		driver.quit();
	}
}
