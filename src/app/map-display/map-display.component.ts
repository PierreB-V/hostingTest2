import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

@Component({
  selector: 'app-map-display',
  imports: [],
  templateUrl: './map-display.component.html',
  styleUrl: './map-display.component.scss'
})
export class MapDisplayComponent {

  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    console.log('MapDisplayComponent initialized');

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }
}
