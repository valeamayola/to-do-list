import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext';
import { useNavigate } from 'react-router-dom';

function TaskFormPage() {

    const {register, handleSubmit} = useForm();
    const {createTask} = useTasks();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        createTask(data);
        navigate('/tasks');
    });

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-lime-100 max-w-md w-full p-10 rounded-xl'>
            <form onSubmit={onSubmit}>
                <input 
                type='' 
                placeholder='Título' 
                {...register('title')}
                className='w-full bg-slate-50 text-zinc-900 px-4 py-2 rounded-xl my-2'
                autoFocus
                />
                <textarea 
                rows='3' 
                placeholder='Descripción'
                {...register('description')}
                className='w-full bg-slate-50 text-zinc-900 px-4 py-2 rounded-xl my-2'
                ></textarea>
                <button>
                    Guardar tarea
                </button>
            </form>
            </div>
        </div>
    )
};

export default TaskFormPage;