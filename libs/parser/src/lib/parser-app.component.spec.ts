import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParserAppComponent } from './parser-app.component';

describe('ParserAppComponent', () => {
  let component: ParserAppComponent;
  let fixture: ComponentFixture<ParserAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParserAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParserAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
