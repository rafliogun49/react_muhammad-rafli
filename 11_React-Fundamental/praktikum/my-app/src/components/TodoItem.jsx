const TodoItem = (props) => {
  return (
    <div className={props.completed ? "todo col-12 p-3" : "todo inactive col-12 p-3"}>
      <span className={props.completed ? "todo-title" : "todo-title strike"}>{props.title}</span>
    </div>
  );
};

export default TodoItem;
