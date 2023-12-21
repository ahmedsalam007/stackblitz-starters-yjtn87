import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LAYOUTSCREENS } from '../layout-screens.enum';
import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({ providers: [CounterService] });
      service = TestBed.inject(CounterService);
    })
  );

  it('should start with empty array at counterState$', () => {
    expect(service.counterState$.getValue().length).toEqual(0);
  });

  describe('setCounter', () => {
    it('should set new screen with counter equal 1', () => {
      const screen = LAYOUTSCREENS.HEADER;

      service.setCounter(screen);
      const counterStateValue = service.counterState$.getValue()[0];

      expect(counterStateValue.screen).toEqual(screen);
      expect(counterStateValue.counter).toEqual(1);
    });

    it('should save different counter for each screen', () => {
      const screen1 = LAYOUTSCREENS.HEADER;
      const screen2 = LAYOUTSCREENS.FOOTER;

      service.setCounter(screen1);
      service.setCounter(screen1);
      service.setCounter(screen2);

      const counterStateValue = service.counterState$.getValue();

      const counterStateHeaderScreen = counterStateValue.find(
        (e) => e.screen == screen1
      );

      const counterStateFooterScreen = counterStateValue.find(
        (e) => e.screen == screen2
      );

      expect(counterStateHeaderScreen?.counter).toEqual(2);
      expect(counterStateFooterScreen?.counter).toEqual(1);
    });
  });
});
