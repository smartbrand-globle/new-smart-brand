import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-header',
  standalone: true,
  imports: [],
  templateUrl: './common-header.component.html',
  styleUrl: './common-header.component.css',
})
export class CommonHeaderComponent {
  @Input() page = '';
  @Input() position = '';
}
