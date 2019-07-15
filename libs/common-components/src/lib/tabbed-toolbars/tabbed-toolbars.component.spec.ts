import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedToolbarsComponent } from './tabbed-toolbars.component';

describe('TabbedToolbarsComponent', () => {
  let component: TabbedToolbarsComponent;
  let fixture: ComponentFixture<TabbedToolbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedToolbarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedToolbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
