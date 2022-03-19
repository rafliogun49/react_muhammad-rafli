import BigTitle from "../components/BigTitle";
import TodoItem from "../components/TodoItem";
import Navbar from "../components/Navbar";
import data from "../data/data";
import InputTodo from "../components/InputTodo";

const Home = () => {
  const todos = data.map((todo) => {
    return <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />;
  });
  return (
    <>
      <Navbar></Navbar>
      <BigTitle>Todos</BigTitle>

      <section className="container">
        <div className="row justify-content-center gap-3">
          <InputTodo />
          {todos}
        </div>
      </section>
    </>
  );
};

export default Home;
