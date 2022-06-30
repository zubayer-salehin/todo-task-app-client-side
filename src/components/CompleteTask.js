import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const CompleteTask = () => {

    const [completeTask, setCompleteTasks] = useState([]);
    const [completeTaskdeletecount, setCompleteTaskdeletecount] = useState(0);

    useEffect(() => {
        fetch("http://localhost:5000/allCompleteTask")
            .then(response => response.json())
            .then(data => {
                setCompleteTasks(data);
            })
    }, [completeTaskdeletecount])

    const handleTaskDelete = (id) => {
        fetch(`http://localhost:5000/deleteCompleteTask/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    setCompleteTaskdeletecount(completeTaskdeletecount + 1)
                    toast.success("Completed Task Deleted");
                }
            })
    }

    return (
        <div className='text-center'>
            <h2 className='text-2xl font-medium mt-8 mb-6'>Completed Task</h2>
            <ul className='flex justify-center'>
                <div className="sm:w-4/12 overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Completed Task</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {completeTask.map((ct, index) => <tr key={ct?._id}>
                                <td>{index + 1}</td>
                                <td className='line-through' title={`${ct?.task?.length >= 35 ? ct?.task : ""}`}>{ct?.task?.length > 35 ? ct?.task?.slice(0, 35) + "..." : ct?.task}</td>
                                <td><button onClick={() => handleTaskDelete(ct?._id)} className="btn btn-error btn-xs">Delete</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </ul>
        </div>
    );
};

export default CompleteTask;