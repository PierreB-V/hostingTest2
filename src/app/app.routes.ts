import { Routes } from '@angular/router';
import { MapDisplayComponent } from './map-display/map-display.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DataDisplayComponent } from './data-display/data-display.component';


export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'map-display', component: MapDisplayComponent },
    { path: 'data-display', component: DataDisplayComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback route
];