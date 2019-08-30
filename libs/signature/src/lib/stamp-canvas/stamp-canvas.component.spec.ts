import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampCanvasComponent } from './stamp-canvas.component';

describe('StampCanvasComponent', () => {
  let component: StampCanvasComponent;
  let fixture: ComponentFixture<StampCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
