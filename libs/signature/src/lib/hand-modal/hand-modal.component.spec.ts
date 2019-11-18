import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandModalComponent } from './hand-modal.component';

describe('HandModalComponent', () => {
  let component: HandModalComponent;
  let fixture: ComponentFixture<HandModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
