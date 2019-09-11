package org.stepdefinition;

import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class FBLoginPageSteps extends FunctionalLibrary {
	 static Hooks h;

	@Given("User is in home page")
	public void user_is_in_home_page() {

	}

	@When("when user  enters {string},{string} and click login button")
	public void when_user_enters_and_click_login_button(String s1, String s2) {
		POJO p=new POJO();
		fill(p.getU(),s1);
		fill(p.getP(),s2);
		click(p.getB());

	}

	@Then("User should be navigated to the hotel page")
	public void user_should_be_navigated_to_the_hotel_page() {
		
		Assert.assertTrue(driver.getCurrentUrl().contains("login_attempt"));
		System.out.println("User is in next page");
		
		
//		h.quitBrowser();
	}

}
