import { AnimalTemplate } from "../templates/AnimalTemplates";

export class Monkey extends AnimalTemplate {
  constructor() {
    super("Monkey");
  }

  decreaseHealth(value) {
    super.decreaseHealth(value);
    if (this.health <= 30) {
      this.status = "Dead";
    }
  }
}
