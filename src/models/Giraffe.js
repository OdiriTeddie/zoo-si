import { AnimalTemplate } from "../templates/AnimalTemplates";

export class Giraffe extends AnimalTemplate {
  constructor() {
    super("Giraffe");
  }

  decreaseHealth(value) {
    super.decreaseHealth(value);
    if (this.health <= 50) {
      this.status = "Dead";
    }
  }
}
