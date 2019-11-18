import { async, TestBed } from '@angular/core/testing';
import { SignatureModule } from './signature.module';

describe('SignatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SignatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SignatureModule).toBeDefined();
  });
});
