import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampModalComponent } from './stamp-modal.component';

describe('StampModalComponent', () => {
  let component: StampModalComponent;
  let fixture: ComponentFixture<StampModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
