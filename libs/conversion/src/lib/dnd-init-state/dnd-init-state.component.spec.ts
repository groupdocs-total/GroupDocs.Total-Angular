import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DndInitStateComponent } from './dnd-init-state.component';
import { ModalService } from '@groupdocs.examples.angular/common-components';

describe('DndInitStateComponent', () => {
  let component: DndInitStateComponent;
  let fixture: ComponentFixture<DndInitStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndInitStateComponent ],
      providers: [ ModalService ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndInitStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
