import { async, TestBed } from '@angular/core/testing';
import { MetadataModule } from './metadata.module';

describe('MetadataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MetadataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MetadataModule).toBeDefined();
  });
});
