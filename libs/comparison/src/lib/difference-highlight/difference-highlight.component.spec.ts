import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenceHighlightComponent } from './difference-highlight.component';

describe('DifferenceComponent', () => {
  let component: DifferenceHighlightComponent;
  let fixture: ComponentFixture<DifferenceHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferenceHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferenceHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
