import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWordDictionaryComponent } from './stop-word-dictionary.component';

describe('StopWordDictionaryComponent', () => {
  let component: StopWordDictionaryComponent;
  let fixture: ComponentFixture<StopWordDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopWordDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopWordDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
