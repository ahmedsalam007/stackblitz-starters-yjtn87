import { BehaviorSubject } from 'rxjs';

export class MockCounterService {
  counterState$ = new BehaviorSubject<any[]>([]);
  setCounter(screen: string) {}
}
