import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizingComponent } from './resizing.component';

describe('ResizingComponent', () => {
  let component: ResizingComponent;
  let fixture: ComponentFixture<ResizingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
