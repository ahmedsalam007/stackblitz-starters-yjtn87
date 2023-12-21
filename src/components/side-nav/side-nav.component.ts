import { Component } from '@angular/core';
import { LAYOUTSCREENS } from '../../layout-screens.enum';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  screen = LAYOUTSCREENS.SIDE_NAV.toString();

  maximumReached = false;
  constructor() {}

  onMaxumimClicked(event: boolean) {
    this.maximumReached = event;
  }
}
