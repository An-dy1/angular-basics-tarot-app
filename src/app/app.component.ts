import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedIndex = -1;

  title = 'My Tarot';

  buttonText = 'Pick me';

  cards = [
    {
      title: 'Cups',
      name: 'page of cups',
      selected: false,
      buttonText: 'vote',
    },
    {
      title: 'Wands',
      name: 'page of wands',
      selected: false,
      buttonText: 'vote',
    },
    {
      title: 'Swords',
      name: 'page of swords',
      selected: false,
      buttonText: 'vote',
    },
    {
      title: 'Pentacles',
      name: 'page of pentacles',
      selected: false,
      buttonText: 'vote',
    },
  ];

  // cups = {
  //   name: 'page of cups',
  //   selected: false,
  //   buttonText: 'vote',
  // };

  // wands = {
  //   name: 'page of wands',
  //   selected: false,
  // };

  // swords = {
  //   name: 'page of swords',
  //   selected: false,
  // };

  // pentacles = {
  //   name: 'page of pentacles',
  //   selected: false,
  // };

  // if selected index is equal to this card's index, then return selected index to -1
  // else set it equal to current card's index
  selectCard(index: number) {
    if (this.selectedIndex === index) {
      this.selectedIndex = -1;
      this.cards[index].buttonText = 'vote';
    } else {
      this.selectedIndex = index;
      this.cards[index].buttonText = 'unvote';
    }
  }

  // returns true if selected card index is equal to this card's index
  // hidden = !true if that condition is met
  // hidden = !false if the condition is not met
  titleIsSelected(index: number) {
    return this.selectedIndex === index;
  }

  // if selected index is set to a card (not starting value -1) and the selected index is not equal to current card's index, then return true, disabling the card
  isDisabled(index: number) {
    return this.selectedIndex !== -1 && this.selectedIndex !== index;
  }
}
