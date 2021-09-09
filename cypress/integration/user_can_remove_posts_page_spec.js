var faker = require('faker');

// require('../mongodb_helper')
// var Post = require('../../models/post');


describe('Timeline', function() {
  it('can remove posts and see the changes', function() {
    let randomText1 = faker.lorem.words()
    let randomText2 = faker.lorem.words()

    cy.visit('/posts');
    cy.contains('New Post').click();
    cy.get('#new-post-form').find('[type="text"]').type(randomText1);
    cy.get('#new-post-form').submit();

    cy.visit('/posts');
    cy.contains('New Post').click();
    cy.get('#new-post-form').find('[type="text"]').type(randomText2);
    cy.get('#new-post-form').submit();

    cy.get('.posts').should('contain', randomText1);
    cy.get('.posts').should('contain', randomText2);
  
    cy.get('.posts').find(`[id = "${randomText1}"]`).find('[id = "forms"]').find('[id = "delete-post-form"]').submit();
    cy.get(`[id = "${randomText1}"]`).should('not.exist'); 
  });
});