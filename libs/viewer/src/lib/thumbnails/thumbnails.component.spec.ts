import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThumbnailsComponent } from './thumbnails.component';

describe('ThumbnailsComponent', () => {
  let component: ThumbnailsComponent;
  let fixture: ComponentFixture<ThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailsComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
