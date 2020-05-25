import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermarkAppComponent } from './watermark-app.component';

describe('WatermarkAppComponent', () => {
  let component: WatermarkAppComponent;
  let fixture: ComponentFixture<WatermarkAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatermarkAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermarkAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
