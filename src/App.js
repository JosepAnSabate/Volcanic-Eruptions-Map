import {useState, useEffect } from 'react'
import Mapa from './components/Mapa';
import Loading from './components/Loading';
import Foot from './components/Foot';
import './App.css';

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(function(){
    const fetchEvents = async () => {
      setLoading(true)
      await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
              .then(res => res.json())
              //.then(data => console.log(data.events))
              .then(data => setEventData(data.events)) 
    
      setLoading(false) 
    }
    fetchEvents()
  },[])
  return (
    <div>
     {!loading ?  <Mapa eventData={eventData} />:<Loading />}
     <Foot />
    </div>
  );
}

export default App;
