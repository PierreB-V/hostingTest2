import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS, withInterceptorsFromDi } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Site } from '../bo/site';
import { catchError, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-display',
  imports: [CommonModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent {
  protected apiUrl: string|any = 'https://site-service-wpsi7.ondigitalocean.app';
  protected sites: Site[] = [];

 constructor(private router: Router, private http: HttpClient) {
 }

 
 ngOnInit(): void {
  this.fetchAny();
  this.fetchData();
}

fetchAny(): void {
  this.http.get(this.apiUrl + '/site').pipe(
    tap(response => {
      console.log('Fetched data', response);
    }),
    catchError(error => {
      console.error('Error fetching data', error);
      return of([]);
    })
  ).subscribe();
}

fetchData(): void {
  this.http.get<Site[]>(this.apiUrl + '/site').pipe(
    tap(response => {
            this.sites = response;
      console.log('Fetched data', response);
    }),
    catchError(error => {
      console.error('Error fetching data', error);
      return of([]);
    })
  ).subscribe();
}

  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
