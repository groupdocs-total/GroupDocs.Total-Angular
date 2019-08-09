import { async, TestBed } from '@angular/core/testing';
import { ComparisonModule } from './comparison.module';

describe('ComparisonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComparisonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComparisonModule).toBeDefined();
  });
});
