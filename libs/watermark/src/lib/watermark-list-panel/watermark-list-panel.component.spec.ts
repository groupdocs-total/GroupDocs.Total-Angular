import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermarkListPanelComponent } from './watermark-list-panel.component';

describe('WatermarkListPanelComponent', () => {
  let component: WatermarkListPanelComponent;
  let fixture: ComponentFixture<WatermarkListPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatermarkListPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermarkListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
