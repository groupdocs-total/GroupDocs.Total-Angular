import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDocumentComponent } from './result-document.component';

describe('ResultDocumentComponent', () => {
  let component: ResultDocumentComponent;
  let fixture: ComponentFixture<ResultDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
