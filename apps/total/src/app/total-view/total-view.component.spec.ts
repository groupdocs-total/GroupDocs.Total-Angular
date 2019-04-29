import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalViewComponent } from './total-view.component';

describe('TotalViewComponent', () => {
  let component: TotalViewComponent;
  let fixture: ComponentFixture<TotalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
