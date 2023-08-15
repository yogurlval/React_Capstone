import React from 'react'
import banner from '../assets/pho.jpg';
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home" style={{backgroundImage: `url(${banner})`}}>
        <div className="headerContainer">
        <h1>Phở King</h1>
        <p>Delicious Phở, Exquisite Oriental Dishes, and Great Prices</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
        </div>
      
    </div>
  )
}

export default Home
