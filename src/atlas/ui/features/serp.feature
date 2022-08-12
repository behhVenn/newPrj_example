Feature: Search of vehicle
  Background:
    Given I am on the "signIn" page
    And I login with "dmitrii_vagin@epam.com" and "123!@#qweQWE"
    And I click on "Search button" on "DRI Header" component on "serp" page
    And I see loaded "serp" page
    And Current page is "1"
    #TODO: what's the reason of this step?
    And I click on "Right pagination element" on "serp" page
    And Current page is "2"
    And I see loaded "serp" page



  Scenario Outline: I can manage favorite vehicles in search results

    When I add vehicle with index "7" to compare
    And I add vehicle with index "8" to compare
    And I click on "Lightbox expander element" on "Compare Lightbox" component on "serp" page
    Then I see loaded "Compare Lightbox" component on "serp" page
    And I should see "Lightbox title" with text "Vehicle Comparison (2/4)" on "Compare Lightbox" component on "serp" page
    And I should see that "Compare Vehicles button" is enabled in "Compare Lightbox" component on "serp" page




