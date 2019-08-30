

describe('total-angular', () => {


  it('should display welcome message', () => {
    cy.server();
    cy.route('http://localhost:8080/viewer/loadConfig', {"pageSelector":true,"download":true,"upload":true,"print":true,"browse":true,"rewrite":true,"enableRightClick":true,"filesDirectory":"/fonts","fontsDirectory":"","preloadPageCount":0,"zoom":true,"search":true,"thumbnails":true,"rotate":true,"defaultDocument":"","htmlMode":true,"cache":true,"saveRotateState":true,"watermarkText":"","printAllowed":true});
    cy.route('http://localhost:8080/comparison/loadConfig', {"pageSelector":true,"download":true,"upload":true,"print":true,"browse":true,"rewrite":true,"enableRightClick":true,"filesDirectory":"/fonts","resultDirectory":"/Temp","preloadResultPageCount":2});
    cy.route('http://localhost:8080/conversion/loadConfig', {"pageSelector":true,"download":true,"upload":true,"print":true,"browse":true,"rewrite":true,"enableRightClick":true,"filesDirectory":"/fonts","resultDirectory":"/Converted"});
    cy.route('http://localhost:8080/editor/loadConfig', {"pageSelector":true,"download":true,"upload":true,"print":true,"browse":true,"rewrite":true,"enableRightClick":true,"filesDirectory":"/fonts","fontsDirectory":"","defaultDocument":"","createNewFile":true});

    cy.visit('/',{
      onBeforeLoad: (win) => {
        win.fetch = null
      }
    });
    cy.get('.wrapper .header h2').should('have.text', 'GroupDocs.Total Angular Example');
  });

});
