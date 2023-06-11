import { faker } from '@faker-js/faker'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Products', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Boleto Successfully', () => {
    cy.gui_boletoCheckout()
    cy.get('.order-number').should('be.visible')
  })

  it('Boleto Parcelado Successfully', () => {
    cy.gui_boletoParceladoCheckout()
    cy.get('.order-number').should('be.visible')
  })

  it('Cartão de Crédito Successfully', () => {
    cy.gui_cartaoCreditoCheckout()
    cy.get('.order-number').should('be.visible')
  })
})