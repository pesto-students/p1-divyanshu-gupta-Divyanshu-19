import './App.css';
import { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);
  return (
    <div className="App">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          setTaskList((prev) => [...prev, { task, done: false }]);
          setTask('');
        }}
      >
        Add Task
      </button>
      <br />
      <TaskList taskList={taskList} setList={setTaskList} />
    </div>
  );
}

export default App;
