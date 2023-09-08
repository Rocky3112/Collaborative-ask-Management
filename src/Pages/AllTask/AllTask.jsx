import { useEffect, useState } from "react";
import Task from "./task";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  const [sortBy, setSortBy] = useState(null); 
  const [sortOrder, setSortOrder] = useState("asc"); 

  useEffect(() => {
    fetch(`https://collaborative-task-management-server.vercel.app/task`)
      .then(res => res.json())
      .then(data => {
        setTasks(data);
      });
  }, []);

  const sortByPriority = () => {
    if (sortBy === "priority") {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy("priority");
      setSortOrder("asc");
    }
  };

  const sortByDueDate = () => {
    if (sortBy === "dueDate") {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy("dueDate");
      setSortOrder("asc");
    }
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === "priority") {
      return sortOrder === "asc" ? a.priority - b.priority : b.priority - a.priority;
    } else if (sortBy === "dueDate") {
      return sortOrder === "asc" ? new Date(a.dueDate) - new Date(b.dueDate) : new Date(b.dueDate) - new Date(a.dueDate);
    } else {
      return 0;
    }
  });

  return (
    <div className="py-24 ">
        <div className="px-16">
        <button className="btn bg-slate-500 text-white hover:bg-green-500 my-2 mx-2"  onClick={sortByPriority}>Sort by Priority ({sortOrder === "asc" ? "Low to High" : "High to Low"})</button>
        <button className="btn bg-slate-500 text-white hover:bg-green-500" onClick={sortByDueDate}>Sort by Due Date ({sortOrder === "asc" ? "Earliest to Latest" : "Latest to Earliest"})</button>
      </div>
        <div className="grid lg:grid-cols-2 gap-10 py-10 px-5">
      
      {sortedTasks.map(task => (
        <Task key={task._id} task={task} ></Task>
      ))}
    </div>
    </div>
  );
};

export default AllTask;
