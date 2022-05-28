import React from "react";

import styles from "./taskApp.module.css";
import Taskheader from "./TaskHeader/TaskHeader"
import Addtask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
      <Taskheader/>
      <Addtask />
      <Tasks />
    </div>
  );
};

export default TaskApp;
