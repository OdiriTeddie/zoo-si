import { Giraffe } from "./Giraffe"; // Import the Giraffe class

describe("Giraffe Class", () => {
  it("decreaseHealth method should update health correctly", () => {
    const giraffe = new Giraffe();
    const initialHealth = giraffe.getHealth();
    giraffe.decreaseHealth(20); // Decrease health by 20

    expect(giraffe.getHealth()).toBe(initialHealth - 20);
  });
});
