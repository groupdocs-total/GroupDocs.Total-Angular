import { TestBed, async } from '@angular/core/testing';
import { ComparisonAppComponent } from './comparison-app.component';

describe('ComparisonAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonAppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ComparisonAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'comparison'`, () => {
    const fixture = TestBed.createComponent(ComparisonAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('comparison');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ComparisonAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to comparison!'
    );
  });
});
