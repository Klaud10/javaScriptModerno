/// <reference types="cypress"/>

describe('Llena los campos para una nueva cita y la edita', () => {
    it('Campos nueva ciita', () => {

        cy.visit('/index.html')

        cy.get('[data-cy="mascota-input"]')
            .type('Simba')
        
        cy.get('[data-cy="propietario-input"]')
            .type('Claudio')
        
        cy.get('[data-cy="telefono-input"]')
            .type('654654654')
        
        cy.get('[data-cy="fecha-input"]')
            .type('2021-08-20')
        
        cy.get('[data-cy="hora-input"]')
            .type('08:30')
        
        cy.get('[data-cy="sintomas-textarea"]')
            .type('Come y duerme todo el día')
            
        cy.get('[data-cy="submit-cita"]')
            .click()

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')    
            .should('equal', 'Administra tus Citas');

                //___Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')
            
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')    

    });

    it('Edita la cita', () => {
        cy.get('[data-cy="btn-editar"]')
            .click()

        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Nuevo-Simba')  
            
        cy.get('[data-cy="submit-cita"]')
            .click()    

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente')
            
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')  
    });
});