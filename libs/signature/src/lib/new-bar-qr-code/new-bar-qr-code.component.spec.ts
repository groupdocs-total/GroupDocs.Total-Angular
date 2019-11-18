import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBarQrCodeComponent } from './new-bar-qr-code.component';

describe('NewBarQrCodeComponent', () => {
  let component: NewBarQrCodeComponent;
  let fixture: ComponentFixture<NewBarQrCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBarQrCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBarQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
