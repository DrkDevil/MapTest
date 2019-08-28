import { environment } from '../../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 45.218090;
  lng = -103.917794;
  constructor() { }
  ngOnInit() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-v9",
      zoom: 5,
      center: [this.lng, this.lat],
      maxZoom: 20,
      pitch: 50,
    });

    // this.map.on('load', (event) => {
    //   // add the real time map data
    // });

      this.map.on("load", function() {
      /* Image: An image is loaded and added to the map. */
      this.map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
        if (error) throw error;
        thismap.addImage("custom-marker", image);
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        this.map.addLayer({
          id: "markers",
          type: "symbol",
          /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
          source: {
            type: "geojson",
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [-103.9178, 45.2181]
                  }
                }
              ]
            }
          },
          layout: {
            "icon-image": "custom-marker",
          }
        });
      });
    });

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());








  }

}
