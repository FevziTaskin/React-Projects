import { render, screen } from "@testing-library/react";
import IsDoneTitle from "../IsDoneTitle";

// Is done title component test
test("is done title rendered", () => {
  render(<IsDoneTitle />);

  const todoTitle = screen.getByTestId("is-done-title");
  expect(todoTitle).toBeInTheDocument();
});

test("list should be in the screen", () => {
  render(<IsDoneTitle />);

  const todoTitle = screen.getByTestId("is-done-title");
  expect(todoTitle).toBeInTheDocument();
  expect(screen.getByText("IS DONE")).toBeInTheDocument();
});
