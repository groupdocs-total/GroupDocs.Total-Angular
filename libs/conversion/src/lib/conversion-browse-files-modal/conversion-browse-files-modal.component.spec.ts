import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConversionBrowseFilesModalComponent } from './conversion-browse-files-modal.component';
import { UploadFilesService, ModalService, ConfigService } from '@groupdocs.examples.angular/common-components';
import { ConversionService } from '../conversion.service';
import { HttpClientModule } from '@angular/common/http';

describe('ConversionBrowseFilesModalComponent', () => {
  let component: ConversionBrowseFilesModalComponent;
  let fixture: ComponentFixture<ConversionBrowseFilesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionBrowseFilesModalComponent ],
      imports: [ HttpClientModule ],
      providers: [ UploadFilesService, ConversionService, ModalService, ConfigService ],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
