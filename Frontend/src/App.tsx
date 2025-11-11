import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './routes/ProtectedRoute'
import Layout from './layout/Layout'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

function App() {

  return (
    <>
    
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route
          element={
            <ProtectedRoute allowedRoles={['user']}>
              <Layout/>
            </ProtectedRoute>
          }>
            <Route/>
            <Route/>


          </Route>

          <Route
          element={
            <ProtectedRoute allowedRoles={['user']}>
                <Layout/>
            </ProtectedRoute>
          }>


          </Route>
      </Routes>
    
     
    </>
  )
}

export default App
