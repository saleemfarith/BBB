package org.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources"},glue= {"org.stepdefinition"},monochrome=true,plugin = {"pretty", "html:target","json:target/reports.json"},tags= {"~smoke,@sanity,@Regression"},dryRun=true)   
public class RunnerClass {

}
