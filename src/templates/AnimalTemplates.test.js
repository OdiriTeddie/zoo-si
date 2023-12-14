import { AnimalTemplate } from "./AnimalTemplates"; // Import the Animal class

describe("Animal Class", () => {
  let animal;

  beforeEach(() => {
    animal = new AnimalTemplate("Monkey"); // Initialize a new Animal instance before each test
  });

  it("should initialize with default values", () => {
    expect(animal.species).toBe("Monkey");
    expect(animal.health).toBe(100);
    expect(animal.status).toBe("Alive");
  });

  it("should decrease health correctly", () => {
    animal.decreaseHealth(20); // Decrease health by 20
    expect(animal.health).toBe(80);
    expect(animal.status).toBe("Alive");

    animal.decreaseHealth(90); // Decrease health by 90
    expect(animal.health).toBe(0);
    expect(animal.status).toBe("Dead");
  });

  it("should increase health correctly", () => {
    animal.increaseHealth(20); // Increase health by 20
    expect(animal.health).toBe(100);

    animal.decreaseHealth(50); // Decrease health by 50
    animal.increaseHealth(30); // In
    expect(animal.health).toBe(80);
  });

  it("should return health and status correctly", () => {
    expect(animal.getHealth()).toBe(100);
    expect(animal.getStatus()).toBe("Alive");

    animal.decreaseHealth(120); // Decrease health beyond 0
    expect(animal.getHealth()).toBe(0);
    expect(animal.getStatus()).toBe("Dead");
  });
});
