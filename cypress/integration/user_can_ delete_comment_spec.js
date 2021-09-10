var faker = require('faker');

describe('Comments', function() {
  it('can remove a comment', function() {
    cy.visit('/login');
        
    cy.get('#login-form').find('[id="username"]').type('jimmyboi');
    cy.get('#login-form').find('[id="password"]').type('1234');
        
    cy.get('#login-form').submit();
    
    let randomText3 = faker.lorem.words()

    cy.visit('/posts');
    cy.contains('Comment').click();

    cy.get('#new-comment-form').find('[id="comment"]').type(randomText3);
    cy.get('#new-comment-form').submit();

    cy.get('.comments').find('.comment-text').find(`[id = "${randomText3}"]`).submit();
    cy.get(`[id = "${randomText3}"]`).should('not.exist'); 
  });
});
    
