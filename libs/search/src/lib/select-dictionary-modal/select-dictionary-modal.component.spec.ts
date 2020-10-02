import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDictionaryModalComponent } from './select-dictionary-modal.component';

describe('SelectDictionaryModalComponent', () => {
  let component: SelectDictionaryModalComponent;
  let fixture: ComponentFixture<SelectDictionaryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDictionaryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDictionaryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
