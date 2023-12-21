import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FooterComponent],
      }).compileComponents();
      component = TestBed.inject(FooterComponent);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
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
