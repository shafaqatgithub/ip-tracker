import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import Stats from './Stats'
import MyMap from './MyMap';

const IPAddress = () => {
  const [IPAddress,setIPAddress] = useState('');
  const [location,setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [ISP, setISP] = useState('');
  const [coordinates, setCoordinates] = useState({
    lat: 27.5035,
    lng: 77.67215,
  });

  
  const fetchLocation = (ipAddress = '')=>{
    const apiKey = 'at_J2t7FTQEtxTtQONsF1cmx7c9f0FLM';
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`)
    .then((res)=> res.json())
    .then((data)=>{
    console.log(data);
    setIPAddress(data.ip);
    setLocation(`${data.location.city}, ${data.location.country} ${data.location.postalcode}`);
    setTimezone(`UTC ${data.location.timezone}`);
    setISP(`${data.isp}`);
    setCoordinates({ lat: data.location.lat, lng: data.location.lng });
    });

  };
   
  useEffect(()=>{
    fetchLocation();
  },[])

  return (
    <div>
    <SearchBar setIPAddress={setIPAddress} fetchLocation={fetchLocation}/>
    <Stats 
    ipAddress={IPAddress} location={location} timezone={timezone} isp={ISP}
    />
    <MyMap coordinates={coordinates}/>
    </div>

  )
}

export default IPAddress


// 93.184.216.34