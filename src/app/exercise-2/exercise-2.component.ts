import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
@Component({
  selector: 'app-exercise-2',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './exercise-2.component.html',
  styleUrl: './exercise-2.component.scss'
})
export class Exercise2Component {

}
