import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TotalNavComponent } from './total-nav.component';

describe('TotalNavComponent', () => {
  let component: TotalNavComponent;
  let fixture: ComponentFixture<TotalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalNavComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
