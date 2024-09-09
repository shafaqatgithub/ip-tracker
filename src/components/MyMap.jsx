import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import icon from "../images/icon-location.svg";
import L from "leaflet"
import { popup } from 'leaflet';

const MyMap = ({coordinates}) => {

  const marker = new L.icon({ iconUrl: icon});

  //markers
  // const markers=[
  //   {
  //     geocode:[48.86, 2.3522],
  //     popup:"Hello 1"
  //   },
  //   {
  //     geocode:[48.85, 2.3522],
  //     popup:"Hello 2"
  //   },
  //   {
  //     geocode:[48.855 , 2.34],
  //     popup:"Hello 3"
  //   },
  // ]

  

  return (
    <div>
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer  
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap </a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      >
        
          <Marker position={[]}>

          </Marker>
       
      </TileLayer>
    </MapContainer>
     
    </div>
  )
}

export default MyMap 





