Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the signIn page
    When I login with <username> and <password>
    Then I should see a flash message saying 'qwe'

    Examples:
      | username | password             | 
      | dmitrii_vagin@epam.com | 123!@#qweQWE! |
  