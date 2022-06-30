import React, { useEffect, useState } from 'react';
import SingleTask from './SingleTask';
import { toast } from 'react-toastify';


const AddTask = () => {

    const [tasks, setTasks] = useState([]);
    const [taskcount, setTaskCount] = useState(0);
    const [taskdeletecount, setTaskdeletecount] = useState(0);
    const [taskEditCount, setTaskEditCount] = useState(0);
    const [modalTask, setModalTask] = useState(null);
    const [editTask, setEditTask] = useState("");

    useEffect(() => {
        fetch("https://stormy-dawn-97117.herokuapp.com/allTask")
            .then(response => response.json())
            .then(data => {
                setTasks(data);
            })
    }, [taskcount, taskdeletecount, taskEditCount])

    const handleTaskAdd = (e) => {
        e.preventDefault();
        const task = e.target.task.value;
        if (task || e.code === "Enter") {
            fetch("https://stormy-dawn-97117.herokuapp.com/addTask", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task }),
            })
                .then(response => response.json())
                .then(data => {
                    setTaskCount(taskcount + 1);
                    e.target.reset();
                    toast.success(`Task Added`);
                })
        } else {
            toast.warning("Please Fill the Task");
        }
    }

    const handleTaskDelete = (id) => {
        fetch(`https://stormy-dawn-97117.herokuapp.com/deleteTask/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    setTaskdeletecount(taskdeletecount + 1)
                    toast.success("Task Successfully Deleted");
                }
            })
    }

    const handleTaskEdit = (id) => {
        const task = { task: editTask };

        if (editTask) {
            fetch(`https://stormy-dawn-97117.herokuapp.com/taskEdit/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.acknowledged) {
                        setTaskEditCount(taskEditCount + 1);
                    }
                })
        }
    }

    const handleTaskComplete = (t) => {
        const id = t?._id;
        const task = { task: t?.task }

        fetch("https://stormy-dawn-97117.herokuapp.com/completeTask", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
            .then(response => response.json())
            .then(data => {
                setTaskCount(taskcount + 1);
                toast.success("Task completed");
            })

        fetch(`https://stormy-dawn-97117.herokuapp.com/deleteTask/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    setTaskdeletecount(taskdeletecount + 1)
                }
            })

    }


    return (
        <div className='text-center mt-5'>
            <h2 className='text-2xl font-medium mb-4'>Add a Task</h2>
            <form onSubmit={handleTaskAdd}>
                <input name='task' type="text" placeholder="Add Task" className="input input-bordered w-full max-w-xs mr-2" />
                <input type="submit" value="Add Task" className="btn btn-primary mt-3 sm:mt-0" />
            </form>
            <h2 className='text-2xl font-medium mt-8 mb-4'>Pending Task</h2>
            <ul className='flex justify-center'>
                <div className="sm:w-5/12 overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Done</th>
                                <th>Task</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks?.map(t => <SingleTask key={t._id} t={t} handleTaskDelete={handleTaskDelete} setModalTask={setModalTask} handleTaskComplete={handleTaskComplete}></SingleTask>)}
                        </tbody>
                    </table>
                </div>
            </ul>
            {modalTask && <>
                <input type="checkbox" id="edit-task" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-left">Task Edit</h3>
                        <div className="form-control w-full max-w-xs mt-3">
                            <input onBlur={(e) => setEditTask(e.target.value)} type="text" defaultValue={modalTask.task} placeholder="Edit Task" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="modal-action">
                            <label onClick={() => setModalTask("")} htmlFor="edit-task" className="btn btn-error">Cancle</label>
                            <label onClick={() => handleTaskEdit(modalTask._id)} htmlFor="edit-task" className="btn btn-success">Save</label>
                        </div>
                    </div>
                </div>
            </>}
        </div >
    );
};

export default AddTask;