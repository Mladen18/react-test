import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test("renders Header component", () => {
    render(<Header message={""} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBe("All Posts");
  });
});
