import {Component} from "react";

class InputTodo extends Component {
  state = {
    title: "",
    completed: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.title) {
      const newTodo = {
        ...this.state,
        title: this.state.title,
      };

      this.props.addTodo(newTodo);
      this.setState({title: ""});
    } else {
      alert("Don't forget to fill your To Do!");
    }
  };

  render() {
    return (
      <>
        <div className="col-lg-6 col-md-8">
          <div className="row">
            <div className="input-group mb-4">
              <input
                type="text"
                class="form-control py-2"
                value={this.state.title}
                name="title"
                placeholder="What's to do for today?"
                onChange={this.handleChange}
              />
              <div class="input-group-append">
                <button onClick={this.handleSubmit} className="btn btn-primary py-2" type="button">
                  <i className="bi bi-plus-circle"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InputTodo;
