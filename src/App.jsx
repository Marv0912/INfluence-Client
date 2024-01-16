import Navbar from './components/Navbar'
import { useContext } from 'react'
import { AuthContext } from './context/auth.context'
import { Route, Routes  } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Search from './pages/Search' // search based on niche, location and followers
import Results from './pages/Results' // Results based on search
import InfluencerDetails from './pages/InfluencerDetails' // As a company when clicking on searched result, you can see the influencer details
import Database from './pages/Database' // If company has saved users, they will be displayed in a table here
import Profile from './pages/Profile' // Logged In user details
// TODO: Create an edit profile page || when clicking edit on Profile, change it to form type

function App() {
  const { getToken } = useContext(AuthContext)

  // const isLoggedOut = () => {
  //     if (!getToken()) {
  //       return <Routes>
  //         <Route path='/login' element={<Login />} />
  //         <Route path='/signup' element={<Signup />} />
  //       </Routes>;
  //     } else {
  //       return <Navigate to='/' />;
  //     }
  //   };
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={< Home />}></Route>
        {/* TODO: Protect login & signup routes if user already logged in */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/search' element={<Search />}></Route>
        <Route path='/results' element={<Results />}></Route>
        <Route path='/influencer/:id' element={<InfluencerDetails />}></Route>
        <Route path='/database' element={<Database />}></Route>
        <Route path='/user/:id' element={<Profile />}></Route>
        {/* Create Dropdown menu on */}
        {/* {isLoggedOut()} */}
      </Routes>
    </>
  )
}

export default App
