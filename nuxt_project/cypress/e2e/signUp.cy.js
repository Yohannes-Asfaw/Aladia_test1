/* ==== Test Created with Cypress Studio ==== */
import "@chromatic-com/cypress/support";
it('signupflow', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/signup');
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > :nth-child(1) > .input-field').clear('y');
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > :nth-child(1) > .input-field').type('yohanes');
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > :nth-child(1) > .input-field').clear('yohannes');
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > :nth-child(1) > .input-field').type('yohannes');
  cy.get(':nth-child(3) > .input-field').clear('a');
  cy.get(':nth-child(3) > .input-field').type('asfaw');
  cy.get(':nth-child(7) > .relative > .input-field').clear('1');
  cy.get(':nth-child(7) > .relative > .input-field').type('12345');
  cy.get(':nth-child(9) > .relative > .input-field').clear('1');
  cy.get(':nth-child(9) > .relative > .input-field').type('12345');
  cy.get(':nth-child(7) > .relative > .input-field').clear('123456');
  cy.get(':nth-child(7) > .relative > .input-field').type('123456');
  cy.get(':nth-child(9) > .relative > .input-field').clear('123456');
  cy.get(':nth-child(9) > .relative > .input-field').type('123456');
  cy.get('.w-50 > .flex').click();
  cy.get('[data-v-73964cb6=""][data-v-a9e200fb=""] > .text-white').click();
  cy.get('.z-10 > .flex-col > .relative > :nth-child(1)').clear('1');
  cy.get('.z-10 > .flex-col > .relative > :nth-child(1)').type('1');
  cy.get('.flex-col > .relative > :nth-child(2)').clear('2');
  cy.get('.flex-col > .relative > :nth-child(2)').type('2');
  cy.get('.relative > :nth-child(3)').clear('2');
  cy.get('.relative > :nth-child(3)').type('2');
  cy.get('.relative > :nth-child(4)').clear('4');
  cy.get('.relative > :nth-child(4)').type('4');
  cy.get('.relative > :nth-child(5)').clear('1');
  cy.get('.relative > :nth-child(5)').type('1');
  cy.get('.relative > :nth-child(6)').clear();
  cy.get('.relative > :nth-child(6)').type('1');
  cy.get('.relative > :nth-child(6)').click();
  cy.get('.py-3').click();
  /* ==== End Cypress Studio ==== */
});