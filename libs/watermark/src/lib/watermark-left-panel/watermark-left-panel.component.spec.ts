import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermarkLeftPanelComponent } from './watermark-left-panel.component';

describe('WatermarkLeftPanelComponent', () => {
  let component: WatermarkLeftPanelComponent;
  let fixture: ComponentFixture<WatermarkLeftPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatermarkLeftPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermarkLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
