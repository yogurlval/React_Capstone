import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

function App() {


  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
