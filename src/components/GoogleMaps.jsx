import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export default function GoogleMaps() {
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: -27.468431, lng: 153.024949 }}
  >
    <Marker
      position={{ lat: -27.468431, lng: 153.024949 }}
    />
  </GoogleMap>
))
  return (
    <div>
      <MapWithAMarker
  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `${window.innerWidth < 1000 ? '550px':'1375px'}` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
      
    </div>
  )
}
