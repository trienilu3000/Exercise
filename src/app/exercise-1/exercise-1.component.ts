import { Component } from '@angular/core';
import { ChildrenComponent } from './children/children.component';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-exercise-1',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './exercise-1.component.html',
  styleUrl: './exercise-1.component.scss',
})
export class Exercise1Component {}
