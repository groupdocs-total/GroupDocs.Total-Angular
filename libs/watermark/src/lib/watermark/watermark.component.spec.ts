import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermarkComponent } from './watermark.component';

describe('WatermarkComponent', () => {
  let component: WatermarkComponent;
  let fixture: ComponentFixture<WatermarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatermarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
