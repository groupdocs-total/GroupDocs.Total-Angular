import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellingCorrectorDictionaryComponent } from './spelling-corrector-dictionary.component';

describe('SpellingCorrectorDictionaryComponent', () => {
  let component: SpellingCorrectorDictionaryComponent;
  let fixture: ComponentFixture<SpellingCorrectorDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellingCorrectorDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellingCorrectorDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
