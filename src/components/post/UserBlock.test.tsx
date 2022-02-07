import React from "react";
import { render, screen } from "@testing-library/react";
import UserBlock from "./UserBlock";

describe("User component", () => {
  test("renders USer component", () => {
    render(<UserBlock id={0} users={null} message={""} />);
    const searcText = screen.getByText("User name:");
    expect(searcText).toBeInTheDocument();
  });
});
