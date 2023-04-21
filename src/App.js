import './App.css';
import { NavScroll } from './component/NavScroll';
import AboutUS from './pages/aboutUs/AboutUS';
import { Main } from './pages/mainPage/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyCalendar } from './pages/activaties/myCalendar';
import ResponsiveCarousel from './pages/donation/Donation';
import Footer from './component/footer/Footer';
import DonationAlert from './component/DonationAlert';

function App() {

  return (
    <>
      <Router>
        <NavScroll/>
        <DonationAlert/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/aboutUs" element={<AboutUS/>}/>
          <Route path="/activaties" element={<MyCalendar/>}/>
          <Route path="/donation" element={<ResponsiveCarousel/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
