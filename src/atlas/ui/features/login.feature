Feature: The Internet Guinea Pig Website
  #TODO: move required initial steps into Background section
  #Background:


  Scenario Outline: As a user, I can log into the secure area

    Given I am on the "signIn" page
    And I login with "dmitrii_vagin@epam.com" and "123!@#qweQWE"
    #TODO: analize the reason of conflicts and skipped steps if they are similer. To reproduce - change "page2" to "page"
    And I click on "Search button" on "DRI Header" component on "search" page2
    And current page is "1"
    #TODO: what's the reason of this step?
    And I click on "Right pagination element" on "search" page
    And current page is "2"
    And I see loaded search results


