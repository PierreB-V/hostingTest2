import { Routes } from '@angular/router';
import { MapDisplayComponent } from './map-display/map-display.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'map-display', component: MapDisplayComponent }
];