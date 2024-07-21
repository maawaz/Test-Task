// cypress/integration/registrationForm.spec.js

describe('Registration Form', () => {
    beforeEach(() => {
      cy.visit('https://yourwebsite.com/registration');
    });
  
    it('should submit the form with valid data', () => {
      cy.get('#fullName').type('John Doe');
      cy.get('#email').type('john.doe@example.com');
      cy.get('#password').type('password123');
      cy.get('#confirmPassword').type('password123');
      cy.get('#dob').type('1990-01-01');
      cy.get('#gender').select('Male');
      cy.get('#newsletter').check();
      cy.get('#submit').click();
  
      cy.contains('Registration successful').should('be.visible');
    });
  
    it('should show an error for invalid email format', () => {
      cy.get('#fullName').type('John Doe');
      cy.get('#email').type('john.doeexample.com');
      cy.get('#password').type('password123');
      cy.get('#confirmPassword').type('password123');
      cy.get('#dob').type('1990-01-01');
      cy.get('#gender').select('Male');
      cy.get('#newsletter').check();
      cy.get('#submit').click();
  
      cy.contains('Invalid Email Address').should('be.visible');
    });
  
    it('should show an error for password mismatch', () => {
      cy.get('#fullName').type('John Doe');
      cy.get('#email').type('john.doe@example.com');
      cy.get('#password').type('password123');
      cy.get('#confirmPassword').type('password456');
      cy.get('#dob').type('1990-01-01');
      cy.get('#gender').select('Male');
      cy.get('#newsletter').check();
      cy.get('#submit').click();
  
      cy.contains('Passwords do not match').should('be.visible');
    });
  });
  