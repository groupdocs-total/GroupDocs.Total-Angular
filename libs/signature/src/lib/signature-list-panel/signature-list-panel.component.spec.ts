import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureListPanelComponent } from './signature-list-panel.component';

describe('SignatureListPanelComponent', () => {
  let component: SignatureListPanelComponent;
  let fixture: ComponentFixture<SignatureListPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureListPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
