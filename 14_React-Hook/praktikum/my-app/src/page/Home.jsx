import BigTitle from "../components/BigTitle";
import Navbar from "../components/Navbar";
import data from "../data/data";
import InputTodo from "../components/InputTodo";
import ListTodo from "../components/ListTodo";
import {useState} from "react";

const Home = () => {
  const [todoData, setTodoData] = useState(data);

  const removeTodo = (id) => {
    setTodoData((oldTodoData) => oldTodoData.filter((todo) => todo.id !== id));
  };

  const addTodo = (newTitleTodo) => {
    const newTodo = {id: Date.now(), ...newTitleTodo};
    setTodoData((oldTodoData) => [...oldTodoData, newTodo]);
  };

  return (
    <>
      <Navbar></Navbar>
      <BigTitle>Todos</BigTitle>
      <section className="container">
        <div className="row justify-content-center gap-3">
          <InputTodo addTodo={addTodo} />
          <ListTodo todoData={todoData} removeTodo={removeTodo} />
        </div>
      </section>
    </>
  );
};

export default Home;
