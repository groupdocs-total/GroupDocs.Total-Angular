import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareDocumentComponent } from './prepare-document.component';

describe('PrepareDocumentComponent', () => {
  let component: PrepareDocumentComponent;
  let fixture: ComponentFixture<PrepareDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
