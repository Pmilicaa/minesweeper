import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BombCell from "../cells/BombCell";
import OpenedCell from "../cells/OpenedCell";

import Game from "../Game";

const middlewares: any = [];
const mockStore = configureStore(middlewares);

describe("game component test", () => {
  it("returns map", () => {
    const initialState = {
      game: {
        map: ["□□□", "□□□", "□□□"],
        message: "OK",
        difficulty: 1,
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Game message="OK" />
      </Provider>
    );
    expect(screen.getAllByTestId("cell-component")).toHaveLength(9);
  });
  it("returns a bomb cell", () => {
    const initialState = {
      game: {
        map: ["□□□", "□*□", "□□□"],
        message: "OK",
        difficulty: 1,
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
  it("returns a opened cell", () => {
    const initialState = {
      game: {
        map: ["□□□", "□1□", "□□□"],
        message: "OK",
        difficulty: 1,
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
});
