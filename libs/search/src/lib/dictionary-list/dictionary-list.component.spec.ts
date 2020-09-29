import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryListComponent } from './dictionary-list.component';

describe('DictionaryListComponent', () => {
  let component: DictionaryListComponent;
  let fixture: ComponentFixture<DictionaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
