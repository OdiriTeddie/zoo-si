import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders Zoo Simulator with initial values", () => {
    const { getByText, getAllByAltText } = render(<App />);

    // Check if the header and initial time are rendered
    expect(getByText("Zoo Simulator")).toBeInTheDocument();
    expect(getByText("Current Time: 0 hours")).toBeInTheDocument();

    // Check if initial animals are rendered with the default images
    const monkeyImages = getAllByAltText("Monkey");
    const giraffeImages = getAllByAltText("Giraffe");
    const elephantImages = getAllByAltText("Elephant");

    expect(monkeyImages.length).toBe(5);
    expect(giraffeImages.length).toBe(5);
    expect(elephantImages.length).toBe(5);
  });

  test("pass time and feed zoo buttons work", () => {
    const { getByText } = render(<App />);

    // Click pass time button and check if the time updates
    fireEvent.click(getByText("Pass Time"));
    expect(getByText("Current Time: 1 hours")).toBeInTheDocument();
  });
});
