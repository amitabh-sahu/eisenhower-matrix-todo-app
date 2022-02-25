describe('appuse', () => {
    it('user use the app', () => {
        cy.visit('http://localhost:3000');

        // add todo
        for (let i = 0; i < 3; i++) {
            cy.findAllByText(/\+/i).first().click();
            cy.findByRole('textbox').type(`test-text-${i + 1}`);
            cy.findByRole('button', { name: /✓/i }).click();
        }

        // delete todo
        cy.findAllByText(/✕/i).first().click();

        // mark todo completed
        cy.findAllByRole('checkbox').first().click();

        // drag and drop todo
        const dataTransfer = new DataTransfer();
        cy.get('.todo_group-task').first().trigger('dragstart', { dataTransfer });
        cy.get('#droppable-box-schedule').trigger('drop', { dataTransfer });
        
        // retrive state on refersh
        cy.reload();
        cy.get('#droppable-box-do-first').children().should('have.length', 1);
    });
});