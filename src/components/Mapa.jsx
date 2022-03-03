import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet'; //default icon
import { Icon } from "leaflet";
import './Mapa.css'

//Default Icon leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Mapa = ({eventData}) => {

    // icon
    const volcano = new Icon({
        iconUrl: "./volcano.svg",//a public folder
        iconSize: [55, 55]
    });

    // markers
     const markers = eventData.map(ev => {
         if (ev.categories[0].id === 12) {
            let dateBrut = ev.geometries[0].date;
            let dateSplitted = dateBrut.split("T")
            let dateSplittedByCat = dateSplitted[0].split("-")
        

         //lat 1, long 0
         return  <Marker key={ev.id} 
                     position={[ev.geometries[0].coordinates[1], 
                     ev.geometries[0].coordinates[0]]}  icon={volcano}>
                         <Popup>
                            <div className='popup-fire'>
                            <h3 className='popup'>{ ev.title}</h3> 
                            <hr />
                            <h4 className='popup'>ID:  {ev.id}</h4>  
                            <br />
                            <h4 className='popup popup-date'>{dateSplittedByCat[2]}-{dateSplittedByCat[1]}-{dateSplittedByCat[0]}</h4>
                            </div> 
                        </Popup>
                 </Marker>
         }
         return null
     })
  return (
    <div>
        <MapContainer center={[9.622, -82.705]} zoom={4} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
            />
           {markers}

        </MapContainer>

    </div>
  )
}

export default Mapa