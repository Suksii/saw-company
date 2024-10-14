import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'


function App() {

  const emailAddress = 'inginspekt@yahoo.com';
  const phoneAleksa = '+382 69 078 048';
  const phone = '+382 (0) 20 674 179'

  const sendEmail = () => {
    window.open(`mailto:${emailAddress}`)
  }

  const phoneCall = ({ call }) => {
    window.open(`tel:${call}`)
  }

  return (
    <>
      <Header phoneCall={phoneCall} sendEmail={sendEmail} phoneAleksa={phoneAleksa} phone={phone} emailAddress={emailAddress}/>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer phoneCall={phoneCall} sendEmail={sendEmail} phoneAleksa={phoneAleksa} phone={phone} emailAddress={emailAddress} />
      </div>


    </>
  )
}

export default App
