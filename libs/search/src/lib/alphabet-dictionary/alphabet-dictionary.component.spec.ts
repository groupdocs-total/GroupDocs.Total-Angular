import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetDictionaryComponent } from './alphabet-dictionary.component';

describe('AlphabetDictionaryComponent', () => {
  let component: AlphabetDictionaryComponent;
  let fixture: ComponentFixture<AlphabetDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabetDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
