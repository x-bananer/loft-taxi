import React from 'react';
import mapboxgl from 'mapbox-gl'
import { withAuth } from '../AuthContext'

export class Map extends React.Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoieC1iYW5hbmVyIiwiYSI6ImNrdjN0ajRleTRiZWUzMHM3cmRrcXU5ZXoifQ.Aw5l2B4_bdZrsuziVEB83A"

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    })
  }

  componentWillUnmount() {
    this.map = null;
  }

  render() {
    return <div className="map-wrapper">
      <div data-testid="map" className="map" ref={this.mapContainer} />
    </div> 
  }
}

export const MapWithAuth = withAuth(Map);