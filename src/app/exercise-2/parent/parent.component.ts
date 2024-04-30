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
  saveMessage:String;
  addMessage(newMessage:String){
    this.saveMessage = newMessage;
  }
}
