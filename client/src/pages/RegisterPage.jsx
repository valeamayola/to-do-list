import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth';

function RegisterPage() {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values);
        console.log(res);
    })

    return (
        <div className='bg-lime-100 max-w-md m-auto place-self-center p-10 rounded-xl'>
            <form onSubmit={onSubmit}>
                <input type='text' {...register('username', { required: true })}
                    className='w-full bg-zinc-50 text-zinc-900 px-4 py-2 rounded-md my-2'
                    placeholder='Usuario'
                />
                <input type='email' {...register('email', { required: true })}
                    className='w-full bg-zinc-50 text-zinc-900 px-4 py-2 rounded-md my-2'
                    placeholder='Email'
                />
                <input type='password' {...register('password', { required: true })}
                    className='w-full bg-zinc-50 text-zinc-900 px-4 py-2 rounded-md my-2'
                    placeholder='Contraseña'
                />
                <button type='submit'>
                    Registrar
                </button>
            </form>
        </div>
    )
}

export default RegisterPage