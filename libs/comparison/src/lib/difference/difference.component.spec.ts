import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenceComponent } from './difference.component';

describe('DifferenceComponent', () => {
  let component: DifferenceComponent;
  let fixture: ComponentFixture<DifferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
