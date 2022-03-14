import Navbar from "./components/Navbar";
import BigTitle from "./components/BigTitle";
import TodoItem from "./components/TodoItem";
import data from "./data/data";

function App() {
  const todos = data.map((todo) => {
    return <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />;
  });
  return (
    <div>
      <Navbar text="Todo App" />
      <div className="d-flex flex-column justify-content-center">
        <BigTitle text="Todos" />
        <section className="container">
          <div className="row justify-content-center gap-2">{todos}</div>
        </section>
      </div>
    </div>
  );
}

export default App;
