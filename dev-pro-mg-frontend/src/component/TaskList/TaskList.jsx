import React from "react";
import TaskCard from "../Tasks/TaskCard/TaskCard";

const TaskList = () => {
  return (
    <div className="w-[67vw]">
      <div className="space-y-5">
        {[1, 1, 1, 1].map((item) => (
          <TaskCard />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
