import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HeaderComponent],
      }).compileComponents();
      component = TestBed.inject(HeaderComponent);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have maximum-reached class when [maximumReached] property equals true', () => {
    component.maximumReached = true;
    const contentContainerClasses = fixture.debugElement.query(
      By.css('.content')
    ).classes;

    expect(contentContainerClasses).toContain('maximum-count');
  });
});
