import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddComponents = [];
  evenComponents = [];

  onGameStarted(envData: {incrementingNumber: number}) {
    if (envData.incrementingNumber % 2 === 0) {
      this.evenComponents.push({
        number: envData.incrementingNumber
      });
    }
    else {
      this.oddComponents.push({
        number: envData.incrementingNumber
      });
    }
  }
}
