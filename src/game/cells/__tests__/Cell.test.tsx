import { render, screen } from "@testing-library/react";
import { Cell } from "../Cell";

describe("cell component test", () => {
  it("renders a cell", async () => {
    const mockOnClick = jest.fn();
    render(<Cell x={1} y={1} onClick={mockOnClick} />);
    const cell = screen.getByTestId("cell-component");
    cell.click();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
