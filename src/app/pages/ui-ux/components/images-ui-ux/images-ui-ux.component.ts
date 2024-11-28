import { Component } from '@angular/core';

@Component({
  selector: 'app-images-ui-ux',
  standalone: true,
  imports: [],
  templateUrl: './images-ui-ux.component.html',
  styleUrl: './images-ui-ux.component.css',
})
export class ImagesUiUxComponent {
  images = [
    { src: '../../../../assets/imgs/services-dropList/UI-UX/1.webp' },
    { src: '../../../../assets/imgs/services-dropList/UI-UX/2.webp' },
  ];
}
