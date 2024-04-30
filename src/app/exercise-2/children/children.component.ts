import { Component, Output ,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-children',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {
  @Output() savedMessage: EventEmitter<String> = new EventEmitter<String>();
  message : String;
  saveMessage(){
    const messageSaved = this.message;
    this.savedMessage.emit(messageSaved);
  }
}
