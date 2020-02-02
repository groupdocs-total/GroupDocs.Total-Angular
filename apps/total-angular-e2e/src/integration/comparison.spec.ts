/// <reference types="Cypress" />

describe('Comparison', () => {
  beforeEach(function () {
    cy.server();
    cy.fixture("viewerLoadConfigDefault").as('viewerLoadConfigDefault');
    cy.fixture("comparisonLoadConfigDefault").as('comparisonLoadConfigDefault');
    cy.fixture("conversionLoadConfigDefault").as('conversionLoadConfigDefault');
    cy.fixture("editorLoadConfigDefault").as('editorLoadConfigDefault');
    cy.fixture("signatureLoadConfigDefault").as('signatureLoadConfigDefault');
    cy.fixture("metadataLoadConfigDefault").as('metadataLoadConfigDefault');
    cy.fixture("loadFileTreeDefault").as('loadFileTreeDefault');
    cy.fixture("loadFileTreeSubFolder").as('loadFileTreeSubFolder');
    cy.fixture("loadDocumentDescriptionDefault").as('loadDocumentDescriptionDefault');
    cy.fixture("compareDefault").as('compareDefault');

    cy.route('http://localhost:8080/viewer/loadConfig', "@viewerLoadConfigDefault");
    cy.route('http://localhost:8080/comparison/loadConfig', "@comparisonLoadConfigDefault");
    cy.route('http://localhost:8080/conversion/loadConfig', "@conversionLoadConfigDefault");
    cy.route('http://localhost:8080/editor/loadConfig', "@editorLoadConfigDefault");
    cy.route('http://localhost:8080/signature/loadConfig', "@signatureLoadConfigDefault");
    cy.route('http://localhost:8080/metadata/loadConfig', "@metadataLoadConfigDefault");

    cy.route('POST','http://localhost:8080/comparison/loadFileTree', "@loadFileTreeDefault");
    cy.route('POST','http://localhost:8080/comparison/loadDocumentDescription', "@loadDocumentDescriptionDefault");
    cy.route('POST','http://localhost:8080/comparison/compare', "@compareDefault");
  });

  it('should see logo', () => {
    cy.visit('/comparison');
    cy.get('#gd-header-logo .text').should('have.text', 'comparison');
  });

  it('should open left file dialog when clicked on open file icon', () => {
    cy.visit('/comparison');
    cy.get('div:nth-child(1) > gd-add-file-panel > div > gd-button').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
  });

  it('should be able to close left dialog by clicking on x', () => {
    cy.visit('/comparison');
    cy.get('div:nth-child(1) > gd-add-file-panel > div > gd-button').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#gd-modal-content > div.gd-modal-header > div').click();
    cy.get('#gd-modal-content').should('not.exist');
  });

  it('should be able to see left file dialog file entries with detail', () => {
    cy.visit('/comparison');
    cy.get('div:nth-child(1) > gd-add-file-panel > div > gd-button').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > .file-description > .file-name-format > .file-name').should('have.text', 'TestWord.docx');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > .file-description > .file-name-format > .file-format').should('have.text', 'Microsoft Word');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > .file-size').should('have.text', ' 11.63 KB '); // @TODO: trim spaces around size
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-description > fa-icon').should('have.class', 'fa-file-word');
  });

    it('should open file when clicked on file in left dialog and display 5 pages', () => {
    cy.visit('/comparison');
    cy.get('div:nth-child(1) > gd-add-file-panel > div > gd-button').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3)').click();
    cy.get('.page').its('length').should('eq',5);
  });

  it('should be able to close left dialog by clicking on backdrop', () => {
    cy.visit('/comparison');
    cy.get('div:nth-child(1) > gd-add-file-panel > div > gd-button').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#modalDialog').click({force:true});
    cy.get('#gd-modal-content').should('not.exist');
  });

  it('should open right file dialog when clicked on open file icon', () => {
    cy.visit('/comparison');
    cy.get('div:nth-child(2) > gd-add-file-panel > div > gd-button').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
  });

  it('should be able to close right dialog by clicking on x', () => {
    cy.visit('/comparison');
    cy.get('div:nth-child(2) > gd-add-file-panel > div > gd-button').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#gd-modal-content > div.gd-modal-header > div').click();
    cy.get('#gd-modal-content').should('not.exist');
  });

  it('should be able to see right file dialog file entries with detail', () => {
    cy.visit('/comparison');
    cy.get('div:nth-child(2) > gd-add-file-panel > div > gd-button').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > .file-description > .file-name-format > .file-name').should('have.text', 'TestWord.docx');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > .file-description > .file-name-format > .file-format').should('have.text', 'Microsoft Word');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > .file-size').should('have.text', ' 11.63 KB '); // @TODO: trim spaces around size
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-description > fa-icon').should('have.class', 'fa-file-word');
  });

  it('should open file when clicked on file in right dialog and display 5 pages', () => {
    cy.visit('/comparison');
    cy.get('div:nth-child(2) > gd-add-file-panel > div > gd-button').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3)').click();
    cy.get('.page').its('length').should('eq',5);
  });

  it('should be able to close right dialog by clicking on backdrop', () => {
    cy.visit('/comparison');
    cy.get('div:nth-child(2) > gd-add-file-panel > div > gd-button').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#modalDialog').click({force:true});
    cy.get('#gd-modal-content').should('not.exist');
  });

  it('should open result document and side-panel after click on run compare button', () => {
    cy.visit('/comparison');
    cy.get('div:nth-child(1) > gd-add-file-panel > div > gd-button').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3)').click();
    cy.get('div:nth-child(2) > gd-add-file-panel > div > gd-button').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3)').click();
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('div.result-panel > gd-result-document').should('exist');
    cy.get('gd-side-panel').should('exist');
    cy.get('gd-comparison-difference').should('exist');
    cy.get('gd-difference-highlight').should('exist');
    cy.get('#tools > div > div > gd-tabs > div > gd-tab:nth-child(2) > div').should('have.class', 'gd-tab active');
    cy.get('#tools > div > div > gd-tabs > div > gd-tab:nth-child(1) > div').click();
    cy.get('gd-side-panel').should('not.exist');
  });
});
