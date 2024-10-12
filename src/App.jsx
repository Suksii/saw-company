import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'


function App() {

  return (
    <>
      <Header />
      <div className="relative"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>


    </>
  )
}

export default App
