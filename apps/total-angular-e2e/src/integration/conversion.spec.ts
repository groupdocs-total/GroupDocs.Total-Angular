/// <reference types="Cypress" />

describe('Conversion', () => {
  beforeEach(function () {
    cy.server();
    cy.fixture("viewerLoadConfigDefault").as('viewerLoadConfigDefault');
    cy.fixture("comparisonLoadConfigDefault").as('comparisonLoadConfigDefault');
    cy.fixture("conversionLoadConfigDefault").as('conversionLoadConfigDefault');
    cy.fixture("editorLoadConfigDefault").as('editorLoadConfigDefault');
    cy.fixture("loadFileTreeDefault").as('loadFileTreeDefault');
    cy.fixture("loadFileTreeSubFolder").as('loadFileTreeSubFolder');

    cy.route('http://localhost:8080/viewer/loadConfig', "@viewerLoadConfigDefault");
    cy.route('http://localhost:8080/comparison/loadConfig', "@comparisonLoadConfigDefault");
    cy.route('http://localhost:8080/conversion/loadConfig', "@conversionLoadConfigDefault");
    cy.route('http://localhost:8080/editor/loadConfig', "@editorLoadConfigDefault");

    cy.route('POST','http://localhost:8080/conversion/loadFileTree', "@loadFileTreeDefault");
  });

  it('should see logo', () => {
    cy.visit('/conversion');
    cy.get('#gd-header-logo .text').should('have.text', 'conversion');
  });

  it('should open file dialog when clicked on open file icon', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
  });

  it('should be able to close dialog by clicking on x', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#gd-modal-content > div.gd-modal-header > div').click();
    cy.get('#gd-modal-content').should('not.exist');
  });

  it('should be able to close dialog by clicking on backdrop', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#modalDialog').click({force:true});
    cy.get('#gd-modal-content').should('not.exist');
  });

  it('should be able to see file dialog file entries with detail', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-description > div > div.file-name').should('have.text', 'TestWord.docx');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-description > div > div.file-format').should('have.text', 'Microsoft Word');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-size').should('have.text', '11.63 KB');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-description > fa-icon').should('have.class', 'fa-file-word');
  });

  it('should be able to open sub folder', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');

    cy.route('POST','http://localhost:8080/conversion/loadFileTree',"@loadFileTreeSubFolder");
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(2)').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(2) > div.file-description > div > div.file-name').should('have.text', 'FileInSubFolder.docx');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(2) > div.file-description > div > div.file-format').should('have.text', 'Microsoft Word');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(2) > div.file-size').should('have.text', '11.63 KB');
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(2) > div.file-description > fa-icon').should('have.class', 'fa-file-word');
  });

  it('when drag file over file dialog drop zone style changed', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');

    cy.get('#gd-browse-section').trigger('dragover');
    cy.get('.gd-dnd-wrap').should('be.visible');
    cy.get('#gd-browse-section').trigger('dragleave');
    cy.get('.gd-dnd-wrap').should('not.exist');
  });

  it('should open drop-down with formats when clicked on a plus button in dialog and display formats', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-format-select > gd-drop-down').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-format-select > gd-drop-down > div > gd-drop-down-items > div > gd-drop-down-item').its('length').should('eq',3);
  });

  it('should show conversion item with correct data when clicked on a selected format', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-format-select > gd-drop-down').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-format-select > gd-drop-down > div > gd-drop-down-items > div > gd-drop-down-item:nth-child(1)').click();
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item').should('exist');
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item > div > div.gd-filequeue-name.disabled.gd-destination-file > div').should('contain', 'TestWord.xls');
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item > div > div.gd-filequeue-name.disabled.gd-destination-file > div > div').should('have.text', 'Microsoft Excel');
  });
});
