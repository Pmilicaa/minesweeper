import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";
import { OK } from "../constants/game";
import Game from "../game/Game";

const middlewares: any = [];
const mockStore = configureStore(middlewares);

describe("app component test", () => {
  it("returns app component", () => {
    const initialState = {
      game: {
        map: ["□□□", "□□□", "□□□"],
        message: OK,
        difficulty: 1,
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByTestId("app-component")).toBeInTheDocument();
  });

  it("returns heading", () => {
    const initialState = {
      game: {
        map: ["□□□", "□□□", "□□□"],
        message: OK,
        difficulty: 1,
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByTestId("heading-minesweeper")).toBeInTheDocument();
  });
});
