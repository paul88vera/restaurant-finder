import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Splash from './pages/splash';
import Error from './pages/error'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Splash />} />
      <Route path ="home" element={<Home />} />
      <Route path ="login" element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}
