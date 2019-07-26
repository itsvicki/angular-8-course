import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleDetails = false;
  clickLogs = [];

  onToggleDetails() {
    this.toggleDetails = (this.toggleDetails === false);
    this.clickLogs.push(new Date());
  }

  // Change colour on the 5th item, taking into account logIndex will be 1 behind as starts from 0, not 1
  getTextBackgroundColor(logIndex) {
    return (logIndex >= 4) ? 'blue' : '';
  }

  // Add class on the 5th item, taking into account logIndex will be 1 behind as starts from 0, not 1
  getTextClass(logIndex) {
    return (logIndex >= 4);
  }
}
