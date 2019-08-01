import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class CounterService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  incrementActiveToInactiveCount() {
    this.activeToInactiveCount++;

    console.log(this.activeToInactiveCount);
  }

  incrementInactiveToActiveCount() {
    this.inactiveToActiveCount++;

    console.log(this.inactiveToActiveCount);
  }
}