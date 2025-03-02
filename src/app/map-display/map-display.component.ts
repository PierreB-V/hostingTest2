import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import Tile from 'ol/Tile';
import { XYZ } from 'ol/source';
import { transformExtent, transform } from 'ol/proj';
import { Extent } from 'ol/extent';

import {MapboxVectorLayer} from 'ol-mapbox-style';



function transformBounds(extent: Extent): Extent {
  return transformExtent(extent, 'EPSG:4326', 'EPSG:3857');
}

function transformCoord(coord: number[]): number[] {
  return transform(coord, 'EPSG:4326', 'EPSG:3857');
}



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

    
    const rasterLayer = this.initMapBoxLayer();
    const map = new Map({
      target: 'map',
      layers: [
        
        new TileLayer({
          source: new OSM()}),
        // new MapboxVectorLayer({
        //   styleUrl: 'mapbox://styles/mapbox/light-v11',
        //   accessToken: 'pk.eyJ1IjoicHZlcmNlbGxpIiwiYSI6ImNtN2dzbHdnMDEwcGYycXI1amxhb21uM3QifQ.zWhxVjg2JloJ87wG7JqkJA',
        // }),
        rasterLayer,
      ],
      view: new View({
        center: transformCoord([3.916817, 50.214663]),
        zoom: 14,
      }),
    });

  }

  private initMapBoxLayer(): TileLayer {
    const userName = 'pvercelli';
    const bounds =  [
      3.910052489351759,
      50.209634320962294,
      3.9235813800443076,
      50.21969261077353
  ];
  const mapExtent = transformBounds(bounds);


    const rasterLayer = new TileLayer({
      extent: mapExtent,
      source: new XYZ({
        url: "http://api.mapbox.com/v4/pvercelli.cbstilesetid/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicHZlcmNlbGxpIiwiYSI6ImNtN2draW4yZjB6dTYybHNqa3AwMjE4dTgifQ.AyUkpVHIHXep_pIXj3nlSw",
      }),
    });
    return rasterLayer;
    
  }
}
