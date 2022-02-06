import React from "react";
import { render, screen } from "@testing-library/react";
import CommentBlock from "./CommentBlock";

describe("Comment component", () => {
  test("renders Comment component", () => {
    render(<CommentBlock comments={[]} />);
    const searcText = screen.getByText("Comments:");
    expect(searcText).toBeInTheDocument();
  });
});
