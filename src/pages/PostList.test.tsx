import React from "react";
import { render, screen } from "@testing-library/react";
import PostsList from "./PostsList";

describe("PostList component", () => {
  test("renders Post List component", (): void => {
    render(<PostsList />);
    const searcText: HTMLElement = screen.getByText("Search:");
    expect(searcText).toBeInTheDocument();
  });

  // test("renders posts if request succeeds", async () => {
  //   window.fetch = jest.fn();
  //   window.fetch.mockResolvedValueOnce({
  //     json: async () => [{ id: 1, postId: 1, userId: 1, title: "Post", body: "Post Body" }],
  //   });
  //   render(<PostsList />);

  //   const postItems = await screen.findAllByRole("listitem");
  //   expect(postItems).not.toHaveLength(0);
  // });
});
