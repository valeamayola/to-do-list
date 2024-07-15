import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function TaskFormPage() {

    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id);
                console.log(task);
                setValue('title', task.title);
                setValue('description', task.description);
            };
        }
        loadTask();
    }, []);

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTask(params.id, data);
        } else {
            createTask(data);
        }

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