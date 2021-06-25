describe("Events list", () => {
    it("Can list the events", () => {
        cy.server();
        cy.route({
            url: "/events",
            method: "GET",
            response: { status: "OK", code: 200 }
        });
    });
});
