import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { Exercise1Component } from './exercise-1/exercise-1.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exercise1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
