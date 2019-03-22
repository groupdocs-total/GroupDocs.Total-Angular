import { async, TestBed } from '@angular/core/testing';
import { CommonComponentsModule } from './common-components.module';

describe('CommonComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonComponentsModule).toBeDefined();
  });
});
