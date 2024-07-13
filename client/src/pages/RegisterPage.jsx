import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    })

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-lime-100 max-w-md w-full p-10 rounded-xl'>
            {
                registerErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white' key={i}>
                        {error}
                    </div>
                ))
            }
            <form onSubmit={onSubmit}>
                <input type='text' {...register('username', { required: true })}
                    className='w-full bg-zinc-50 text-zinc-900 px-4 py-2 rounded-md my-2'
                    placeholder='Usuario'
                />
                {
                    errors.username &&
                    <p className='text-red-500'>
                        Usuario es requerido
                    </p>
                }
                <input type='email' {...register('email', { required: true })}
                    className='w-full bg-zinc-50 text-zinc-900 px-4 py-2 rounded-md my-2'
                    placeholder='Email'
                />
                {
                    errors.email &&
                    <p className='text-red-500'>
                        Email es requerido
                    </p>
                }
                <input type='password' {...register('password', { required: true })}
                    className='w-full bg-zinc-50 text-zinc-900 px-4 py-2 rounded-md my-2'
                    placeholder='Contraseña'
                />
                {
                    errors.password &&
                    <p className='text-red-500'>
                        Contraseña es requerida
                    </p>
                }
                <button type='submit'>
                    Registrar
                </button>
            </form>
            <p className='flex gap-x-2 justify-between'>
                ¿Ya tienes una cuenta? 
                <Link 
                to='/login'
                className='text-lime-600 font-semibold'>Iniciar sesión</Link>
            </p>
            </div>
        </div>
    )
}

export default RegisterPage