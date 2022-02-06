import React from "react";
import { render, screen } from "@testing-library/react";
import PostItem from "./PostItem";

describe("Post Item component", () => {
  test("renders Post Item component", () => {
    render(<PostItem />);
  });
});
