import React from "react";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor() {
    super();
    this.state = { task: { text: "", id: crypto.randomUUID() }, tasks: [] };
  }
  handleChange(e) {
    this.setState({ task: { text: e.target.value, id: this.state.task.id } });
  }
  onSubmitTask(e) {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "", id: crypto.randomUUID() },
    });
  }
  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask.bind(this)}>
          <label htmlFor="taskInput">Enter Task</label>
          <input
            id="taskInput"
            value={task.text}
            onChange={this.handleChange.bind(this)}
            placeholder="enter a task"
            type="text"
          />
          <button type="submit">Add a Task</button>
          <Overview tasks={tasks} />
        </form>
      </div>
    );
  }
}

export default App;
