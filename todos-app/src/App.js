import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      todos: [
        {
          id: 1,
          name: "Buy some clothes",
        },
        {
          id: 2,
          name: "Write some code",
        },
        {
          id: 3,
          name: "Watch movies",
        },
        {
          id: 4,
          name: "Play football",
        },
        {
          id: 5,
          name: "Play basketball",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  handleChange(e) {
    this.setState({
      newTodo: e.target.value,
    });
  }
  addTodo() {
    const newTodo = {
      name: this.state.newTodo,
      id: this.state.todos[this.state.todos.length - 1].id + 1,
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({
      todos,
      newTodo: "",
    });
  }
  deleteTodo(index) {
    const todos = this.state.todos;
    delete todos[index];
    this.setState({ todos });
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center-p-4">Todos App</h2>
        <input
          type="text"
          name="todo"
          value={this.state.newTodo}
          onChange={this.handleChange}
          className="my-4 form-control"
          placeholder="Add new todo"
        />
        <button
          onClick={this.addTodo}
          className="btn btn-info mb-3 form-control"
        >
          Add todo
        </button>
        <ul className="list-group">
          {this.state.todos.map((item, index) => {
            return (
              <>
                <li key={item.id} className="list-group-item">
                  {item.name}
                  <button
                    onClick={() => this.deleteTodo(index)}
                    className="btn-sm btn ml-5 btn-danger"
                    style={{ display: "flex" }}
                  >
                    X
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
