import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Tarot';

  cups = {
    name: 'page of cups',
    selected: false,
  };

  wands = {
    name: 'page of wands',
    selected: false,
  };

  swords = {
    name: 'page of swords',
    selected: false,
  };

  pentacles = {
    name: 'page of pentacles',
    selected: false,
  };

  selectCard(event: Event) {
    this.pentacles.selected = true;
    console.log(event);
  }
}
