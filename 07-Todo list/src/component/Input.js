import React from "react";

export default function Input({
  newTodo,
  setNewTodo,
  isEditing,
  todos,
  setTodos,
  valueToBeUpdated,
  setValueToBeUpdated,
  index,
  setIsEditing,
}) {
  // The function that adds a newTodo
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
    }
    clearInput();
  };

  // The function that updates a todo
  const handleUpdate = (e, pIndex) => {
    e.preventDefault();
    setTodos((todos) =>
      todos.map((todo, index) => {
        return index === pIndex ? valueToBeUpdated : todo;
      })
    );
    clearInput();
    setIsEditing(false);
  };

  // The function clears input after updating or creating a todo
  const clearInput = () => {
    setNewTodo("");
    setValueToBeUpdated("");
  };

  return (
    <div>
      {!isEditing ? (
        <form onSubmit={handleSubmit}>
          <div data-testid="input">
            <div className="input-group ms-1 mt-3 text-align-center">
              <input
                type="text"
                className="form-control border-info"
                value={newTodo}
                name="text"
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <button
                data-testid="button"
                className="btn bg-info text-white"
                type="submit"
                id="button-addon2"
              >
                Add Todo
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={(e) => handleUpdate(e, index)}>
          <div data-testid="input">
            <div className="input-group ms-1 mt-3 text-align-center">
              <input
                type="text"
                className="form-control border-info"
                value={valueToBeUpdated}
                name="text"
                onChange={(e) => setValueToBeUpdated(e.target.value)}
              />
              <button
                data-testid="add-button"
                className="btn bg-info text-white me-3 rounded-end"
                type="submit"
                id="button-addon2"
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger rounded-start"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
