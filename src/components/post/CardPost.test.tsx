import React from "react";
import { render, screen } from "@testing-library/react";
import CardPost from "./CardPost";

describe("Post component", () => {
  test("renders Post component", () => {
    render(<CardPost title={""} body={""} message={""} />);
    const searcText = screen.getByText("Title:");
    expect(searcText).toBeInTheDocument();
  });
});
