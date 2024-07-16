import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {

    const { isAuthenticated, logout, user } = useAuth();

    return (
        <nav className="bg-lime-500 flex items-center justify-between py-5 px-10 my-4 rounded-xl">
            <Link to={
                isAuthenticated ? '/tasks' :'/'
            }>
                <h1 className="text-2xl font-bold">TO-DO LIST</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li className='mx-2 font-semibold'>
                            Bienvenido {user.username} 👋🏼
                        </li>
                        <li className='md:mx-2'>
                            <Link
                                to='/add-task'
                                className='bg-lime-100 px-4 py-1 rounded-xl'
                            >
                                Añadir nueva tarea
                            </Link>
                        </li>
                        <li className='ml-2'>
                            <Link
                                to='/'
                                onClick={() => {
                                    logout();
                                }}
                            >
                                Cerrar sesión
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li className='mx-2'>
                            <Link
                                to='/login'
                                className='bg-lime-100 px-4 py-1 rounded-xl text-lg'
                            >
                                Login
                            </Link>
                        </li>
                        <li className='ml-2'>
                            <Link
                                to='/register'
                                className='bg-lime-100 px-4 py-1 rounded-xl text-lg'
                            >
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;