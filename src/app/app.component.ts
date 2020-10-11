import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';

  inputValue = '';

  constructor() {
  }

  onInput(event?: KeyboardEvent) {
    console.log('Event', event);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    console.log('Click!');
  }
}
