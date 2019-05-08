import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRequiredComponent } from './password-required.component';

describe('PasswordRequiredComponent', () => {
  let component: PasswordRequiredComponent;
  let fixture: ComponentFixture<PasswordRequiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordRequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
