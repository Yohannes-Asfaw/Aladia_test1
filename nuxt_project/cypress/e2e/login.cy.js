/* ==== Test Created with Cypress Studio ==== */
import "@chromatic-com/cypress/support";
it('loginflow', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/');
  cy.get('.input-field').clear('slkd');
  cy.get('.input-field').type('slkdf');
  cy.get('.py-3').click();
  cy.get('.input-field').click();
  cy.get('.input-field').click();
  cy.get('.py-3').click();
  cy.get('.input-field').clear('j');
  cy.get('.input-field').type('jonathanasfaw11@gmail.com');
  cy.get('.py-3').click();
  cy.get('.w-50').click();
  cy.get('.w-50 > .flex').click();
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > :nth-child(1) > .input-field').clear('y');
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > :nth-child(1) > .input-field').type('yohannes');
  cy.get(':nth-child(3) > .input-field').clear('a');
  cy.get(':nth-child(3) > .input-field').type('asfaw');
  cy.get(':nth-child(7) > .relative > .input-field').clear('1');
  cy.get(':nth-child(7) > .relative > .input-field').type('123456');
  cy.get(':nth-child(9) > .relative > .input-field').clear('1');
  cy.get(':nth-child(9) > .relative > .input-field').type('123456');
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > .text-white').click();
  cy.get('.z-10 > .flex-col > .relative > :nth-child(1)').clear('1');
  cy.get('.z-10 > .flex-col > .relative > :nth-child(1)').type('1');
  cy.get('.flex-col > .relative > :nth-child(2)').clear('2');
  cy.get('.flex-col > .relative > :nth-child(2)').type('2');
  cy.get('.relative > :nth-child(3)').clear('3');
  cy.get('.relative > :nth-child(3)').type('3');
  cy.get('.relative > :nth-child(4)').clear('4');
  cy.get('.relative > :nth-child(4)').type('4');
  cy.get('.relative > :nth-child(5)').clear('5');
  cy.get('.relative > :nth-child(5)').type('5');
  cy.get('.relative > :nth-child(6)').clear('6');
  cy.get('.relative > :nth-child(6)').type('6');
  cy.get('.py-3').click();
  /* ==== End Cypress Studio ==== */
});