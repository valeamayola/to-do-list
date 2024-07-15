import { useTasks } from '../context/TasksContext';
import { Link } from 'react-router-dom';

function TaskCard({ task }) {

    const { deleteTask } = useTasks();

    return (
        <div className="bg-lime-100 max-w-md w-full p-10 rounded-xl">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{task.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <Link to={`/tasks/${task._id}`}>Editar</Link>
                    <button onClick={() => {
                        deleteTask(task._id);
                    }}
                    >
                        Eliminar
                    </button>
                </div>
            </header>
            <p className="text-slate-700">{task.description}</p>
            <p>{new Date(task.date).toLocaleDateString()}</p>
        </div>
    )
}

export default TaskCard;