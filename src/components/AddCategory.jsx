import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';

const AddCategory = ({ setAddCategory }) => {
    const { categories, setCategories } = useOutletContext();
    const [category, setCategory] = useState('');

    const handleAddCategory = () => {
        let tempCategories = [...categories];
        tempCategories.push(category);
        setCategories(tempCategories);
        setCategory('');
    }

    const handleCategory = (value) => {
        setCategory(value);
    }

    return (
        <>
            <div className='p-5'>
                <h4 className='mb-3'>Category</h4>
                <input type='text' className='form-control w-75' placeholder='Category Name' value={category} onChange={(e) => handleCategory(e.target.value)} />
                <button className='btn btn-primary mt-3' onClick={handleAddCategory}>Save</button>
            </div>
        </>
    )
}

export default AddCategory