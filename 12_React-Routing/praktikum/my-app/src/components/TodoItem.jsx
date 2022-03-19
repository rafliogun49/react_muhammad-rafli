const TodoItem = (props) => {
  return (
    <div
      className={
        props.completed
          ? "todo active col-lg-6 col-md-8 p-2"
          : "todo inactive col-lg-6 col-md-8 p-2"
      }
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8 text-start">
            <span className={props.completed ? "todo-title" : "todo-title strike"}>
              {props.title}
            </span>
          </div>
          <div className="col-4 text-end">
            <button
              className={props.completed ? "btn btn-outline-light" : "btn btn-outline-secondary"}
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
