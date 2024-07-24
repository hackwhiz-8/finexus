import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Homepage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/ContactUs/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white font-arizonia ">
         <Navbar/>
         <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/contact' element={<Contact/>} />
         </Routes>
         
    </div>
  );
}

export default App;
