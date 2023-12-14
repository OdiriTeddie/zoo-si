import { AnimalTemplate } from "../templates/AnimalTemplates";

export class Elephant extends AnimalTemplate {
  constructor() {
    super("Elephant");
    this.canWalk = true;
    this.healthBelow70Time = null;
    this.timeSinceHealthBelow70 = 0;
  }

  checkStatusAfterHour(currentTime) {
    if (this.health < 70 && this.canWalk && !this.healthBelow70Time) {
      this.healthBelow70Time = currentTime;
      this.status = "Can't walk";
    } else if (
      this.health < 70 &&
      this.healthBelow70Time &&
      currentTime - this.healthBelow70Time >= 1
    ) {
      this.status = "Dead";
    } else {
      this.status = "";
      this.healthBelow70Time = null;
      this.timeSinceHealthBelow70 = 0;
    }
  }

  getStatus() {
    return this.status;
  }
}
