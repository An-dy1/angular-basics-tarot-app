import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedIndex = -1;

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

  selectCard(index: number) {
    this.selectedIndex = index;
  }

  isSelected(index: number) {
    return this.selectedIndex === index;
  }

  isDisabled(index: number) {
    return this.selectedIndex !== -1 && this.selectedIndex !== index;
  }
}
