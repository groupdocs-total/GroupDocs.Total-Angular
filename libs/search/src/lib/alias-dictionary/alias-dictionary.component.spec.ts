import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasDictionaryComponent } from './alias-dictionary.component';

describe('AliasDictionaryComponent', () => {
  let component: AliasDictionaryComponent;
  let fixture: ComponentFixture<AliasDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliasDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
