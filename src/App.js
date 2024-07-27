import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/Homepage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/ContactUs/Contact';
import SipCalculator from './Components/FinancialCalculator/Sip';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="bg-zinc-950 text-white font-serif overflow-x-hidden  ">
         <Navbar/>
         <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/calculators/SIP' element={<SipCalculator/>} />
         </Routes>
         <Footer/>
         
    </div>
  );
}

export default App;
