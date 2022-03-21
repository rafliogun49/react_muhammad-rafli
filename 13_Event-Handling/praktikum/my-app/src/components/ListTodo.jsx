import TodoItem from "./TodoItem";

const ListTodo = ({todoData, removeTodo}) => {
  const todos = todoData.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        removeTodo={removeTodo}
      />
    );
  });
  return (
    <section className="container">
      <div className="row justify-content-center gap-3">{todos}</div>
    </section>
  );
};

export default ListTodo;
