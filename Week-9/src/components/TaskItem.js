// import { useState } from 'react';
import

function TaskItem({ item, index, setList }) {
  function handleItem(e, index) {
    setList((tasks) => {
      tasks[index] = { ...item, done: !item.done };
      return [...tasks];
    });
  }

  return (
    <div key={index}>
      <input
        type="checkbox"
        value={item.done ? 'on' : 'off'}
        onClick={(e) => handleItem(e, index)}
      />
      {item.done ? <s>{item.task}</s> : item.task}
    </div>
  );
}

export default TaskItem;
