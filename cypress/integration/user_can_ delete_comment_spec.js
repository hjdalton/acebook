describe('Comments', function() {
  it('can remove a comment', function() {
    cy.visit('/posts');
    cy.contains('Comment').click();

    cy.get('#new-comment-form').find('[id="comment"]').type('Comment7');
    cy.get('#new-comment-form').submit();

    cy.get("#delete-comment-form").submit();

    cy.get('.comments').should('contain', 'Comment7')
  });
});
    
