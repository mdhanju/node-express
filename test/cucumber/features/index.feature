Feature: Home Page

  Scenario: Validate home page
    Given I am on home page 
    When I see home tab
    And I see about tab
    And I see home content
    When I click on about tab
    Then I see about content