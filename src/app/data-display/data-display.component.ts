import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-display',
  imports: [],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent {
 constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
