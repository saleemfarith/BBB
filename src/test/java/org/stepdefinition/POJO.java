package org.stepdefinition;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class POJO extends FunctionalLibrary{
	
	
	public POJO() {
		PageFactory.initElements(driver, this);
	}

	
	@FindBy(id="email")
	private WebElement u;
	
	@FindBy(id="pas")
	private WebElement p;
	
	public WebElement getU() {
		return u;
	}

	public WebElement getP() {
		return p;
	}

	public WebElement getB() {
		return b;
	}


	@FindBy(id="loginbutton")
	private WebElement b;
	
}
