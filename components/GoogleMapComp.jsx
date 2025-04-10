// components/GoogleMap.js
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.748817, // Latitude for the center of the map
  lng: -73.985428, // Longitude for the center of the map
};

const GoogleMapComp = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCBEcYcDU6CPtAJw2m_KPQHnwrOQrT2bwE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Add Marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComp;
