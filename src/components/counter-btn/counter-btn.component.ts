import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.css'],
})
export class CounterBtnComponent implements OnInit {
  @Input() screen: String = '';

  @Output() onMaximumClick: EventEmitter<boolean> = new EventEmitter();

  counter = 0;

  constructor(private _counterService: CounterService) {}

  ngOnInit() {
    this._counterService.counterState$.subscribe((v) => {
      this.counter =
        v.find((element) => element.screen === this.screen)?.counter ?? 0;

      if (this.counter >= 10) {
        this.onMaximumClick.emit(true);
      }
    });
  }

  onClick() {
    this._counterService.setCounter(this.screen!.toString());
  }
}
