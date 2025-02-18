import React, { useState } from 'react'
import '../styles/formStyles.css';

const Form = ({ sendData, categories }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: '',
        category: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title || !formData.description || !formData.priority || !formData.category || !formData.date) {
            alert('Please fill all the fields');
            return;
        }

        sendData(formData);
        setFormData({
            title: '',
            description: '',
            priority: '',
            category: '',
            date: ''
        })
    }

    return (
        <>
            <div className='p-2 py-3 main'>
                <h5>Task:</h5>

                <form className='mt-3'>
                    <input type='text' className='form-control mb-2' placeholder='Enter Task' name='title' value={formData.title} onChange={(e) => handleChange(e)} />
                    <textarea className='form-control mb-2' rows={4} placeholder='Enter Description' name='description' value={formData.description} onChange={(e) => handleChange(e)}></textarea>
                    <table className='table'>
                        <tr>
                            <td className='py-1'><label>Select Priority</label></td>
                            <td className='py-1'>
                                <select className='form-select' name='priority' value={formData.priority} onChange={(e) => handleChange(e)}>
                                    <option value='1'>Select Priority</option>
                                    <option value='High'>High</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Low'>Low</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1'>
                                <label>Select Category</label>
                            </td>
                            <td className='py-1'>
                                <select className='form-select' name='category' value={formData.category} onChange={(e) => handleChange(e)}>
                                    <option value='1'>Select Category</option>
                                    <option value='Personal'>Personal</option>
                                    <option value='Work'>Work</option>
                                    {categories && categories.length > 0 && categories.map((category) => {
                                        return <option value={category}>{category}</option>
                                    })}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-1'>
                                <label>Due Date</label>
                            </td>
                            <td className='py-1'>
                                <input type='date' className='form-control mb-2' name='date' value={formData.date} onChange={(e) => handleChange(e)} />
                            </td>
                        </tr>
                    </table>
                    <div className='btns'>
                        <button className='btn btn-outline-secondary' type='button'>Delete Task</button>
                        <button className='btn btn-warning ms-2' type='submit' onClick={(e) => handleSubmit(e)}>Save Task</button>
                    </div>
                </form>
            </div >
        </>
    )
}

export default Form