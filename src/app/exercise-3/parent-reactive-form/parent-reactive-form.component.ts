import { Component, Input } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-parent-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './parent-reactive-form.component.html',
  styleUrl: './parent-reactive-form.component.scss'
})
export class ParentReactiveFormComponent {
  @Input() name : any ;
  updateName(){
    this.name.setValue("ga")
  }
}
