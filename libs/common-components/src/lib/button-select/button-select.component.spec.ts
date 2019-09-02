import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSelectComponent } from './button-select.component';

describe('ButtonSelectComponent', () => {
  let component: ButtonSelectComponent;
  let fixture: ComponentFixture<ButtonSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
