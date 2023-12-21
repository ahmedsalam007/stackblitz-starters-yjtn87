import { Component } from '@angular/core';
import { LAYOUTSCREENS } from '../../layout-screens.enum';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  screen = LAYOUTSCREENS.FOOTER.toString();
  maximumReached = false;
  constructor() {}

  onMaxumimClicked(event: boolean) {
    this.maximumReached = event;
  }
}
