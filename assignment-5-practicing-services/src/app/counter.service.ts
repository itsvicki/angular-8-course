export class CounterService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  addActiveToInactiveCount() {
    this.activeToInactiveCount++;

    console.log(this.activeToInactiveCount);
  }

  addInactiveToActiveCount() {
    this.inactiveToActiveCount++;

    console.log(this.inactiveToActiveCount);
  }
}