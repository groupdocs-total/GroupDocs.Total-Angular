import { getGreeting } from '../support/app.po';

describe('GroupDocs.Total for  Angular test suite', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('GroupDocs.Total');
  });
});
