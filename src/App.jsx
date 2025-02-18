import './App.css'
import { useState } from 'react';
import Sidebar from './components/Sidebar'
import Form from './components/Form';
import { Outlet } from 'react-router-dom';

function App() {

  const [tasks, setTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  const onAddTask = (task) => {
    task.status = false;
    task.id = tasks.length + 1;
    let tempTasks = [...tasks];
    tempTasks.splice(0, 0, task);
    setTasks(tempTasks);
    setAllTasks(tempTasks);
  }

  const handleTasksType = (type) => {
    if (type === 'all') {
      setTasks(allTasks);
    }
    else if (type === 'completed') {
      setTasks(allTasks.filter(task => task.status === true));
    }
    else if (type === 'pending') {
      setTasks(allTasks.filter(task => task.status === false));
    }
  }


  return (
    <>
      <div className='container-fluid' style={{ width: "100%" }}>
        <div className='row p-3'>
          <div className='col-lg-2 col-md-4'><Sidebar allTasks={allTasks.length} completedTasks={allTasks.filter(task => task.status === true).length}
            handleTasksType={handleTasksType} categories={categories} /></div>
          <div className='col-md-6'><Outlet context={{ tasks, setTasks, categories, setCategories }} /></div>
          <div className='col-md-4'><Form sendData={onAddTask} categories={categories} /></div>
        </div>
      </div>
    </>
  )
}

export default App
