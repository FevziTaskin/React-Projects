import { render, screen } from "@testing-library/react";
import Input from "../Input";

// Input component test
test("input rendered", () => {
  render(<Input />);

  const input = screen.getByTestId("input");
  expect(input).toBeInTheDocument();
});

test("button should be in the screen", () => {
  render(<Input />);
  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
});
