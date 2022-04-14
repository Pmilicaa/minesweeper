import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { OK } from "../../constants/game";
import BombCell from "../cells/BombCell";
import { Cell } from "../cells/Cell";
import OpenedCell from "../cells/OpenedCell";

import Game from "../Game";

const middlewares: any = [];
const mockStore = configureStore(middlewares);

describe("game component test", () => {
  it("game table contains all cells", () => {
    const initialState = {
      game: {
        map: ["□□□", "□□□", "□□□"],
        message: OK,
        difficulty: 1,
        flags: [],
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Game message={OK} />
      </Provider>
    );
    expect(screen.getAllByTestId("cell-component")).toHaveLength(9);
  });
  it("game table contains a bomb cell", () => {
    const initialState = {
      game: {
        map: ["□□□", "□*□", "□□□"],
        message: OK,
        difficulty: 1,
        flags: [],
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BombCell />
      </Provider>
    );
    expect(screen.getByTestId("bomb-cell-component")).toBeInTheDocument();
  });
  it("game table contains an opened cell", () => {
    const initialState = {
      game: {
        map: ["□□□", "□1□", "□□□"],
        message: OK,
        difficulty: 1,
        flags: [],
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <OpenedCell value={"1"} />
      </Provider>
    );
    expect(screen.getByTestId("opened-cell-component")).toBeInTheDocument();
  });
  it("game table contains a flagged cell", () => {
    const initialState = {
      game: {
        map: ["□□□", "□□□", "□□□"],
        message: OK,
        difficulty: 1,
        flags: [{ x: 0, y: 0 }],
      },
    };
    const store = mockStore(initialState);
    const mockOnClick = jest.fn();
    const { container } = render(
      <Provider store={store}>
        <Cell x={0} y={0} onClick={mockOnClick} isFlagged={true} />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
});
