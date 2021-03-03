import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightDocumentComponent } from './highlight-document.component';

describe('HighlightDocumentComponent', () => {
  let component: HighlightDocumentComponent;
  let fixture: ComponentFixture<HighlightDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
