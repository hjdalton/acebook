describe('Comments', function() {
  // This should be split in two
  it('can comment and see there comments displayed', function() {
    cy.visit('/login');
        
    cy.get('#login-form').find('[id="username"]').type('jimmyboi');
    cy.get('#login-form').find('[id="password"]').type('1234');
        
    cy.get('#login-form').submit();

    cy.visit('/posts');

    cy.contains('Comment').click();

    cy.get('#new-comment-form').find('[id="comment"]').type('Comment1');
    cy.get('#new-comment-form').submit();

    // This test should be refactored to test for the comment by id instead of possibly allowing coincidences to past the test
    cy.get('.comments').should('contain', 'Comment1');
  });
});