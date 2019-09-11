package org.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class FunctionalLibrary {
	static WebDriver driver;
	public static WebDriver getdriver() {
		System.setProperty("webdriver.chrome.driver", "F:\\Velmurugan\\JAVA\\eclipse-java-oxygen-3a-win32-x86_64\\eclipse\\farith1\\Cucumber\\driver\\chromedriver.exe");
		return driver=new ChromeDriver();
	}

	public static void loadurl(String url) {
driver.get(url);
	}

public static void fill(WebElement e,String v) {
e.sendKeys(v);
}


public static void click(WebElement e) {
e.click();
}
}
