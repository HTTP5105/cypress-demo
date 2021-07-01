const clickTheOnlyButton = () => cy.get('#theOnlyButton').click();

const expectToBeOnPage = (page) => {
    cy.location().should((loc) => {
        expect(loc.pathname).to.eq(page)
    })
}

const submitTheForm = (submission) => {
    cy.get('input').type(submission);
    cy.get('[type="submit"]').click()
}

describe('Navigation', () => {
    it('goes to the home page', () => {
        cy.visit('/')
    });

    it('goes to the other page when the button is clicked', () => {
        clickTheOnlyButton();

        expectToBeOnPage('/otherpage.html');
    });

    it('goes to the 404 page from the other page', () => {
        clickTheOnlyButton();

        expectToBeOnPage('/404.html')
    })
    it('goes to expected URL when the 404 form is filled', () => {
        submitTheForm('/otherpage.html');

        expectToBeOnPage('/otherpage.html');

        clickTheOnlyButton();
    })

    it('goes to the home page from the 404 page when no text is supplied to the form', () => {

        cy.get('[type="submit"]').click()

        expectToBeOnPage('/')

    })
})