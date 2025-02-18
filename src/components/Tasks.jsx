import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { FiArrowRight } from "react-icons/fi";

const Tasks = () => {
    const { tasks, setTasks } = useOutletContext();
    const navigate = useNavigate();

    const handleViewTask = (id) => {
        navigate(`/details/${id}`)
    }

    const handleOnComplete = (id) => {
        let tempTasks = [...tasks];
        let index = tempTasks.findIndex(task => task.id === id);
        tempTasks[index].status = !tempTasks[index].status;
        tempTasks = moveToEnd(tempTasks, tempTasks[index]);
        setTasks(tempTasks);
    }

    function moveToEnd(arr, item) {
        return arr.filter(i => i !== item).concat(item);
    }

    return (
        <>
            <div className='p-5'>
                <h5>Tasks</h5>
                {tasks && tasks.length === 0 && <b className='text-center'>No tasks found!</b>}
                <ul className='list-group'>
                    {tasks && tasks.length > 0 && tasks.map((task) => {
                        return (
                            <li className={`${'list-group-item d-flex align-items-center justify-content-between'} ${task.status === true ? 'text-decoration-line-through text-muted' : ''}`} key={task.id} aria-disabled={task.status}>
                                <div>
                                    <input className="form-check-input me-2" type="checkbox" id="checkboxNoLabel" aria-label="..." value={task.status}
                                        style={{ cursor: 'pointer' }} onChange={() => handleOnComplete(task.id)} disabled={task.status} />
                                    {task.title}
                                </div>
                                <div>
                                    <span className={`${'badge'} ${task.priority === 'High' ? 'bg-danger' : task.priority === 'Medium' ? 'bg-warning' : 'bg-primary'}`}>{task.priority}</span>
                                    <span className='ms-2'><FiArrowRight onClick={() => handleViewTask(task.id)} /></span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Tasks