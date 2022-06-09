// import { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({ taskList, setList }) {
  return (
    <>
      {taskList.map((item, index) => (
        <TaskItem item={item} index={index} setList={setList} />
      ))}
    </>
  );
}

export default TaskList;
