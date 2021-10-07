/// <reference types="cypress"/>

describe('Valida el formulario', () => {

    it('Submit al formulario mostrar mensaje de error', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="formulario"]')
            .submit();

        //___Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios')
        
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-danger')
                
    });    
});