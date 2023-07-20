/// <reference types="cypress" />


it('Level1_Test', function() {

    // Assumptions or Prerequisite
        // Rancher Desktop is up and running.
        // Rancher UI is Up and have user login details

    var rancher_ui_url = "http://192.168.1.11:8080/"
    var username = "krishna"
    var password = "krishna123"
    var title = "Rancher"

    // Visit Rancher UI URL
    cy.visit(`${rancher_ui_url}`)
    // Username by class since ID field is dynamic
    cy.get('input[class="form-control login-user ember-view ember-text-field"]').type(`${username}`)
    // Password by class since ID field is dynamic
    cy.get('input[class="form-control login-pass ember-view ember-text-field"]').type(`${password}{enter}`)
    // Assert Page Title should be Rancher
    cy.title().should('eq', `${title}`)

} )