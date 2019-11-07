import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelDocumentComponent } from './excel-document.component';

describe('ExcelDocumentComponent', () => {
  let component: ExcelDocumentComponent;
  let fixture: ComponentFixture<ExcelDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
