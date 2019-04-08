import { TestBed, async } from '@angular/core/testing';
import { ViewerAppComponent } from './viewer-app.component';

describe('ViewerAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewerAppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ViewerAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'viewer'`, () => {
    const fixture = TestBed.createComponent(ViewerAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('viewer');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ViewerAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to viewer!'
    );
  });
});
