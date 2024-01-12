import Navbar from './components/Navbar'
import { useContext } from 'react'
import { AuthContext } from './context/auth.context'
import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

function App() {
  const { getToken } = useContext(AuthContext)
  const isLoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/login' />

}

  const isLoggedOut = () => {
    return !getToken() ? <Outlet /> : <Navigate to='/'>
  }
  return (
    <>
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={< Home/>}></Route>
      <Route element={<isLoggedOut/>} >
        <Route path='/login' element={< Login/>}></Route>
        <Route path='/signup' element={< Signup/>}></Route>
      </Route>

     </Routes>
    </>
  )
}

export default App
