import { async, TestBed } from '@angular/core/testing';
import { ConversionModule } from './conversion.module';

describe('ConversionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConversionModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ConversionModule).toBeDefined();
  });
});
