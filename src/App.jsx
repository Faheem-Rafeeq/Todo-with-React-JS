import { useRef, useState } from "react";
import "./App.css";

function App() {
  const title = useRef("");
  const description = useRef("");
  const [todos, setTodos] = useState([]);

  const addTodos = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title: title.current.value,
        description: description.current.value,
        id: Date.now(),
      },
    ]);

    title.current.value = "";
    description.current.value = "";
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos]; // Create a copy of the array
    updatedTodos.splice(index, 1); // Remove item at index
    setTodos(updatedTodos); // Update state
  };

  const editTodo = (index) => {
    const newTodo = prompt("Enter new todo");
    if (newTodo) {
      const updatedTodos = [...todos]; // Copy state
      updatedTodos[index].title = newTodo; // Update title
      setTodos(updatedTodos); // Set updated state
    }
  };

  return (
    <div className="container">
      <form onSubmit={addTodos} className="todo-form">
        <h2>Todo App</h2>
        <input type="text" placeholder="Title" ref={title} />
        <input type="text" placeholder="Description" ref={description} />
        <button>Add Todo</button>
      </form>

      <div className="todo-list">
        {todos.length > 0 ? (
          todos.map((item, index) => (
            <div key={item.id} className="todo-item">
              <div className="todo-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="todo-actions">
                <button className="edit-btn" onClick={() => editTodo(index)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => deleteTodo(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="no-todos">No Todos Found</h1>
        )}
      </div>
    </div>
  );
}

export default App;
