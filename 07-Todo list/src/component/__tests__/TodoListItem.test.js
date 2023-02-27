import { render, screen } from "@testing-library/react";
import TodoListItem from "../TodoListItem";

const todos = ["go shopping", "drink milk", "learn coding"];

// Todo List Item componenet test
test("todo list rendered", () => {
  render(<TodoListItem />);

  const todoContainer = screen.getByTestId("todo-container");
  expect(todoContainer).toBeInTheDocument();
});

test("render todolist", () => {
  render(<TodoListItem todos={todos} />);
  todos.forEach((task) => {
    expect(screen.getByText(task)).toBeInTheDocument();
  });
});
