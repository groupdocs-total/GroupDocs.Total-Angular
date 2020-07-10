

describe('total-angular', () => {

  it('should display welcome message', () => {
    cy.server();
    cy.route('http://localhost:8080/viewer/loadConfig', {"pageSelector":true,"download":true,"upload":true,"print":true,"browse":true,"rewrite":true,"enableRightClick":true,"filesDirectory":"/fonts","fontsDirectory":"","preloadPageCount":0,"zoom":true,"search":true,"thumbnails":true,"rotate":true,"defaultDocument":"","htmlMode":true,"cache":true,"saveRotateState":true,"watermarkText":"","printAllowed":true});
    cy.route('http://localhost:8080/comparison/loadConfig', {"pageSelector":true,"download":true,"upload":true,"print":true,"browse":true,"rewrite":true,"enableRightClick":true,"filesDirectory":"/fonts","resultDirectory":"/Temp","preloadResultPageCount":2});
    cy.route('http://localhost:8080/conversion/loadConfig', {"pageSelector":true,"download":true,"upload":true,"print":true,"browse":true,"rewrite":true,"enableRightClick":true,"filesDirectory":"/fonts","resultDirectory":"/Converted"});
    cy.route('http://localhost:8080/editor/loadConfig', {"pageSelector":true,"download":true,"upload":true,"print":true,"browse":true,"rewrite":true,"enableRightClick":true,"filesDirectory":"/fonts","fontsDirectory":"","defaultDocument":"","createNewFile":true});
    cy.route('http://localhost:8080/signature/loadConfig', {"filesDirectory": "/fonts", "dataDirectory": "", "textSignature": true, "imageSignature": true, "digitalSignature": true, "qrCodeSignature": true, "barCodeSignature": true, "stampSignature": true, "handSignature": true, "downloadOriginal": true, "downloadSigned": true, "preloadPageCount": 0, "defaultDocument": "", "pageSelector": true, "download": true, "upload": true, "print": true, "browse": true, "rewrite": true, "enableRightClick": true});
    cy.route('http://localhost:8080/annotation/loadConfig', {"filesDirectory": "/fonts", "dataDirectory": "", "textAnnotation": true, "areaAnnotation": true, "pointAnnotation": true, "textStrikeoutAnnotation": true, "polylineAnnotation": true, "textFieldAnnotation": true, "watermarkAnnotation": true, "textReplacementAnnotation": true, "arrowAnnotation": true, "textRedactionAnnotation": true, "resourcesRedactionAnnotation": true, "textUnderlineAnnotation": true, "distanceAnnotation": true, "downloadOriginal": true, "downloadAnnotated": true, "zoom": true, "fitWidth": true, "preloadPageCount": 0, "defaultDocument": "", "pageSelector": true, "download": true, "upload": true, "print": true, "browse": true, "rewrite": true, "enableRightClick": true});
    cy.route('http://localhost:8080/metadata/loadConfig', {"download":true,"upload":true,"browse":true,"rewrite":true,"filesDirectory":"/fonts","preloadPageCount":0,"defaultDocument":"","htmlMode":true,"cache":true});
    cy.route('http://localhost:8080/search/loadConfig', {"upload":true,"browse":true,"filesDirectory":"/files","defaultDocument":""});
    cy.route('http://localhost:8080/watermark/loadConfig', {"filesDirectory": "/fonts", "dataDirectory": "", "textWatermark": true, "imageWatermark": true, "preloadPageCount": 0, "defaultDocument": "", "upload": true, "browse": true, "rewrite": true});

    cy.visit('/',{
      onBeforeLoad: (win) => {
        win.fetch = null
      }
    });
    cy.get('.wrapper .header h2').should('have.text', 'GroupDocs.Total Angular Example');
  });

});
