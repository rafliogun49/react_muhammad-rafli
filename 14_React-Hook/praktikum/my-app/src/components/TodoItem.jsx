import {useState} from "react";

const TodoItem = (props) => {
  const [todoStatus, setTodoStatus] = useState(props.completed);

  const switchTodoStatus = () => {
    setTodoStatus(!todoStatus);
  };

  return (
    <div
      onClick={switchTodoStatus}
      className={
        todoStatus ? "todo inactive col-lg-6 col-md-8 p-2" : "todo active col-lg-6 col-md-8 p-2"
      }
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8 text-start">
            <span className={todoStatus ? "todo-title strike" : "todo-title"}>{props.title}</span>
          </div>
          <div className="col-4 text-end">
            <button
              onClick={() => props.removeTodo(props.id)}
              className={todoStatus ? "btn btn-outline-secondary" : "btn btn-outline-light"}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
