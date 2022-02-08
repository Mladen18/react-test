import React from "react";
import { render, screen } from "@testing-library/react";
import UserBlock from "./UserBlock";

describe("User component", () => {
  test("renders USer component", () => {
    render(<UserBlock id={0} users={null} message={""} />);
    const searcText = screen.getByText("User name:");
    expect(searcText).toBeInTheDocument();
  });

  //   test("renders user", async () => {
  //   window.fetch = jest.fn();
  //   (window.fetch as jest.Mock).mockResolvedValueOnce({
  //     json: async () => [
  //       {
  //         userId: 1,
  //         id: 1,
  //         name: "Title"
  //       }
  //     ],
  //   });
  //   render(<UserBlock users={null} message={""} id={0} />);

  //   const postItems = await screen.findAllByRole("listitems");

  //   expect(postItems).not.toHaveLength(0);
  // });
});
