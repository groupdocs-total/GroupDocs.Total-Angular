import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymDictionaryComponent } from './synonym-dictionary.component';

describe('SynonymDictionaryComponent', () => {
  let component: SynonymDictionaryComponent;
  let fixture: ComponentFixture<SynonymDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynonymDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynonymDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
