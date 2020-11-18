/// <reference types="Cypress" />

describe('Signature', () => {
  beforeEach(function () {
    cy.server();
    cy.fixture("viewerLoadConfigDefault").as('viewerLoadConfigDefault');
    cy.fixture("comparisonLoadConfigDefault").as('comparisonLoadConfigDefault');
    cy.fixture("conversionLoadConfigDefault").as('conversionLoadConfigDefault');
    cy.fixture("editorLoadConfigDefault").as('editorLoadConfigDefault');
    cy.fixture("signatureLoadConfigDefault").as('signatureLoadConfigDefault');
    cy.fixture("annotationLoadConfigDefault").as('annotationLoadConfigDefault');
    cy.fixture("metadataLoadConfigDefault").as('metadataLoadConfigDefault');
    cy.fixture("searchLoadConfigDefault").as('searchLoadConfigDefault');
    cy.fixture("loadFileTreeDefault").as('loadFileTreeDefault');
    cy.fixture("loadFileTreeSubFolder").as('loadFileTreeSubFolder');
    cy.fixture("loadDocumentDescriptionDefault").as('loadDocumentDescriptionDefault');

    cy.route('http://localhost:8080/viewer/loadConfig', "@viewerLoadConfigDefault");
    cy.route('http://localhost:8080/comparison/loadConfig', "@comparisonLoadConfigDefault");
    cy.route('http://localhost:8080/conversion/loadConfig', "@conversionLoadConfigDefault");
    cy.route('http://localhost:8080/editor/loadConfig', "@editorLoadConfigDefault");
    cy.route('http://localhost:8080/signature/loadConfig', "@signatureLoadConfigDefault");
    cy.route('http://localhost:8080/annotation/loadConfig', "@annotationLoadConfigDefault");
    cy.route('http://localhost:8080/metadata/loadConfig', "@metadataLoadConfigDefault");
    cy.route('http://localhost:8080/search/loadConfig', "@searchLoadConfigDefault");

    cy.route('POST','http://localhost:8080/signature/loadFileTree', "@loadFileTreeDefault");
    cy.route('POST','http://localhost:8080/signature/loadDocumentDescription', "@loadDocumentDescriptionDefault");

  });

  it('should see logo', () => {
    cy.visit('/signature');
    cy.get('#gd-header-logo .text').should('have.text', 'signature');
  });

  it('should open file dialog when clicked on open file icon', () => {
    cy.visit('/signature');
    cy.get('#files-tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
  });

  it('should be able to close dialog by clicking on x', () => {
    cy.visit('/signature');
    cy.get('#files-tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#gd-modal-content > div.gd-modal-header > div').click();
    cy.get('#gd-modal-content').should('not.exist');
  });

  it('should be able to close dialog by clicking on backdrop', () => {
    cy.visit('/signature');
    cy.get('#files-tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#modalDialog').click({force:true});
    cy.get('#gd-modal-content').should('not.exist');
  });

  it('should be able to see file dialog file entries with detail', () => {
    cy.visit('/signature');
    cy.get('#files-tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get(':nth-child(3) > .file-description > .file-name-format > .file-name').should('have.text', 'TestWord.docx');
    cy.get(':nth-child(3) > .file-description > .file-name-format > .file-format').should('have.text', 'Microsoft Word');
    cy.get(':nth-child(3) > .file-size').should('have.text', ' 11.63 KB '); // @TODO: trim spaces around size
    cy.get(':nth-child(3) > div.file-description > fa-icon').should('have.class', 'fa-file-word');
  });

  it('should be able to open sub folder', () => {
    cy.visit('/signature');
    cy.get('#files-tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');

    cy.route('POST','http://localhost:8080/signature/loadFileTree',"@loadFileTreeSubFolder");
    cy.get('#gd-modal-filebrowser > div > div:nth-child(2)').click();
    cy.get('#gd-modal-filebrowser > div > div:nth-child(2) > div.file-description > div > div.file-name').should('have.text', 'FileInSubFolder.docx');
    cy.get('#gd-modal-filebrowser > div > div:nth-child(2) > div.file-description > div > div.file-format').should('have.text', 'Microsoft Word');
    cy.get('#gd-modal-filebrowser > div > div:nth-child(2) > div.file-size').should('have.text', ' 11.63 KB '); // @TODO: trim spaces around size
    cy.get('#gd-modal-filebrowser > div > div:nth-child(2) > div.file-description > fa-icon').should('have.class', 'fa-file-word');
  });

  it('when drag file over file dialog drop zone style changed', () => {
    cy.visit('/signature');
    cy.get('#files-tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');

    cy.get('.gd-modal-body').trigger('dragover');
    cy.get('.gd-modal-body').trigger('dragenter');
    cy.get('.gd-dnd-wrap').should('be.visible');
    cy.get('.gd-modal-body').trigger('dragleave');
    cy.get('.gd-dnd-wrap').should('not.exist');
  });

  it('should open file when clicked on file in dialog and display 5 pages', () => {
    cy.visit('/signature');
    cy.get('#files-tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3)').click();
    cy.get('.page').its('length').should('eq',5);
  });


});
