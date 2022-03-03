
import React from 'react'
import { Icon } from "leaflet";
import './Foot.css'
import "leaflet/dist/leaflet.css";


const iconPath = process.env.PUBLIC_URL; // from public folder

const Foot = () => {
  return (
    <header className='header'>
       
            <a href="/" className='logo-click'>
            <div className='header-logo'>
                <img src={`/${iconPath}volcano.svg`} width='60px'/>
            <h1 className='header-title'> Volcanoes Eruptions Map</h1>
            </div>
            </a>
            <h2 className='header-source'>source:<a href="https://api.nasa.gov/">NASA Open APIs</a></h2>
         
    </header>
  )
}

export default Foot