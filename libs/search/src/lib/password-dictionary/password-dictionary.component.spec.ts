import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDictionaryComponent } from './password-dictionary.component';

describe('PasswordDictionaryComponent', () => {
  let component: PasswordDictionaryComponent;
  let fixture: ComponentFixture<PasswordDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
