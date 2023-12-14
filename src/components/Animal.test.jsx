import { getByText, getByAltText, render } from "@testing-library/react";
import Animal from "./Animal";

it("renders animal details correctly", async () => {
  const animal = {
    species: "Monkey",
    getHealth: () => 80,
  };
  const status = "";

  const { container } = render(
    <Animal
      animal={animal}
      status={status}
      imageSources={{ regular: "monkey.jpg", dead: "monkey-dead.jpg" }}
    />
  );

  expect(getByText(container, "Species: Monkey")).toBeInTheDocument();
  expect(getByText(container, "Health: 80%")).toBeInTheDocument();
  expect(getByAltText(container, "Monkey")).toHaveAttribute(
    "src",
    "monkey.jpg"
  );
});
