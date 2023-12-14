import { Elephant } from "./Elephant"; // Import the Elephant class

describe("Elephant Class", () => {
  it("checkStatusAfterHour should update status correctly", () => {
    const elephant = new Elephant();
    elephant.decreaseHealth(40); // Simulate health below 70

    // Assuming one hour has passed
    elephant.checkStatusAfterHour(1);

    expect(elephant.getStatus()).toBe("Can't walk");

    // Assuming another hour has passed
    elephant.checkStatusAfterHour(2);

    expect(elephant.getStatus()).toBe("Dead");
  });
});
