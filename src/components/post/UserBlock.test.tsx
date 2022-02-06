import React from "react";
import { render, screen } from "@testing-library/react";
import UserBlock from "./UserBlock";

describe("User component", () => {
  test("renders USer component", () => {
    render(<UserBlock userId={0} id={0} name={""} users={null} />);
    const searcText = screen.getByText("User name:");
    expect(searcText).toBeInTheDocument();
  });
});
