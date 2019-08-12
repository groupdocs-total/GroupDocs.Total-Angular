import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilePanelComponent } from './upload-file-panel.component';

describe('UploadFilePanelComponent', () => {
  let component: UploadFilePanelComponent;
  let fixture: ComponentFixture<UploadFilePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFilePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
