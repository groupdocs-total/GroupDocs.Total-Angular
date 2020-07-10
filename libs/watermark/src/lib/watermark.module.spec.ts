import { async, TestBed } from '@angular/core/testing';
import { WatermarkModule } from './watermark.module';

describe('WatermarkModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WatermarkModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WatermarkModule).toBeDefined();
  });
});
