import { async, TestBed } from '@angular/core/testing';
import { ViewerModule } from './viewer.module';

describe('ViewerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ViewerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ViewerModule).toBeDefined();
  });
});
