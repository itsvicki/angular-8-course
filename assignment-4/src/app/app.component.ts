import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddComponents: number[] = [];
  evenComponents: number[] = [];

  onGameStarted(number: number) {
    if (number % 2 === 0) {
      this.evenComponents.push(number);
    }
    else {
      this.oddComponents.push(number);
    }
  }
}
