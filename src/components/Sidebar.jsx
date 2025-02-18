import React from 'react'
import '../styles/sidebar.css';
import { SlMenu } from "react-icons/sl";
import { CiSquareCheck } from "react-icons/ci";
import { GoTasklist } from "react-icons/go";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { CiStickyNote } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Sidebar = ({ allTasks, completedTasks, handleTasksType, categories }) => {

    const handleAllTasks = (type) => {
        handleTasksType(type || 'all');
    }

    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    }
    return (
        <div className='main p-2 py-3'>
            <div className='d-flex align-items-center justify-content-between mb-2'>
                <b>Todo-App</b>
                <SlMenu />
            </div>
            <div className='my-3'>
                <input type='search' placeholder='Search' className='form-control' />
            </div>

            <ul className='list-group tasks'>
                <li className="list-group-item nav-header disabled fw-bold">TASKS</li>
                <li className='list-group-item' onClick={() => handleAllTasks('all')}><Link to='/' className='link'><BsListTask className='menuIcon' /> All</Link> <span className='badge bg-secondary'>{allTasks}</span></li>
                <li className='list-group-item' onClick={() => handleAllTasks('completed')}><span><CiSquareCheck className='menuIcon' /> Completed</span> <span className='badge bg-secondary'>{completedTasks}</span></li>
                <li className='list-group-item' onClick={() => handleAllTasks('pending')}><span><GoTasklist className='menuIcon' /> Pending</span> <span className='badge bg-secondary'>{allTasks - completedTasks}</span></li>
                <li className='list-group-item'><span><IoCalendarNumberOutline className='menuIcon' /> Calendar</span></li>
                <li className='list-group-item'><span><CiStickyNote className='menuIcon' /> Sticky Wall</span></li>
            </ul>

            <ul className='list-group mt-3 list'>
                <li className="list-group-item nav-header disabled fw-bold">LISTS</li>
                <li className='list-group-item'><span className='d-flex'><div className='colorBox me-1'></div> Personal</span></li>
                <li className='list-group-item'><span className='w-100 d-flex'><div className='colorBox me-1'></div> Work</span></li>
                {categories && categories.map((category) => {
                    return <li className='list-group-item'><span className='w-100 d-flex'><div className='colorBox me-1' style={{ backgroundColor: getRandomColor() }}></div> {category}</span></li>
                })}
                <li className='list-group-item'><Link to="/add-category" className='w-100 align-middle link'><FaPlus /> Add New List</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar