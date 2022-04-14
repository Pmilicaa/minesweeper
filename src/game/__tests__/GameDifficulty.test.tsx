import { render, screen } from "@testing-library/react";
import { GameDifficulty } from "../GameDifficulty";

describe("game difficulty test", () => {
  const mockOnStartGame = jest.fn();

  it("renders game difficulty component", () => {
    render(
      <GameDifficulty aligment="HORIZONTAL" startGame={mockOnStartGame} />
    );
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });
  it("renders difficulty options", () => {
    render(
      <GameDifficulty aligment="HORIZONTAL" startGame={mockOnStartGame} />
    );
    expect(screen.getAllByRole("menuitem")).toHaveLength(4);
  });
  it("renders difficulty beginner menu item", () => {
    render(
      <GameDifficulty aligment="HORIZONTAL" startGame={mockOnStartGame} />
    );
    const beginnerMenuItem = screen.getByRole("menuitem", {
      name: "Beginner",
    });
    expect(beginnerMenuItem).toBeInTheDocument();
    beginnerMenuItem.click();
    expect(mockOnStartGame).toHaveBeenCalledWith(1);
  });
  it("renders intermediate menu item", () => {
    render(
      <GameDifficulty aligment="HORIZONTAL" startGame={mockOnStartGame} />
    );
    const interMediateMenuItem = screen.getByRole("menuitem", {
      name: "Intermediate",
    });
    expect(interMediateMenuItem).toBeInTheDocument();
    interMediateMenuItem.click();
    expect(mockOnStartGame).toHaveBeenCalledWith(2);
  });
  it("renders hard menu item", () => {
    render(
      <GameDifficulty aligment="HORIZONTAL" startGame={mockOnStartGame} />
    );
    const hardMenuItem = screen.getByRole("menuitem", {
      name: "Hard",
    });
    expect(hardMenuItem).toBeInTheDocument();
    hardMenuItem.click();
    expect(mockOnStartGame).toHaveBeenCalledWith(3);
  });
  it("renders expert menu item", () => {
    render(
      <GameDifficulty aligment="HORIZONTAL" startGame={mockOnStartGame} />
    );
    const expertMenuItem = screen.getByRole("menuitem", {
      name: "Expert",
    });
    expect(expertMenuItem).toBeInTheDocument();
    expertMenuItem.click();
    expect(mockOnStartGame).toHaveBeenCalledWith(4);
  });
  it("renders game difficulty that has style display flex", () => {
    render(
      <GameDifficulty aligment="HORIZONTAL" startGame={mockOnStartGame} />
    );
    const element = screen.getByTestId("game-difficulty-component");
    expect(element).toHaveStyle("display:flex");
  });
  it("renders game difficulty that has style display block", () => {
    render(<GameDifficulty aligment="VERTICAL" startGame={mockOnStartGame} />);
    const element = screen.getByTestId("game-difficulty-component");
    expect(element).toHaveStyle("display:block");
  });
});
