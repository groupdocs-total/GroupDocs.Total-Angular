import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMonitorComponent } from './state-monitor.component';

describe('StateMonitorComponent', () => {
  let component: StateMonitorComponent;
  let fixture: ComponentFixture<StateMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
