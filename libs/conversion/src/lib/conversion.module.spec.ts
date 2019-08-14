import { async, TestBed } from '@angular/core/testing';
import { ConverisonModule } from './conversion.module';

describe('ConverisonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConverisonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ConverisonModule).toBeDefined();
  });
});
