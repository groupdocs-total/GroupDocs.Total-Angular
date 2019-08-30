import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampLightboxComponent } from './stamp-lightbox.component';

describe('StampLightboxComponent', () => {
  let component: StampLightboxComponent;
  let fixture: ComponentFixture<StampLightboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampLightboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
