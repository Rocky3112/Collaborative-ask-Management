/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Task = ({ task }) => {
    console.log(task);
    const { assignTo, description, dueDate, priority, title } = task;
    return (
        <div className="">
            <div className="card w-[550px] bg-slate-200 hover:bg-slate-500 hover:text-yellow-50 shadow-gray-100">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="flex items-center gap-3 text-lg hover:text-yellow-500 font-bold">
                        <h2>Priority = {priority}</h2>
                        <h2>Due-Date = {dueDate}</h2>
                    </div>
                    <h1 className="text-xl">Assign To {assignTo}</h1>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Task;