import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
}
