import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { CounterService, IScreenCounter } from '../../service/counter.service';
import { CounterBtnComponent } from './counter-btn.component';
import { By } from '@angular/platform-browser';

import { LAYOUTSCREENS } from '../../layout-screens.enum';
import { MockCounterService } from '../../../testing/MockCounterService';
import { of } from 'rxjs/internal/observable/of';

describe('CounterBtnComponent', () => {
  let component: CounterBtnComponent;
  let fixture: ComponentFixture<CounterBtnComponent>;
  let counterService: CounterService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CounterBtnComponent],
        providers: [{ provide: CounterService, useValue: MockCounterService }],
      }).compileComponents();
      component = TestBed.inject(CounterBtnComponent);
      counterService = TestBed.inject(CounterService);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should update counter text on the button text', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    component.ngOnInit();
    component.counter = 1;

    expect(button.textContent).toEqual(`Clicked ${component.counter} times`);
  });

  it('should call [CounterService] methode setCounter when click on button', () => {
    component.screen = LAYOUTSCREENS.FOOTER;

    component.onClick();

    expect(counterService.setCounter).toHaveBeenCalledWith(
      LAYOUTSCREENS.FOOTER.toString()
    );
  });

  describe('ngOnInit', () => {
    it('should call [counterState$] behavior subject', fakeAsync(() => {
      const counterState = spyOn(component['_counterService'], 'counterState$');
      component.ngOnInit();
      tick();
      fixture.detectChanges();
      expect(counterState).toHaveBeenCalled();
      flush();
    }));
  });

  it('should call [onMaximumCall] output when counter equal or exceeds 10', fakeAsync(() => {
    const screenCounterValue: IScreenCounter[] = [
      { screen: LAYOUTSCREENS.FOOTER.toString(), counter: 10 },
    ];
    const onMaximumClick = spyOn(component, 'onMaximumClick');
    spyOn(component['_counterService'], 'counterState$').and.returnValue(
      of(screenCounterValue)
    );
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(onMaximumClick).toHaveBeenCalledWith(true);
    flush();
  }));
});
