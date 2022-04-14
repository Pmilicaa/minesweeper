import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import { Cell } from "../Cell";
import { OK } from "../../../constants/game";
import { Provider } from "react-redux";

const middlewares: any = [];
const mockStore = configureStore(middlewares);

describe("cell component test", () => {
  it("renders a cell", async () => {
    const initialState = {
      game: {
        map: ["□□□", "□□□", "□□□"],
        message: OK,
        difficulty: 1,
        flags: [],
      },
    };
    const store = mockStore(initialState);

    const mockOnClick = jest.fn();
    render(
      <Provider store={store}>
        <Cell x={1} y={1} onClick={mockOnClick} isFlagged={false} />
      </Provider>
    );
    const cell = screen.getByTestId("cell-component");
    cell.click();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  it("renders a flag when cell is flagged", () => {
    const initialState = {
      game: {
        map: ["□□□", "□□□", "□□□"],
        message: OK,
        difficulty: 1,
        flags: [],
      },
    };
    const store = mockStore(initialState);

    const mockOnClick = jest.fn();
    render(
      <Provider store={store}>
        <Cell x={1} y={1} onClick={mockOnClick} isFlagged={true} />
      </Provider>
    );
    const flagImg = screen.getByTestId("flag-img");
    expect(flagImg).toBeInTheDocument();
  });
});
