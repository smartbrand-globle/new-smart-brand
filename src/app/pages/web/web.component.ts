import { Component } from '@angular/core';
import { CommonHeaderComponent } from '../../common-components/common-header/common-header.component';
import { CommonInfoComponent } from '../../common-components/common-info/common-info.component';
import { ImagesWebComponent } from './components/images-web/images-web.component';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [CommonHeaderComponent, CommonInfoComponent, ImagesWebComponent],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css',
})
export class WebComponent {}
