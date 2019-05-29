import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InitStateComponent } from './init-state.component';

describe('InitStateComponent', () => {
  let component: InitStateComponent;
  let fixture: ComponentFixture<InitStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitStateComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
