import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grandchildren',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grandchildren.component.html',
  styleUrl: './grandchildren.component.scss'
})
export class GrandchildrenComponent {
  @Input() students: any[] = [];
}
