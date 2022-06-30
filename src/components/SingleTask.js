import React from 'react';

const SingleTask = ({ t, handleTaskDelete, setModalTask, handleTaskComplete }) => {


    return <tr>
        <td>
            <input type="checkbox" onClick={() => handleTaskComplete(t)} class="checkbox checkbox-xs rounded-none border-black" />
        </td>
        <td title={`${t?.task?.length >= 35 ? t?.task : ""}`}>{t?.task?.length > 35 ? t?.task?.slice(0, 35) + "..." : t?.task}</td>
        <td><label htmlFor="edit-task" onClick={() => setModalTask(t)} className="btn btn-warning btn-xs">Edit</label></td>
        <td><button onClick={() => handleTaskDelete(t?._id)} className="btn btn-error btn-xs">Delete</button></td>
    </tr>

};

export default SingleTask;