import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/HomePage/Home';
import Navber from './pages/Shared/Navber';
import About from './pages/About/About';
import Login from './pages/Login/Login';

function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>

  );
}

export default App;
