import { Routes } from '@angular/router';
import { MapDisplayComponent } from './map-display/map-display.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';


export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'map-display', component: MapDisplayComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback route
];