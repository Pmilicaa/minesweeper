import configureStore from "redux-mock-store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Cell } from "../Cell";
import { OK } from "../../../constants/game";
import { Provider } from "react-redux";

import * as hooks from "../../../common/hooks";

const spy = jest.spyOn(hooks, "useAppDispatch");

const mockStore = configureStore();
const initialState = {
  game: {
    map: ["□□□", "□□□", "□□□"],
    message: OK,
    difficulty: 1,
    flags: [],
  },
};
describe("cell component test", () => {
  it("renders a cell", async () => {
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
  it("calls useAppDispatch", async () => {
    const store = mockStore(initialState);

    const mockOnClick = jest.fn();
    render(
      <Provider store={store}>
        <Cell x={1} y={1} onClick={mockOnClick} isFlagged={false} />
      </Provider>
    );

    expect(spy).toHaveBeenCalled();
  });
});
