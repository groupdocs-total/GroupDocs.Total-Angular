/// <reference types="Cypress" />

describe('Search', () => {
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
      cy.fixture("searchDefault").as('searchDefault');
  
      cy.route('http://localhost:8080/viewer/loadConfig', "@viewerLoadConfigDefault");
      cy.route('http://localhost:8080/comparison/loadConfig', "@comparisonLoadConfigDefault");
      cy.route('http://localhost:8080/conversion/loadConfig', "@conversionLoadConfigDefault");
      cy.route('http://localhost:8080/editor/loadConfig', "@editorLoadConfigDefault");
      cy.route('http://localhost:8080/signature/loadConfig', "@signatureLoadConfigDefault");
      cy.route('http://localhost:8080/annotation/loadConfig', "@annotationLoadConfigDefault");
      cy.route('http://localhost:8080/metadata/loadConfig', "@metadataLoadConfigDefault");
      cy.route('http://localhost:8080/search/loadConfig', "@searchLoadConfigDefault");
  
      cy.route('POST','http://localhost:8080/search/loadFileTree', "@loadFileTreeDefault");
      cy.route('POST','http://localhost:8080/search/search', "@searchDefault");
    });

    it('should see logo', () => {
      cy.visit('/search');
      cy.get('#gd-header-logo .text').should('have.text', 'search');
    });

    it('should be able to see index properties and search options', () => {
      cy.visit('/search');
      cy.wait(300);
      cy.get('.gd-search-options-panel').should('be.visible');
      cy.get('.gd-index-properties-panel').should('be.visible');
    })

    it('should be able to see search panel and search options panel', () => {
        cy.visit('/search');
        cy.wait(300);
        cy.get('.gd-search-panel').should('be.visible');
        cy.get('.gd-search-options-panel').should('be.visible');
    })

    it('should open file dialog when clicked on open file icon', () => {
      cy.visit('/search');
      cy.get('#tools > gd-button:nth-child(1)').click();
      cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
    });

    it('should be able to close dialog by clicking on x', () => {
      cy.visit('/search');
      cy.get('#tools > gd-button:nth-child(1)').click();
      cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
      cy.get('#gd-modal-content > div.gd-modal-header > div').click();
      cy.get('#gd-modal-content').should('not.exist');
    });

    it('should be able to close dialog by clicking on backdrop', () => {
      cy.visit('/search');
      cy.get('#tools > gd-button:nth-child(1)').click();
      cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
      cy.get('#modalDialog').click({force:true});
      cy.get('#gd-modal-content').should('not.exist');
    });

    it('should be able to see file dialog file entries with detail', () => {
      cy.visit('/search');
      cy.get('#tools > gd-button:nth-child(1)').click();
      cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
      cy.get(':nth-child(3) > .file-description > .file-name-format > .file-name').should('have.text', 'TestWord.docx');
      cy.get(':nth-child(3) > .file-description > .file-name-format > .file-format').should('have.text', 'Microsoft Word');
      cy.get(':nth-child(3) > .file-size').should('have.text', '11.63 KB');
      cy.get(':nth-child(3) > div.file-description > fa-icon').should('have.class', 'fa-file-word');
    });

    it('when drag file over file dialog drop zone style changed', () => {
      cy.visit('/search');
      cy.get('#tools > gd-button:nth-child(1)').click();
      cy.get('#gd-modal-content > div.gd-modal-header > h4').should('have.text', 'Open document');
  
      cy.get('.gd-modal-body').trigger('dragover');
      cy.get('.gd-modal-body').trigger('dragenter');
      cy.get('.gd-dnd-wrap').should('be.visible');
      cy.get('.gd-modal-body').trigger('dragleave');
      cy.get('.gd-dnd-wrap').should('not.exist');
    });

    it('should send search request and show found files with found phrases', () => {
        cy.visit('/search');
        cy.get('.gd-search-input').type('text');
        cy.get('.gd-search-btn > .button').click();
        cy.wait(300);
        cy.get('.gd-search-result-summary-status').should('be.visible');
        cy.get('.gd-search-result-summary-header').should('be.visible');
        cy.get('.gd-search-result-summary-body').should('be.visible');
        cy.get('.gd-search-result-item').its('length').should('eq', 3);
        cy.get(':nth-child(2) > gd-search-result-item > .gd-search-result-item > .gd-file-occurrences > .gd-search-result-occurrences').click();
        cy.get('.gd-found-phrases-content-wrapper').should('be.visible');
        cy.get('.gd-search-result-phrase').its('length').should('eq', 4);
        cy.get('.gd-close-btn').click();
        cy.get('.gd-found-phrases-content-wrapper').should('not.be.visible');
    });
  });
  