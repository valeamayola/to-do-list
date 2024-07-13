import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx'

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPages';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Inicio</h1>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/tasks' element={<h1>Página de tareas</h1>} />
          <Route path='/add-task' element={<h1>Añadir tarea</h1>} />
          <Route path='/tasks/:id' element={<h1>Editar tarea</h1>} />
          <Route path='/profile' element={<h1>Perfil</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App