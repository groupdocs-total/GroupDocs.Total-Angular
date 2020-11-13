import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomophoneDictionaryComponent } from './homophone-dictionary.component';

describe('HomophoneDictionaryComponent', () => {
  let component: HomophoneDictionaryComponent;
  let fixture: ComponentFixture<HomophoneDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomophoneDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomophoneDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
