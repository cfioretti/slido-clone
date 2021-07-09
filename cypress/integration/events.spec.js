describe("Events API", () => {
    const getItems = () =>
        cy.request('http://localhost:1337/events').its('body');

    const getFirst = () =>
        cy.request('http://localhost:1337/events/1');

    it('returns JSON', () => {
        cy.request('http://localhost:1337/events')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
    })

    it('loads the initial items', () => {
        getItems().should('have.length.greaterThan', 0);
    })

    it('returns first object', () => {
        getFirst(value => {
                console.log('first', value);
                expect(value).to.have.all.keys('uid', 'title', 'description', 'start_at', 'end_at');
            }
        )
    })

    it('returns valid objects', () => {
        getItems().each(value => {
                console.log('first', value);
                expect(value).to.have.all.keys('uid', 'title', 'description', 'start_at', 'end_at');
            }
        )
    })
});
