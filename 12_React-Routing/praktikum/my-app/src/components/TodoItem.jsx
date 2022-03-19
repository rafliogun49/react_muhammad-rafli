const TodoItem = (props) => {
  return (
    <div
      className={
        props.completed ? "todo col-lg-6 col-md-8 p-2" : "todo inactive col-lg-6 col-md-8 p-2"
      }
    >
      <span className={props.completed ? "todo-title" : "todo-title strike"}>{props.title}</span>
    </div>
  );
};

export default TodoItem;
