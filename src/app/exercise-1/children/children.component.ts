import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrandchildrenComponent } from '../grandchildren/grandchildren.component';
@Component({
  selector: 'app-children',
  standalone: true,
  imports: [CommonModule,GrandchildrenComponent],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {
  @Input() students: any[] = [];
  @Input() savedMessage: String = "";
}
