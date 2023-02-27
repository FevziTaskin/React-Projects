import { render, screen } from "@testing-library/react";
import IsDoneItem from "../IsDoneItem";

const doneItems = ["go shopping", "drink milk", "learn coding"];

//Is done item component test
test("is done item rendered", () => {
  render(<IsDoneItem />);

  const isDoneItemContainer = screen.getByTestId("isDoneItemContainer");
  expect(isDoneItemContainer).toBeInTheDocument();
});

test("render isDoneItem", () => {
  render(<IsDoneItem doneItems={doneItems} />);
  doneItems.forEach((doneItem) => {
    expect(screen.getByText(doneItem)).toBeInTheDocument();
  });
});
