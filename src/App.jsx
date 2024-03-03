import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import User from './components/User';

function App() {
  

  return (
    <>
      <ToastContainer />
      <Router>
      <Routes>
        <Route path='/' element={<Login />} /> 
        <Route path='/Home' element={<Home />} />
        <Route path='/user' element={<User />} />
      </Routes>
      </Router>
       
      
        
    </>
    
  )
}

export default App
