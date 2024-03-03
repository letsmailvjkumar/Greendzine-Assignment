import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  

  return (
    <>
      <ToastContainer>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
        </Router>
      </ToastContainer>
    </>
    
  )
}

export default App
