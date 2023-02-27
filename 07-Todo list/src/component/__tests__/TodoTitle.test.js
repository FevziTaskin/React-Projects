import { render, screen } from "@testing-library/react";
import TodoTitle from "../TodoTitle";

//Todo Title componenet test
test("todo title rendered", () => {
  render(<TodoTitle />);

  const todoTitle = screen.getByTestId("todo-title");
  expect(todoTitle).toBeInTheDocument();
});

test("todo title content should be", () => {
  render(<TodoTitle />);

  const todoTitle = screen.getByTestId("todo-title");
  expect(todoTitle).toBeInTheDocument();
  expect(screen.getByText("TODO LIST")).toBeInTheDocument();
});
