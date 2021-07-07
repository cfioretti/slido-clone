describe("Events API", () => {
    const getItems = () =>
        cy.request('/events')
            .its('body')

    const getFirst = item =>
        cy.request('/events/1')

    it('returns JSON', () => {
        cy.request('/events')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
    })

    it('loads the initial items', () => {
        getItems()
            .its('body')
            .should('have.length.greaterThan', 0)
    })

    it('returns valid objects', () => {
        getItems()
            .each(value =>
                expect(value).to.have.all.keys('uid', 'title', 'description', 'start_at', 'end_at')
            )
    })

    it('returns first object', () => {
        getFirst(value =>
            expect(value).to.have.all.keys('uid', 'title', 'description', 'start_at', 'end_at')
        )
    })
});
