describe('a user can like a post', function() {
  it('has a like button under each post', function() {
    cy.visit('/login');
        
    cy.get('#login-form').find('[id="username"]').type('jimmyboi');
    cy.get('#login-form').find('[id="password"]').type('1234');
        
    cy.get('#login-form').submit();

    cy.visit('/posts')
    cy.contains('Like').click()
    //expecting Likes to show 1
    
  });
});