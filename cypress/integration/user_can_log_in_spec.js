describe('Login', function() {
  it('allows the user to log in', function() {
    cy.visit('/login');
        
    cy.get('#login-form').find('[type="text"]').type('jimmyboi');
    cy.get('#login-form').find('[type="password"]').type('1234');
        
    cy.get('#login-form').submit();
  });
});
    