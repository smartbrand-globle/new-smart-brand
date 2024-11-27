import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-info',
  standalone: true,
  imports: [],
  templateUrl: './common-info.component.html',
  styleUrl: './common-info.component.css',
})
export class CommonInfoComponent {
  @Input() title = '';
  @Input() description = '';
}
