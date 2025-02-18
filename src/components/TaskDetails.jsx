import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const TaskDetails = () => {
    const { id } = useParams();
    const { tasks } = useOutletContext();

    return (
        <>
            <div className='p-5'>
                <h3>Task Details</h3>
                <div className='mt-5'>
                    <b>{tasks[id - 1].title}</b>
                    <div className='row mt-2'>
                        <div className='col'>{tasks[id - 1].category}</div>
                        <div className='col'>{tasks[id - 1].priority}</div>
                        <div className='col'>{tasks[id - 1].date}</div>
                        <div className='col-12 mt-3'>{tasks[id - 1].description}</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TaskDetails