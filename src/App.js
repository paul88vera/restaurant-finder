import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Splash from './pages/splash';
import Error from './pages/error'


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
}
