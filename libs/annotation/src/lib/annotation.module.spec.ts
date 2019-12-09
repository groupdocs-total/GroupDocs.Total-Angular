import { async, TestBed } from '@angular/core/testing';
import { AnnotationModule } from './annotation.module';

describe('AnnotationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AnnotationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AnnotationModule).toBeDefined();
  });
});
