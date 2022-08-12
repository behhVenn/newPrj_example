Feature: Search of vehicle
  #TODO: move required initial steps into Background section
  #Background:


  Scenario Outline: I can manage favorite vehicles in search results 

    Given I am on the "signIn" page
    And I login with "dmitrii_vagin@epam.com" and "123!@#qweQWE"
    And I click on "Search button" on "DRI Header" component on "search" page
    And current page is "1"
    #TODO: what's the reason of this step?
    And I click on "Right pagination element" on "search" page
    #And current page is "2"
    #And I see loaded search results


