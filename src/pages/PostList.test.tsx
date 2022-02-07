import React from "react";
import { render, screen } from "@testing-library/react";
import PostsList from "./PostsList";

describe("PostList component", () => {
  test("renders Post List component", (): void => {
    render(<PostsList message={""} />);
    const searcText: HTMLElement = screen.getByText("Search:");
    expect(searcText).toBeInTheDocument();
  });

  test("renders posts if request succeeds", async () => {
    // window.fetch = jest.fn();
    // (window.fetch as jest.Mock).mockResolvedValueOnce({
    //   json: async () => [
    //     {
    //       userId: 1,
    //       id: 1,
    //       title: "Title",
    //       body: "Morem text",
    //     },
    //     {
    //       userId: 1,
    //       id: 2,
    //       title: "Title2",
    //       body: "Lorem",
    //     },
    //   ],
    // });
    render(<PostsList message={""} />);

    const postItems = await screen.findAllByRole("listitems");
    // console.log(postItems);
    expect(postItems).not.toHaveLength(0);
  });
});
