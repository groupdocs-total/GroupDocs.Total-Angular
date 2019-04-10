import { TestBed, async } from '@angular/core/testing';
import { AnnotationAppComponent } from './annotation-app.component';

describe('AnnotationAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnnotationAppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AnnotationAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'annotation'`, () => {
    const fixture = TestBed.createComponent(AnnotationAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('annotation');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AnnotationAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to annotation!'
    );
  });
});
