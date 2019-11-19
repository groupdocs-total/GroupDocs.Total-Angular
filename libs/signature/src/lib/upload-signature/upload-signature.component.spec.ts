import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSignatureComponent } from './upload-signature.component';

describe('UploadSignatureComponent', () => {
  let component: UploadSignatureComponent;
  let fixture: ComponentFixture<UploadSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
