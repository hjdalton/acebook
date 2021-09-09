describe('Comments', function() {
  it('can remove a comment', function() {
    cy.visit('/posts');
    cy.contains('Comment').click();

    cy.get('#new-comment-form').find('[id="comment"]').type('Comment1');
    cy.get('#new-comment-form').submit();

    cy.contains('Delete').click()

    cy.get('.comments').should('not contain', 'Comment1')
  });
});
    
