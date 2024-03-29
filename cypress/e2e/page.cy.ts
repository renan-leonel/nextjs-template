describe('Page', () => {
    it('should find the text', () => {
        cy.visit('/');
        cy.get('main').contains('example text');
    });
});
