export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          // whenever u need to like check/uncheck a todo task, onchange is called and the function then checks which todo user wants to change and returns a new updated checked/unchecked version
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
