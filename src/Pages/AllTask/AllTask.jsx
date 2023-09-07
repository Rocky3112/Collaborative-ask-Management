// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import Task from "./task";

const AllTask = () => {
    // const allTask = useLoaderData();
    // console.log(allTask);
    const [tasks, setTasks]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/tasks')
        .then(res=>res.json())
        .then(data=>{
            setTasks(data);
        })
    },[])
    return (
        <div className=" grid lg:grid-cols-2 gap-10 py-24 px-8">
            {
                tasks.map(task=><Task 
                    key={task._id}
                    task={task}
                    ></Task>)
            }
        </div>
    );
};

export default AllTask;