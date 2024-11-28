import { Component, OnInit } from '@angular/core';
import { CommonHeaderComponent } from '../../common-components/common-header/common-header.component';
import { CommonInfoComponent } from '../../common-components/common-info/common-info.component';
import { ImagesSeoComponent } from './components/images-seo/images-seo.component';

@Component({
  selector: 'app-seo',
  standalone: true,
  imports: [CommonHeaderComponent, CommonInfoComponent, ImagesSeoComponent],
  templateUrl: './seo.component.html',
  styleUrl: './seo.component.css',
})
export class SeoComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
