import { Monkey } from "./Monkey"; // Import the Monkey class

describe("Monkey Class", () => {
  it("decreaseHealth method should update health correctly", () => {
    const monkey = new Monkey();
    const initialHealth = monkey.getHealth();
    monkey.decreaseHealth(10); // Decrease health by 10

    expect(monkey.getHealth()).toBe(initialHealth - 10);
  });
});
