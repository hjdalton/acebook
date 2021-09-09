describe('Sign Up', function() {
  it('allows the user to sign up', function() {
    cy.visit('/');
    
    cy.get('#sign-up-form').find('[id="firstname"]').type('Beyonce');
    cy.get('#sign-up-form').find('[id="lastname"]').type('Knowles Carter');
    cy.get('#sign-up-form').find('[id="username"]').type('BB');
    cy.get('#sign-up-form').find('[id="email"]').type('cypress@signup.com');
    cy.get('#sign-up-form').find('[id="password"]').type('jayz');
    
    cy.get('#sign-up-form').submit();
  });
});
