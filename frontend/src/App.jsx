import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css'

import Contact from './components/Contact/Contact'
import Aboutus from './components/About/Aboutus'
import Villas from './components/villas/Villas'
import SingleVilla from './components/villas/SingleVilla'

const App = () => {
  return (
    <div>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/villa' element={<Villas/>}/>
          <Route path='/villas:id' element={<SingleVilla/>}/>
          {/* dynamic id */}
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
