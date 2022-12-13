//Turn on calculator
beforeEach(() => {
  cy.visit('http://127.0.0.1:5501/index.html')
  cy.get('#on').click();
})

describe('turn off', () => {
  it('passes', () => {
    cy.get('#on').click();

    cy.get('#topDisplay').should('contain', "");
    cy.get('#display').should('contain', "");
  })
})

describe('addition', () => {
  it('passes', () => {
    cy.get('.nine').click();
    cy.get('#plus').click();
    cy.get('.eight').click();
    cy.get('#equal').click();

    cy.get('#topDisplay').should('contain', "17");
  })
})

describe('subtraction', () => {
  it('passes', () => {
    cy.get('.seven').click();
    cy.get('#minus').click();
    cy.get('.five').click();
    cy.get('#equal').click();

    cy.get('#topDisplay').should('contain', "2");
  })
})

describe('division', () => {
  it('passes', () => {
    cy.get('.nine').click();
    cy.get('#division').click();
    cy.get('.three').click();
    cy.get('#equal').click();

    cy.get('#topDisplay').should('contain', "3");
  })
})

describe('moltiplication', () => {
  it('passes', () => {
    cy.get('.nine').click();
    cy.get('#moltiplication').click();
    cy.get('.eight').click();
    cy.get('#equal').click();

    cy.get('#topDisplay').should('contain', "72");
  })
})

describe('Cant have more than one decimal', () => {
  it('passes', () => {
    cy.get('.nine').click();
    cy.get('#dot').click();
    cy.get('.three').click();
    cy.get('#dot').click();

    cy.get('#display').should('contain', "9.3");
  })
})

describe('reset correctly screens', () => {
  it('passes', () => {
    cy.get('.nine').click();
    cy.get('#moltiplication').click();
    cy.get('.eight').click();
    cy.get('#equal').click();

    cy.get('#topDisplay').should('contain', "");
    cy.get('#display').should('contain', "");
  })
})

describe('add negative value', () => {
  it('passes', () => {
    cy.get('.nine').click();
    cy.get('.eight').click();
    cy.get('#negative').click();

    cy.get('#display').should('contain', "-98");
  })
})

describe('update style', () => {
  it('passes', () => {
    cy.get('.slider').click();

    cy.get('.nine').should('have.class', "numbersNew");
  })
})

describe('perform multiple operations', () => {
  it('passes', () => {
    cy.get('.nine').click();
    cy.get('#moltiplication').click();
    cy.get('.eight').click();
    cy.get('#minus').click();
    cy.get('.one').click();
    cy.get('.two').click();
    cy.get('#equal').click();

    cy.get('#topDisplay').should('contain', "60");
  })
})

describe('percentage', () => {
  it('passes', () => {
    cy.get('.two').click();
    cy.get('#Zero').click();
    cy.get('#percentage').click();
    cy.get('.eight').click();
    cy.get('.eight').click();
    cy.get('#equal').click();

    cy.get('#topDisplay').should('contain', "17.6");
  })
})