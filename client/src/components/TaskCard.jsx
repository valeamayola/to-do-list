import dayjs from 'dayjs';
import { useTasks } from '../context/TasksContext';
import { Link } from 'react-router-dom';
import days from 'dayjs';
import utc from 'dayjs/plugin/utc';
days.extend(utc);

function TaskCard({ task }) {

    const { deleteTask } = useTasks();

    return (
        <div className="bg-lime-100 max-w-full w-full p-10 rounded-xl">
            <h1 className="text-2xl font-bold">{task.title}</h1>
            <p className="text-slate-900 text-lg my-2">{task.description}</p>
            <p className='font-semibold'>{days(task.date).utc().format('DD/MM/YYYY')}</p>
            <div className="flex gap-x-2 items-center mt-2">
                <Link
                    to={`/tasks/${task._id}`}
                    className='bg-lime-500 rounded-xl py-2 px-4'
                >
                    Editar
                </Link>
                <button
                    onClick={() => {
                        deleteTask(task._id);
                    }}
                    className='bg-red-500 rounded-xl py-2 px-4'
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default TaskCard;