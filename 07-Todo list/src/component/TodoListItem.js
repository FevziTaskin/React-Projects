import React from "react";
import RightArrow from "../icons/RightArrow";
import EditButton from "../icons/EditButton";

export default function TodoListItem({
  todos,
  setIsEditing,
  setValueToBeUpdated,
  setIndex,
  setDoneItems,
  doneItems,
  setTodos,
}) {
  // The function that puts the value of item to be updated innto the form
  const handleEdit = (pIndex) => {
    setIsEditing(true);
    const itemToBeUpdated = todos.filter((doneItem, index) => index === pIndex);
    setValueToBeUpdated(itemToBeUpdated);
    setIndex(pIndex);
  };

  // The function that passes a todo from todolist to isdone list
  const passToDone = (pIndex) => {
    const passItem = todos.filter((item, index) => index === pIndex);
    setDoneItems([...doneItems, passItem]);
    const newTodoList = todos.filter((todo, index) => index !== pIndex);
    setTodos(newTodoList);
  };

  const todo = todos?.map((todo, index) => (
    <li
      key={index}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <div className="text-break">{todo}</div>
      <div>
        <button className="r-arrow" onClick={() => passToDone(index)}>
          <RightArrow />
        </button>
        <button className="edit" onClick={() => handleEdit(index)}>
          <EditButton />
        </button>
      </div>
    </li>
  ));

  return (
    <div data-testid="todo-container">
      <ul className="list-group" data-testid="todo-list">
        {todo}
      </ul>
    </div>
  );
}
