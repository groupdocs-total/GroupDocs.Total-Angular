import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterReplacementDictionaryComponent } from './character-replacement-dictionary.component';

describe('CharacterReplacementDictionaryComponent', () => {
  let component: CharacterReplacementDictionaryComponent;
  let fixture: ComponentFixture<CharacterReplacementDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterReplacementDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterReplacementDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
