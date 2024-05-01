import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
// import { Exercise1Component } from './exercise-1/exercise-1.component';
//import { Exercise2Component } from './exercise-2/exercise-2.component';
import { Exercise3Component } from './exercise-3/exercise-3.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Exercise3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
