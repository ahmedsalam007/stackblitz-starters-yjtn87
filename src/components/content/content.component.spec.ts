import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ContentComponent],
      }).compileComponents();
      component = TestBed.inject(ContentComponent);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
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
