import React from "react";
import Overview from "./components/Overview";
import "./App.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = { task: { text: "", id: crypto.randomUUID() }, tasks: [] };
	}
	handleChange(e) {
		this.setState({
			task: { text: e.target.value, id: this.state.task.id },
		});
	}
	onSubmitTask(e) {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.task),
			task: { text: "", id: crypto.randomUUID() },
		});
	}
	handleDelete({ id }) {
		this.setState({
			tasks: this.state.tasks.filter((task) => task.id !== id),
		});
	}
	handleEdit(task, text) {
		let index = this.state.tasks.indexOf(task);
		let array = [...this.state.tasks];
		let obj = { ...this.state.task };
		obj.text = text;

		array.splice(index, 1, obj);
		this.setState({
			tasks: array,
			task: { text: "", id: crypto.randomUUID() },
		});
	}
	render() {
		const { task, tasks } = this.state;

		return (
			<div>
				<form onSubmit={this.onSubmitTask.bind(this)} className="task-form">
					<label htmlFor="taskInput">Enter Task</label>
					<input
						id="taskInput"
						value={task.text}
						onChange={this.handleChange.bind(this)}
						placeholder="enter a task"
						type="text"
					/>
					<button type="submit">Add a Task</button>
				</form>
				<Overview
					tasks={tasks}
					handleDelete={this.handleDelete.bind(this)}
					handleEdit={this.handleEdit.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
