import { getGreeting } from '../support/app.po';

describe('total-angular', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('GroupDocs.Total Angular Example');
  });
});
