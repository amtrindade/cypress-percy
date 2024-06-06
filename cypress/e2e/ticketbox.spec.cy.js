import '@percy/cypress';

describe('TicketBox', () => {

  beforeEach(() => {
    cy.visit("/index.html");
  })

  it('Check for the initial state', () => {

    cy.percySnapshot();

    // cy.percySnapshot('Homepage test');
    // cy.percySnapshot('Homepage responsive test', { widths: [768, 992, 1200] });
  });

  it('Checks for invalid e-mail', () => {
    cy.get('#email').type("email-invalido.com");
    cy.percySnapshot();
  })

  it('Enables submission after all mandatory fields are filled', () => {
    cy.fillMandatoryFields();
    cy.percySnapshot();
  })

  it('Updates agreement base on full name, tickets quantity, and type', () => {
    cy.get('#first-name').type('Antônio');
    cy.get('#last-name').type('Trindade');
    cy.get('#ticket-quantity').select('4');
    cy.get("#vip").check();
    cy.percySnapshot();
  })

  const successfulFormSubmition = 'Shows a success message after form submission';
  it(successfulFormSubmition, () => {
    cy.fillMandatoryFields();
    cy.contains('Confirm Tickets').click();
    cy.percySnapshot(successfulFormSubmition, 
      {
        percyCSS: `.success span { display: none}`
      }
    );

  })
});