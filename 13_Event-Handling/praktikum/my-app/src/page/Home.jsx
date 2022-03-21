import BigTitle from "../components/BigTitle";
import Navbar from "../components/Navbar";
import data from "../data/data";
import InputTodo from "../components/InputTodo";
import {Component} from "react";
import ListTodo from "../components/ListTodo";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  removeTodo = (id) => {
    const newListTodo = this.state.data.filter((todo) => todo.id !== id);
    this.setState({data: newListTodo});
  };

  addTodo = (newText) => {
    const newTodo = {id: Date.now(), ...newText};
    this.setState({data: [...this.state.data, newTodo]});
  };

  render() {
    return (
      <>
        <Navbar></Navbar>
        <BigTitle>Todos</BigTitle>
        <section className="container">
          <div className="row justify-content-center gap-3">
            <InputTodo addTodo={this.addTodo} />
            <ListTodo todoData={this.state.data} removeTodo={this.removeTodo} />
          </div>
        </section>
      </>
    );
  }
}

export default Home;
