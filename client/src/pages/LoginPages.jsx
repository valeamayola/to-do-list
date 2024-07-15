import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginPage() {

    const {
        register, 
        handleSubmit ,
        formState: { errors }
    } = useForm();
    const {signin, errors: signinErrors, isAuthenticated} = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(data => {
        signin(data);
    });

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated]);

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-lime-100 max-w-md w-full p-10 rounded-xl'>
            {
                signinErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
                        {error}
                    </div>
                ))
            }
                <h1 className='text-2xl font-bold'>Login</h1>
            <form onSubmit={onSubmit}>
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
                    Iniciar sesión
                </button>
            </form>
            <p className='flex gap-x-2 justify-between'>
                ¿No tienes una cuenta aún? 
                <Link 
                to='/register'
                className='text-lime-600 font-semibold'>Registrate</Link>
            </p>
            </div>
        </div>
    )
}

export default LoginPage