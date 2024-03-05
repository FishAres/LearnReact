import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders dice grid", () => {
  render(<App />);
  const diceGrid = screen.getByTestId("dice-grid");
  expect(diceGrid).toBeInTheDocument();
});

test("renders roll button", () => {
  render(<App />);
  const rollButton = screen.getByRole("button", { name: /roll babay!/i });
  expect(rollButton).toBeInTheDocument();
});

test("clicking roll button changes dice values", () => {
  render(<App />);
  const diceValuesBefore = screen
    .getAllByTestId("dice-value")
    .map((die) => die.textContent);
  const rollButton = screen.getByRole("button", { name: /roll babay!/i });
  fireEvent.click(rollButton);
  const diceValuesAfter = screen
    .getAllByTestId("dice-value")
    .map((die) => die.textContent);
  expect(diceValuesBefore).not.toEqual(diceValuesAfter);
});

test("clicking hold button toggles isHeld property", () => {
  render(<App />);
  const holdButtons = screen.getAllByRole("button", { name: /hold/i });
  const firstHoldButton = holdButtons[0];
  const firstDie = screen.getByTestId("dice-value", { index: 0 });
  const isHeldBefore = firstDie.getAttribute("data-held");
  fireEvent.click(firstHoldButton);
  const isHeldAfter = firstDie.getAttribute("data-held");
  expect(isHeldBefore).not.toEqual(isHeldAfter);
});
