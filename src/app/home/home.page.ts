import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text_inside_button = 'PUSH';
  i = 0;

  constructor() {}

  changeTextOnButton() {
    if (this.i === 0) {
      this.text_inside_button = 'Don\'t push.';
    } else if (this.i === 1) {
      this.text_inside_button = 'I said don\'t push !';
    } else if (this.i === 2) {
      this.text_inside_button = 'You don\'t listen to people, do you ?';
    } else if (this.i === 3) {
      this.text_inside_button = 'I understand, why would you ?';
    } else if (this.i === 4) {
      this.text_inside_button = 'Well because I asked not to push this button.';
    } else if (this.i === 5) {
      this.text_inside_button = 'Pushing this button does really important shit !';
    } else if (this.i === 6) {
      this.text_inside_button = 'Maybe you just exploded some building :o';
    } else if (this.i === 7) {
      this.text_inside_button = 'Maybe your turned off someone\'s light';
    } else if (this.i === 8) {
      this.text_inside_button = 'Maybe you start Earth self destruction';
    } else if (this.i === 9) {
      this.text_inside_button = 'Who cares anymore anyway';
    } else if (this.i === 10) {
      this.text_inside_button = 'Not you, that is clear !';
    } else if (this.i === 11) {
      this.text_inside_button = 'you piece of shit !!';
    } else if (this.i === 12) {
      this.text_inside_button = 'oups, c\'était plus fort que moi :o!';
    } else if (this.i === 13) {
      this.text_inside_button = 'This button will now self destruct.';
    } else if (this.i === 14) {
      this.i = 0;
      this.text_inside_button = 'PUSH';
    }

    this.i++;
  }

}
