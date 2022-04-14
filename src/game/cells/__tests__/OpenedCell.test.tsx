import { render, screen } from "@testing-library/react";
import OpenedCell from "../OpenedCell";

describe("opened cell component test", () => {
  it("renders opened cell", () => {
    render(<OpenedCell value={"1"} />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
  it("renders opened cell that has style color green", () => {
    render(<OpenedCell value={"1"} />);
    const element: any = screen.getByTestId("opened-cell-component");
    expect(element).toHaveStyle("color:green");
  });
  it("renders opened cell that has style color yellow", () => {
    render(<OpenedCell value={"2"} />);
    const element: any = screen.getByTestId("opened-cell-component");
    expect(element).toHaveStyle("color:yellow");
  });
  it("renders opened cell that has style color red", () => {
    render(<OpenedCell value={"3"} />);
    const element: any = screen.getByTestId("opened-cell-component");
    expect(element).toHaveStyle("color:red");
  });
});
