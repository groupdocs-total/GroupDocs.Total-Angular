import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadWatermarkComponent } from './upload-watermark.component';

describe('UploadWatermarkComponent', () => {
  let component: UploadWatermarkComponent;
  let fixture: ComponentFixture<UploadWatermarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadWatermarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadWatermarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
