import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOptionsPanelComponent } from './search-options-panel.component';

describe('SearchOptionsComponent', () => {
  let component: SearchOptionsPanelComponent;
  let fixture: ComponentFixture<SearchOptionsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOptionsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOptionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
