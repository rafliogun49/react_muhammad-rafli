const TodoItem = (props) => {
  return (
    <div
      className={
        props.completed ? "todo col-lg-8 col-md-10 p-3" : "todo inactive col-lg-8 col-md-10 p-3"
      }
    >
      <span className={props.completed ? "todo-title" : "todo-title strike"}>{props.title}</span>
    </div>
  );
};

export default TodoItem;
