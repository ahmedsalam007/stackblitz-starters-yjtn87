import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { SideNavComponent } from './side-nav.component';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SideNavComponent],
      }).compileComponents();
      component = TestBed.inject(SideNavComponent);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
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
