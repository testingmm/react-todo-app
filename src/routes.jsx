import App from './App';
import Tasks from './components/Tasks';
import TaskDetails from './components/TaskDetails';
import AddCategory from './components/AddCategory';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Tasks />
            },
            {
                path: '/details/:id',
                element: <TaskDetails />
            },
            {
                path: '/add-category',
                element: <AddCategory />
            }
        ]
    }
]

export default routes;