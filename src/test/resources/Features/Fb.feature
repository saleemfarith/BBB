Feature: To validate the FB application

Background: 
    Given User is in home page

@smoke
  Scenario Outline: To verify login functionality
    When when user  enters "<userName>","<password>" and click login button
    Then User should be navigated to the hotel page

    Examples: 
      | userName | password |
      | Farith   | Vel      |

      
      @sanity
  Scenario Outline: To verify login functionality
    When when user  enters "<userName>","<password>" and click login button
    Then User should be navigated to the hotel page

    Examples: 
      | userName | password |
      | Farith   | Vel      |
      
      
      
      @Regression
  Scenario Outline: To verify login functionality
    When when user  enters "<userName>","<password>" and click login button
    Then User should be navigated to the hotel page

    Examples: 
      | userName | password |
      | Farith   | Vel      |
      
      @smoke
  Scenario Outline: To verify login functionality
    When when user  enters "<userName>","<password>" and click login button
    Then User should be navigated to the hotel page

    Examples: 
      | userName | password |
      | Farith   | Vel      |
      
      