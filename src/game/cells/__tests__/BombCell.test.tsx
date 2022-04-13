import { render, screen } from "@testing-library/react";
import BombCell from "../BombCell";

describe("bomb cell component test", () => {
  it("renders bomb cell", () => {
    render(<BombCell />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src");
  });
});
