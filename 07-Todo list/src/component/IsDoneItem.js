import React from "react";
import LeftArrow from "../icons/LeftArrow";
import TrashButton from "../icons/TrashButton";

export default function IsDoneItem({
  todos,
  setTodos,
  doneItems,
  setDoneItems,
}) {
  // The function that deletes a todo
  const deleteTodo = (pIndex) => {
    const newDoneItems = doneItems.filter(
      (doneItem, index) => index !== pIndex
    );
    setDoneItems(newDoneItems);
  };

  // The function that passes a isdone item from isdone list to todolist
  const passToTodo = (pIndex) => {
    const passItem = doneItems.filter((item, index) => index === pIndex);
    setTodos([...todos, passItem]);
    const newIsDoneList = doneItems.filter((todo, index) => index !== pIndex);
    setDoneItems(newIsDoneList);
  };

  const doneItem = doneItems?.map((doneItem, index) => (
    <li
      key={index}
      className="list-group-item justify-content-between d-flex align-items-center text-decoration-line-through text-muted"
    >
      <div className="text-break">{doneItem}</div>
      <div>
        <button className="r-arrow" onClick={() => passToTodo(index)}>
          <LeftArrow />
        </button>
        <button className="edit" onClick={() => deleteTodo(index)}>
          <TrashButton />
        </button>
      </div>
    </li>
  ));

  return (
    <div data-testid="isDoneItemContainer">
      <ul className="list-group" data-testid="isdone-list">
        {doneItem}
      </ul>
    </div>
  );
}
