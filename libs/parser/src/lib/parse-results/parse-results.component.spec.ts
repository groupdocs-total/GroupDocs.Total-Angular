import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseResultsComponent } from './parse-results.component';

describe('ParseResultsComponent', () => {
  let component: ParseResultsComponent;
  let fixture: ComponentFixture<ParseResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParseResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
