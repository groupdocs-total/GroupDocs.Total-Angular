/// <reference types="Cypress" />

describe('Conversion', () => {
  beforeEach(function () {
    cy.server();
    cy.fixture("viewerLoadConfigDefault").as('viewerLoadConfigDefault');
    cy.fixture("comparisonLoadConfigDefault").as('comparisonLoadConfigDefault');
    cy.fixture("conversionLoadConfigDefault").as('conversionLoadConfigDefault');
    cy.fixture("editorLoadConfigDefault").as('editorLoadConfigDefault');
    cy.fixture("signatureLoadConfigDefault").as('signatureLoadConfigDefault');
    cy.fixture("loadFileTreeDefault").as('loadFileTreeDefault');
    cy.fixture("loadFileTreeSubFolder").as('loadFileTreeSubFolder');
    cy.fixture("convertDefault").as('convertDefault');
    cy.fixture("uploadDocumentDefault").as('uploadDocumentDefault');

    cy.route('http://localhost:8080/viewer/loadConfig', "@viewerLoadConfigDefault");
    cy.route('http://localhost:8080/comparison/loadConfig', "@comparisonLoadConfigDefault");
    cy.route('http://localhost:8080/conversion/loadConfig', "@conversionLoadConfigDefault");
    cy.route('http://localhost:8080/editor/loadConfig', "@editorLoadConfigDefault");
    cy.route('http://localhost:8080/signature/loadConfig', "@signatureLoadConfigDefault");

    cy.route('POST','http://localhost:8080/conversion/loadFileTree', "@loadFileTreeDefault");
    cy.route('POST','http://localhost:8080/conversion/convert', "@convertDefault");
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

    cy.get('.gd-modal-body').trigger('dragover');
    cy.get('.gd-modal-body').trigger('dragenter');
    cy.get('.gd-dnd-wrap').should('be.visible');
    cy.get('.gd-modal-body').trigger('dragleave');
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

  it('should show change convert icon to download after successful single item converting', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-format-select > gd-drop-down').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-format-select > gd-drop-down > div > gd-drop-down-items > div > gd-drop-down-item:nth-child(1)').click();
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item > div > div:nth-child(6) > fa-icon').click();
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item > div > div.gd-convert-status > fa-icon.gd-conversion-complete.ng-fa-icon').should('be.visible');
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item > div > div.gd-download-single').should('be.visible');
  });

  it('should open drop-down with formats when selected multiple files in dialog and display formats', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(4) > div.gd-file-checkbox > input').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.gd-file-checkbox > input').click();
    cy.get('.context-actions > :nth-child(1) > .drop-down > gd-drop-down-toggle > gd-button > .button').click();
    // TODO: check possible issue - not all available formats in the drop-down
    cy.get(':nth-child(3) > .drop-down-item > .gd-type-warning > .ng-fa-icon').should('be.visible');
  });

  it('should show right amount of conversion items with correct data when clicked on a selected format', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(4) > div.gd-file-checkbox > input').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.gd-file-checkbox > input').click();
    cy.get('.context-actions > :nth-child(1) > .drop-down > gd-drop-down-toggle > gd-button > .button').click();
    cy.get(':nth-child(2) > .drop-down-item > .gd-type-warning > .ng-fa-icon').should('be.visible');
    cy.get('.show > .drop-down > gd-drop-down-items > .drop-down-items > :nth-child(2) > .drop-down-item').click();
    cy.get('#gd-convert-queue gd-conversion-item').its('length').should('eq', 2);
    cy.get('.gd-modal-title').should('have.text', 'Imposible conversions');
    cy.get('.gd-modal-close > span').click();
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item > div > div.gd-filequeue-name.disabled.gd-destination-file > div').should('contain', 'TestWord.html');
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item > div > div.gd-filequeue-name.disabled.gd-destination-file > div > div').should('have.text', 'HyperText Markup Language');
    cy.get('#gd-convert-queue > div:nth-child(3) > gd-conversion-item > div > div.gd-filequeue-name.disabled.gd-destination-file > div').should('contain', 'TestPDF.html');
    cy.get('#gd-convert-queue > div:nth-child(3) > gd-conversion-item > div > div.gd-filequeue-name.disabled.gd-destination-file > div > div').should('have.text', 'HyperText Markup Language');
  });

  it('should show correct icons for all conversion items after click on convert-all button', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(4) > div.gd-file-checkbox > input').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.gd-file-checkbox > input').click();
    cy.get('.context-actions > :nth-child(1) > .drop-down > gd-drop-down-toggle > gd-button > .button').click();
    cy.get('.show > .drop-down > gd-drop-down-items > .drop-down-items > :nth-child(1) > .drop-down-item').click();
    cy.get('#tools > gd-button:nth-child(2) > div').click();
    cy.get('#gd-convert-queue gd-conversion-item > div > div.gd-convert-status > fa-icon.gd-conversion-complete.ng-fa-icon').its('length').should('eq', 2);
    cy.get('#gd-convert-queue gd-conversion-item > div > div.gd-download-single').its('length').should('eq', 2);
  });

  it('should show correctly remove items from conversion queue through the x button', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(4) > div.gd-file-checkbox > input').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.gd-file-checkbox > input').click();
    cy.get('.context-actions > :nth-child(1) > .drop-down > gd-drop-down-toggle > gd-button > .button').click();
    cy.get('.show > .drop-down > gd-drop-down-items > .drop-down-items > :nth-child(1) > .drop-down-item').click();
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item > div > div.gd-convert-remove > span').click();
    cy.get('#gd-convert-queue gd-conversion-item').its('length').should('eq', 1);
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item > div > div.gd-convert-remove > span').click();
    cy.get('body > gd-total > div > gd-conversion > div > gd-init-state > div').should('be.visible');
  });

  it('should open file dialog after dropping the file on init state area', function(){
    const blob = new Blob([""], { type: "text/html" });
    blob["lastModifiedDate"] = "";
    blob["name"] = "filename";
    const file = <File>blob;
    const fileList = {
      0: file,
      length: 1,
      item: (index: number) => file
    };

    this.dropEvent = {
      dataTransfer: {
        files: fileList
      }
    }

    cy.route('POST','http://localhost:8080/conversion/uploadDocument', "@uploadDocumentDefault");

    cy.visit('/conversion');
    cy.get('body > gd-total > div > gd-conversion > div > gd-init-state > div').trigger('dragover');
    cy.get('body > gd-total > div > gd-conversion > div > gd-init-state > div').trigger('dragenter', this.dropEvent);
    cy.get('body > gd-total > div > gd-conversion > div > gd-init-state > div').should('have.class', 'wrapper gd-drag-n-drop-wrap active')
      .trigger('drop', this.dropEvent);
    cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
  });

  it('should show signle conversion item if format for single file was selected even after selecting multiple files to convert', () => {
    cy.visit('/conversion');
    cy.get('#tools > gd-button:nth-child(1)').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(4) > div.gd-file-checkbox > input').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.gd-file-checkbox > input').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-format-select > gd-drop-down').click();
    cy.get('#gd-modal-filebrowser > div.list-files-body > div:nth-child(3) > div.file-format-select > gd-drop-down > div > gd-drop-down-items > div > gd-drop-down-item:nth-child(1)').click();
    cy.get('#gd-convert-queue gd-conversion-item').its('length').should('eq', 1);
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item').should('exist');
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item > div > div.gd-filequeue-name.disabled.gd-destination-file > div').should('contain', 'TestWord.xls');
    cy.get('#gd-convert-queue > div:nth-child(2) > gd-conversion-item > div > div.gd-filequeue-name.disabled.gd-destination-file > div > div').should('have.text', 'Microsoft Excel');
  });
});
