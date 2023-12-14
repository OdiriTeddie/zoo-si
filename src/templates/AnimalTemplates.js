export class AnimalTemplate {
  constructor(species) {
    this.species = species;
    this.health = 100;
    this.status = "Alive";
  }

  decreaseHealth(value) {
    this.health -= value;
    if (this.health <= 0) {
      this.health = 0;
      this.status = "Dead";
    }
  }

  increaseHealth(value) {
    this.health += value;
    if (this.health > 100) {
      this.health = 100;
    }
  }

  getHealth() {
    return this.health;
  }

  getStatus() {
    return this.status;
  }
}
