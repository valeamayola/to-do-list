import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {

    const { isAuthenticated, logout, user } = useAuth();

    return (
        <nav className="bg-[#B4C400] flex justify-between py-5 px-10">
            <Link to='/'>
                <h1 className="text-2xl font-bold">TO-DO LIST</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li className='mx-2 font-semibold'>
                            Bienvenido {user.username} 👋🏼
                        </li>
                        <li className='mx-2'>
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
                                className='bg-lime-50 px-4 py-1 rounded-xl'
                            >
                                Login
                            </Link>
                        </li>
                        <li className='ml-2'>
                            <Link
                                to='/register'
                                className='bg-lime-50 px-4 py-1 rounded-xl'
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