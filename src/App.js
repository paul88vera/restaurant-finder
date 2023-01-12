import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Browse from './pages/browse';
import Login from './pages/login';
import Signup from './pages/signup';
import Splash from './pages/splash';
import Error from './pages/error'
import Mexican from './pages/mexican';
import Italian from './pages/italian';
import Seafood from './pages/seafood';
import Asian from './pages/asian';
import American from './pages/american';
import Barbecue from './pages/barbecue';



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path ="/" element={<Home />} />
      <Route path='/search' element={<Splash />} />
      <Route path ="SanAntonio/Mexican" element={<Mexican />} />
      <Route path ="SanAntonio/Seafood" element={<Seafood />} />
      <Route path ="SanAntonio/Italian" element={<Italian />} />
      <Route path ="SanAntonio/American" element={<American />} />
      <Route path ="SanAntonio/Asian" element={<Asian />} />
      <Route path ="SanAntonio/Barbecue" element={<Barbecue />} />
      <Route path ="browse" element={<Browse />} />
      <Route path ="login" element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}
