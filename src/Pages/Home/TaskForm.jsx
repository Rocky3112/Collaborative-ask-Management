import React from "react";
import { useForm } from "react-hook-form";
import "./TaskForm.css";
import Swal from "sweetalert2";

function TaskForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Task data:", data);

        fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
           
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Task created',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
            .catch((error) => {
                console.error("Error creating task:", error);
            });
    };

    return (
        <div className=" py-24">
            <h2 className="text-center text-3xl font-semibold pb-4">Create a New Task</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="task-form shadow-slate-200 bg-slate-100">
                <div className="form-field">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        {...register("title", { required: true })}
                        className="input-field"
                    />
                    {errors.title && <p className="error-message">Title is required</p>}
                </div>
                <div className="form-field">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        {...register("description", { required: true })}
                        className="input-field"
                    />
                    {errors.description && (
                        <p className="error-message">Description is required</p>
                    )}
                </div>
                <div className="form-field">
                    <label htmlFor="dueDate">Due Date:</label>
                    <input
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        {...register("dueDate", { required: true })}
                        className="input-field"
                    />
                    {errors.dueDate && <p className="error-message">Due Date is required</p>}
                </div>
                <div className="form-field">
                    <label htmlFor="priority">Priority:</label>
                    <select
                        id="priority"
                        name="priority"
                        {...register("priority", { required: true })}
                        className="input-field"
                    >
                        <option value="">Select Priority</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                    </select>
                    {errors.priority && <p className="error-message">Priority is required</p>}
                </div>
                <div className="form-field">
                    <label htmlFor="assignTo">Assign To:</label>
                    <select
                        id="assignTo"
                        name="assignTo"
                        {...register("assignTo", { required: true })}
                        className="input-field"
                    >
                        <option value="">Select Team Member</option>
                        <option value="member1">Team Member 1</option>
                        <option value="member2">Team Member 2</option>
                        <option value="member3">Team Member 3</option>
                        <option value="member4">Team Member 4</option>
                        <option value="member5">Team Member 5</option>
                        <option value="member6">Team Member 6</option>
                        <option value="member7">Team Member 7</option>
                    </select>
                    {errors.assignTo && <p className="error-message">Assign To is required</p>}
                </div>
                <button type="submit" className="submit-button">
                    Create Task
                </button>
            </form>
        </div>
    );
}

export default TaskForm;
