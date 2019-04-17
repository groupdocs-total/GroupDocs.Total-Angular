import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceButtonComponent } from './choice-button.component';

describe('ChoiceButtonComponent', () => {
  let component: ChoiceButtonComponent;
  let fixture: ComponentFixture<ChoiceButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
