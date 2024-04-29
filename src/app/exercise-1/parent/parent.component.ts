import { Component } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildrenComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  students : any[] = [
    {
      id : 1,
      name : "Hao Nam",
      age : 17,
      score : 9

    },
    {
      id : 2,
      name : "Hao Long",
      age : 17,
      score : 8

    },
    {
      id : 3,
      name : "Nguyen Kiem",
      age : 17,
      score : 10

    },
    {
      id : 4,
      name : "Ngoc Kem",
      age : 17,
      score : 9.5

    },
    {
      id : 5,
      name : "Hoang",
      age : 17,
      score : 7

    },
    {
      id : 6,
      name : "Minh",
      age : 17,
      score : 7

    },
    {
      id : 7,
      name : "Nghia",
      age : 17,
      score : 8

    },
    {
      id : 8,
      name : "Linh",
      age : 17,
      score : 9

    },
    {
      id : 9,
      name : "Trong",
      age : 17,
      score : 5

    },
    {
      id : 10,
      name : "Minh Tu",
      age : 17,
      score : 3

    }
  ]
  message : String = "";
}
