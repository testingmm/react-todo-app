import React from 'react'
import { MdOutlineAddTask } from "react-icons/md";

const Header = () => {
    const iconStyles = {
        fontSize: '22px',
        cursor: 'pointer'
    }

    return (
        <>
            <div className='container'>
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom px-3">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <b>Todo App</b>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        {/* <li><a to='/' className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a to='/products' className="nav-link px-2">Tasks</a></li> */}
                    </ul>

                    <div className="col-md-3 text-end">
                        <button type='button' className='btn btn-light'><MdOutlineAddTask style={iconStyles} /></button>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header