import { Component } from '@angular/core';
import { ParentReactiveFormComponent } from './parent-reactive-form/parent-reactive-form.component';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-exercise-3',
  standalone: true,
  imports: [ParentReactiveFormComponent,ReactiveFormsModule],
  templateUrl: './exercise-3.component.html',
  styleUrl: './exercise-3.component.scss'
})
export class Exercise3Component {
  name = new FormControl("");
}
