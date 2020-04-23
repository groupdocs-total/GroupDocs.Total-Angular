import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureLeftPanelComponent } from './signature-left-panel.component';

describe('SignatureLeftPanelComponent', () => {
  let component: SignatureLeftPanelComponent;
  let fixture: ComponentFixture<SignatureLeftPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureLeftPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
