import { Component } from '@angular/core';
import { ImagesUiUxComponent } from './components/images-ui-ux/images-ui-ux.component';
import { CommonHeaderComponent } from '../../common-components/common-header/common-header.component';
import { CommonInfoComponent } from '../../common-components/common-info/common-info.component';

@Component({
  selector: 'app-ui-ux',
  standalone: true,
  imports: [ImagesUiUxComponent, CommonHeaderComponent, CommonInfoComponent],
  templateUrl: './ui-ux.component.html',
  styleUrl: './ui-ux.component.css',
})
export class UiUxComponent {}
