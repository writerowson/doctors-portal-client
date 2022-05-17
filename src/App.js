import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/HomePage/Home';
import Navber from './pages/Shared/Navber';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Appointment from './pages/AppoinmentPage/Appointment';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/appoinment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>}>
        </Route>
      </Routes >
      <ToastContainer></ToastContainer>
    </div >

  );
}

export default App;
