import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPropertiesPanelComponent } from './index-properties-panel.component';

describe('IndexPropertiesPanelComponent', () => {
  let component: IndexPropertiesPanelComponent;
  let fixture: ComponentFixture<IndexPropertiesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPropertiesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPropertiesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
