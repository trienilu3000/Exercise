import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-grandchildren',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './grandchildren.component.html',
  styleUrl: './grandchildren.component.scss'
})
export class GrandchildrenComponent {
  @Input() students: any[] = [];
  @Input() message: string = "";
  savedMessage: string = "";

  saveMessage() {
    this.savedMessage = this.message;
  }
}
