import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureTabComponent } from './signature-tab.component';

describe('SignatureTabComponent', () => {
  let component: SignatureTabComponent;
  let fixture: ComponentFixture<SignatureTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
