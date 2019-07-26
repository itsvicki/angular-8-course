import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  allowReset = false;
  
  onResetUsername() {
    this.username = '';
    this.allowReset = false;
  }

  onUpdateUserName(event: any) {
    this.allowReset = ((<HTMLInputElement>event.target).value != '');
  }
}
