import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signature } from './signature.component';

describe('Signature', () => {
  let component: Signature;
  let fixture: ComponentFixture<Signature>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signature ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
