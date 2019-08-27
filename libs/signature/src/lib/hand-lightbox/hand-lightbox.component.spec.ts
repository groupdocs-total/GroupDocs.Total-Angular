import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandLightboxComponent } from './hand-lightbox.component';

describe('HandLightboxComponent', () => {
  let component: HandLightboxComponent;
  let fixture: ComponentFixture<HandLightboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandLightboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
