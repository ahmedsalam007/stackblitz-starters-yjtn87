import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IScreenCounter {
  screen: string;
  counter: number;
}

@Injectable({ providedIn: 'root' })
export class CounterService {
  counterState$ = new BehaviorSubject<IScreenCounter[]>([]);
  constructor() {}

  setCounter(screen: string) {
    let value = this.counterState$.getValue();
    let newValue = [...value];
    let foundScreen = value.find((k) => k.screen == screen);
    if (foundScreen !== undefined) {
      foundScreen.counter++;
      newValue.push(foundScreen);
    } else {
      newValue.push({ screen: screen, counter: 1 });
    }
    this.counterState$.next(newValue);
  }
}
