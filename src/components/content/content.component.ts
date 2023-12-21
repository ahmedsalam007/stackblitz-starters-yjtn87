import { Component } from '@angular/core';

import { LAYOUTSCREENS } from '../../layout-screens.enum';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent  {
  screen = LAYOUTSCREENS.CONTENT.toString();
  maximumReached = false;
  constructor() {}

  onMaxumimClicked(event: boolean) {
    this.maximumReached = event;
  }
}
