import React, { Component } from "react";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      completedTasks: [],
      newTask: "",
    };
  }

  shouldComponentUpdate(nextState) {
    return (
      this.state.tasks !== nextState.tasks ||
      this.state.completedTasks !== nextState.completedTasks ||
      this.state.newTask !== nextState.newTask
    );
  }

  addTask = () => {
    const { newTask, tasks } = this.state;
    if (newTask !== "") {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: "",
      });
    }
  };

  deleteTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks });
  };

  completeTask = (index) => {
    const { tasks, completedTasks } = this.state;
    const taskToComplete = tasks[index];
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    this.setState({
      tasks: updatedTasks,
      completedTasks: [...completedTasks, taskToComplete],
    });
  };

  render() {
    const { tasks, completedTasks, newTask } = this.state;

    return (
      <div>
        <h2>Work to be done</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.deleteTask(index)}>Delete</button>
              <button onClick={() => this.completeTask(index)}>Complete</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => this.setState({ newTask: e.target.value })}
        />
        <button onClick={this.addTask}>Add Task</button>

        <div>
          <h2>Completed Works</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoApp;
