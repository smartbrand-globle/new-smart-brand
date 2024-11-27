import { Component } from '@angular/core';
import { ImagesMobileComponent } from './components/images-mobile/images-mobile.component';
import { CommonHeaderComponent } from '../../common-components/common-header/common-header.component';
import { CommonInfoComponent } from '../../common-components/common-info/common-info.component';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [ImagesMobileComponent, CommonHeaderComponent, CommonInfoComponent],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css',
})
export class MobileComponent {}
