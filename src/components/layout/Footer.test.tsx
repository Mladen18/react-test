import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renders Footer component", () => {
    render(<Footer />);
    const searcText = screen.getByText("Footer Copy Mladen");
    expect(searcText).toBeInTheDocument();
  });
});
