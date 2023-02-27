import React, { useState } from "react";
import "./App.css";
import IsDoneTitle from "./component/IsDoneTitle";
import TodoListItem from "./component/TodoListItem";
import TodoTitle from "./component/TodoTitle";
import IsDoneItem from "./component/IsDoneItem";
import "bootstrap-icons/font/bootstrap-icons.css";
import Input from "./component/Input";

function App() {
  // Setting states
  const [todos, setTodos] = useState([
    "learn Node JS",
    "go shopping",
    "drink milk",
  ]);
  const [doneItems, setDoneItems] = useState([
    "go sport",
    "React JS",
    "buy a bicycle",
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [valueToBeUpdated, setValueToBeUpdated] = useState("");
  const [index, setIndex] = useState();

  return (
    <>
      <div className="input">
        <Input
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          isEditing={isEditing}
          todos={todos}
          setTodos={setTodos}
          valueToBeUpdated={valueToBeUpdated}
          setValueToBeUpdated={setValueToBeUpdated}
          index={index}
          setIsEditing={setIsEditing}
        />
      </div>
      <div className="App d-flex justify-content-center">
        <div className="todo me-3 ">
          <TodoTitle />
          <TodoListItem
            todos={todos}
            setIsEditing={setIsEditing}
            isEditing={isEditing}
            setValueToBeUpdated={setValueToBeUpdated}
            setIndex={setIndex}
            setDoneItems={setDoneItems}
            doneItems={doneItems}
            setTodos={setTodos}
          />
        </div>
        <div className="isdone">
          <IsDoneTitle />
          <IsDoneItem
            doneItems={doneItems}
            setDoneItems={setDoneItems}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </>
  );
}

export default App;
