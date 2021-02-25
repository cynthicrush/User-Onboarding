describe('Quotes app', () => {
    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const tosCheckbox = () => cy.get('[type="checkbox"]').check()
    const submitButton = () => cy.get('.submit')


    describe('Filling out inputs', () => {
        it('can type in inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Spider-man')
                .should('have.value', 'Spider-man')
            
            emailInput()
                .should('have.value', '')
                .type('spidey@webwork.com')
                .should('have.value', 'spidey@webwork.com')

            passwordInput()
                .should('have.value', '')
                .type('12345678')
                .should('have.value', '12345678')
        })

        it('checkbox is disabled', () => {
            tosCheckbox().should('be.disabled')
        })

        it('submit button is disabled', () => {
            submitButton().should('be.disabled')
        })

        it('inputs should not be empty', () => {
            nameInput().should('not.be.empty')
            emailInput().should('not.be.empty')
            passwordInput().should('not.be.empty')
        })

    })
})