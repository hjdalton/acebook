describe('Login', function() {
  it('allows the user to log in', function() {
    cy.visit('/login');
        
    cy.get('#login-form').find('[id="username"]').type('jimmyboi');
    cy.get('#login-form').find('[id="password"]').type('1234');
        
    cy.get('#login-form').submit();
  });
});
    