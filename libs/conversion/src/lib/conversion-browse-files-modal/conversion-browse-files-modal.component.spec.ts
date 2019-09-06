import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConversionBrowseFilesModalComponent } from './conversion-browse-files-modal.component';
import { UploadFilesService, ModalService, ConfigService } from '@groupdocs.examples.angular/common-components';
import { ConversionService } from '../conversion.service';
import { HttpClientModule } from '@angular/common/http';
import { ExtendedFileModel } from '../models';

describe('ConversionBrowseFilesModalComponent', () => {
  let component: ConversionBrowseFilesModalComponent;
  let fixture: ComponentFixture<ConversionBrowseFilesModalComponent>;
  let conversionServiceStub: Partial<ConversionService>;
  let modalServiceStub: Partial<ModalService>;
  let selectItemsSpy: any;
  let closeSpy: any;

  beforeEach(async(() => {
    conversionServiceStub = {
      selectItems() {}
    };

    modalServiceStub = {
      close() {}
    };

    selectItemsSpy = spyOn(conversionServiceStub, 'selectItems');
    closeSpy = spyOn(modalServiceStub, 'close');

    TestBed.configureTestingModule({
      declarations: [ ConversionBrowseFilesModalComponent ],
      imports: [ HttpClientModule ],
      providers: [
        UploadFilesService,
        {provide: ConversionService, useValue: conversionServiceStub },
        {provide: ModalService, useValue: modalServiceStub },
        ConfigService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionBrowseFilesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call ConversionService passing single item and close the modal', () => {
    const filesStub = new Array<ExtendedFileModel>();
    
    filesStub.push({
      conversionTypes: null,
      selected: true,
      directory: false,
      isDirectory: false,
      guid: "stubFile.xls"
    } as ExtendedFileModel);
    component.files = filesStub;

    const selectedFile = {selected: false} as ExtendedFileModel;
    const selectedFormat = {value: "docx"};
    
    component.selectFormat(selectedFormat, selectedFile);
    
    expect(selectItemsSpy.calls.count())
      .toBe(1, 'selectItmes method was called once');
    expect((selectItemsSpy.calls.first().args[0])[0].destinationFileName)
      .toBe("stubFile.docx", 'selectItems method was called with correct destinationFileName');
    expect(closeSpy.calls.count())
      .toBe(1, 'close method was called once');
  });

  it('should call ConversionService passing multiple items and close the modal', () => {
    const filesStub = new Array<ExtendedFileModel>();
    
    filesStub.push({
      conversionTypes: null,
      selected: true,
      directory: false,
      isDirectory: false,
      guid: "stubFile.xls"
    } as ExtendedFileModel);
    filesStub.push({
      conversionTypes: null,
      selected: true,
      directory: false,
      isDirectory: false,
      guid: "stubFile2.xls"
    } as ExtendedFileModel);
    
    component.files = filesStub;

    const selectedFormat = {value: "docx"};
    
    component.selectFormat(selectedFormat, null);
    
    expect(selectItemsSpy.calls.count())
      .toBe(1, 'selectItmes method was called once');
    expect(selectItemsSpy.calls.first().args[0].length)
      .toBe(2, 'selectItems method was called with correct amount of items');
    expect((selectItemsSpy.calls.first().args[0])[1].destinationFileName)
      .toBe("stubFile2.docx", 'selectItems method was called with correct destinationFileName');
    expect(closeSpy.calls.count())
      .toBe(1, 'close method was called once');
  });
});
