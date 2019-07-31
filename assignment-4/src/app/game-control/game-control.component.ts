import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  intervalRef;
  incrementingNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    // Every second emit a ongoing incrementing number
    this.intervalRef = setInterval(() => { 
      this.gameStarted.emit(this.incrementingNumber++);
    }, 1000);
  }

  onStopGame() {
    // Clear emitting event via clearing the interval
    clearInterval(this.intervalRef);
  }
}
