import { Component} from '@angular/core';
import { LAYOUTSCREENS } from '../../layout-screens.enum';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  screen = LAYOUTSCREENS.HEADER.toString();
  maximumReached = false;
  constructor() {}

  onMaxumimClicked(event: boolean) {
    this.maximumReached = event;
  }
}
