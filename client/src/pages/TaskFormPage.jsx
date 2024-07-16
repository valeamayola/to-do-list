import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

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
                setValue('date', dayjs(task.date).utc().format('YYYY-MM-DD'));
            };
        }
        loadTask();
    }, []);

    const onSubmit = handleSubmit((data) => {
        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
        };

        dataValid.date = dayjs.utc(data.date).format();

        if (params.id) {
            updateTask(params.id, dataValid);
        } else {
            createTask(dataValid);
        }

        navigate('/tasks');
    });

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-lime-100 max-w-md w-full lg:p-10 p-5 rounded-xl'>
                <form onSubmit={onSubmit}>
                    <label htmlFor='title'>Título</label>
                    <input
                        type=''
                        placeholder='Título'
                        {...register('title')}
                        className='w-full bg-slate-50 text-zinc-900 px-4 py-2 rounded-xl my-2'
                        autoFocus
                    />

                    <label htmlFor='description'>Descripción</label>
                    <textarea
                        rows='3'
                        placeholder='Descripción'
                        {...register('description')}
                        className='w-full bg-slate-50 text-zinc-900 px-4 py-2 rounded-xl my-2'
                    ></textarea>

                    <label htmlFor='date'>Fecha</label>
                    <input
                        type='date'
                        {...register('date')}
                        className='w-full bg-slate-50 text-zinc-900 px-4 py-2 rounded-xl my-2'
                    />

                    <button className='bg-lime-400 px-3 py-2 rounded-xl'>
                        Guardar tarea
                    </button>
                </form>
            </div>
        </div>
    )
};

export default TaskFormPage;